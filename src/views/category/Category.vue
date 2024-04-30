<template>
  <div id="category">
    <nav-bar class="category-nav"
      ><template #center>商品分类</template></nav-bar
    >
    <div class="content">
      <tab-menu
        :categories="categories"
        @selectItem="selectItem"
        class="tab-menu"
      ></tab-menu>

      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
          ></tab-content-category>
          <tab-control
            :titles="['综合', '新品', '销量']"
            @tabClick="tabClick"
          ></tab-control>
          <tab-content-detail
            :category-detail="showCategoryDetail"
          ></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "../../components/content/tabControl/TabControl";
import TabContentCategory from "./childComps/TabContentCategory";
import TabContentDetail from "./childComps/TabContentDetail";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "@/network/category";
import TabMenu from "./childComps/TabMenu";
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabControl,
    TabContentCategory,
    TabContentDetail
  },
  data() {
    return {
      categories: [], // 左侧商品类别
      categoryData: [], // 左侧商品item的详细信息
      currentIndex: -1,
      currentType: "pop"
    };
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      //   console.log(this.currentIndex); //0
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // console.log(res);
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {}, // 每个类别的全部子分类
            categoryDetail: {
              pop: [], // 综合
              new: [], // 新品
              sell: [] // 销量
            }
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      // 每个分类item的id
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        // 将数据存在categoryData数组中
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail("pop");
        this._getCategoryDetail("new");
        this._getCategoryDetail("sell");
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] =
          res.data || res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // console.log(this.currentType);
    },
    selectItem(index) {
      this._getSubcategories(index);
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
}
</style>
