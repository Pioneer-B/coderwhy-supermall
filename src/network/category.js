import { request, mockRequest } from "./request";

// export function getCategory() {
//   return request({
//     url: "/category"
//   });
// }

// export function getSubcategory(maitKey) {
//   return request({
//     url: "/subcategory",
//     params: {
//       maitKey
//     }
//   });
// }

// export function getCategoryDetail(miniWallkey, type) {
//   return request({
//     url: "/subcategory/detail",
//     params: {
//       miniWallkey,
//       type
//     }
//   });
// }

// ------------------------

export function getCategory() {
  return mockRequest({
    url: "/post",
    method: "post",
    data: {
      category: {
        context: {
          currentTime: 1538143484
        },
        isEnd: true,
        list: [
          {
            miniWallkey: "10062603",
            maitKey: "3627",
            acm:
              "3.mce.1_10_1ia3k.117330.0.gkhzdr4X3j1mh.pos_0-m_426420-sd_119",
            title: "正在流行"
          },
          {
            miniWallkey: "50003",
            maitKey: "582",
            acm:
              "3.mce.1_10_1ia3m.117330.0.gkhzdr4X3j1mi.pos_1-m_426421-sd_119",
            title: "上衣"
          },
          {
            miniWallkey: "50005",
            maitKey: "596",
            acm:
              "3.mce.1_10_1ia3o.117330.0.gkhzdr4X3j1mj.pos_2-m_426422-sd_119",
            title: "裤子"
          },
          {
            miniWallkey: "50004",
            maitKey: "595",
            acm:
              "3.mce.1_10_1ia3q.117330.0.gkhzdr4X3j1mk.pos_3-m_426423-sd_119",
            title: "裙子"
          },
          {
            miniWallkey: "50006",
            maitKey: "598",
            acm:
              "3.mce.1_10_1ia3s.117330.0.gkhzdr4X3j1ml.pos_4-m_426424-sd_119",
            title: "内衣"
          },
          {
            miniWallkey: "50532",
            maitKey: "597",
            acm:
              "3.mce.1_10_1ia3u.117330.0.gkhzdr4X3j1mm.pos_5-m_426425-sd_119",
            title: "女鞋"
          },
          {
            miniWallkey: "51716",
            maitKey: "599",
            acm:
              "3.mce.1_10_1ia3w.117330.0.gkhzdr4X3j1mn.pos_6-m_426426-sd_119",
            title: "男友"
          },
          {
            miniWallkey: "50675",
            maitKey: "600",
            acm:
              "3.mce.1_10_1ia3y.117330.0.gkhzdr4X3j1mo.pos_7-m_426427-sd_119",
            title: "包包"
          },
          {
            miniWallkey: "10056587",
            maitKey: "5253",
            acm:
              "3.mce.1_10_1ia40.117330.0.gkhzdr4X3j1mp.pos_8-m_426428-sd_119",
            title: "运动"
          },
          {
            miniWallkey: "50797",
            maitKey: "609",
            acm:
              "3.mce.1_10_1ia42.117330.0.gkhzdr4X3j1mq.pos_9-m_426429-sd_119",
            title: "配饰"
          },
          {
            miniWallkey: "50010",
            maitKey: "594",
            acm:
              "3.mce.1_10_1ia46.117330.0.gkhzdr4X3j1mr.pos_10-m_426431-sd_119",
            title: "美妆"
          },
          {
            miniWallkey: "52378",
            maitKey: "830",
            acm:
              "3.mce.1_10_1ia48.117330.0.gkhzdr4X3j1ms.pos_11-m_426432-sd_119",
            title: "个护"
          },
          {
            miniWallkey: "10057031",
            maitKey: "602",
            acm:
              "3.mce.1_10_1ia4a.117330.0.gkhzdr4X3j1mt.pos_12-m_426433-sd_119",
            title: "家居"
          },
          {
            miniWallkey: "10060232",
            maitKey: "606",
            acm:
              "3.mce.1_10_1ia4c.117330.0.gkhzdr4X3j1mu.pos_13-m_426434-sd_119",
            title: "百货"
          },
          {
            miniWallkey: "20003089",
            maitKey: "603",
            acm:
              "3.mce.1_10_1ia4e.117330.0.gkhzdr4X3j1mv.pos_14-m_426435-sd_119",
            title: "母婴"
          },
          {
            miniWallkey: "52014",
            maitKey: "605",
            acm:
              "3.mce.1_10_1ia4k.117330.0.gkhzdr4X3j1mw.pos_15-m_426438-sd_119",
            title: "食品"
          }
        ],
        nextPage: 1
      }
    }
  });
}

export function getSubcategory(maitKey) {
  if (maitKey === "3627") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        context: {
          currentTime: 1538143484
        },
        info: {
          image: "",
          link: "",
          title: "正在流行"
        },
        isEnd: false,
        list: [
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_3de2717i8dj6hjjifj4d5e3a28f6e_180x180.gif",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=20003434&title=%E7%A7%8B%E6%AC%BE%E4%B8%8A%E6%96%B0&acm=3.mce.1_10_1h1s8.3627.0.itmrvr4X3jfV7.pos_0-m_397704-sd_119",
            acm: "3.mce.1_10_1h1s8.3627.0.itmrvr4X3jfV7.pos_0-m_397704-sd_119",
            title: "秋款上新"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_34a7adb05kl63g6ba3121ekgi2bda_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50243&title=%E6%97%B6%E5%B0%9A%E5%A5%97%E8%A3%85&acm=3.mce.1_10_1h1s4.3627.0.itmrvr4X3jfV8.pos_1-m_397702-sd_119",
            acm: "3.mce.1_10_1h1s4.3627.0.itmrvr4X3jfV8.pos_1-m_397702-sd_119",
            title: "时尚套装"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_3gjj68llefd9920id1242ijfaj408_120x120.png",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50045&title=%E8%BF%9E%E8%A1%A3%E8%A3%99&acm=3.mce.1_10_1h1s6.3627.0.itmrvr4X3jfV9.pos_2-m_397703-sd_119",
            acm: "3.mce.1_10_1h1s6.3627.0.itmrvr4X3jfV9.pos_2-m_397703-sd_119",
            title: "连衣裙"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50244&title=T%E6%81%A4&acm=3.mce.1_10_1h1sc.3627.0.itmrvr4X3jfVa.pos_3-m_397706-sd_119",
            acm: "3.mce.1_10_1h1sc.3627.0.itmrvr4X3jfVa.pos_3-m_397706-sd_119",
            title: "T恤"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_11jc696d6303jflc5lahaahb12if0_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50206&title=%E7%89%9B%E4%BB%94%E8%A3%A4&acm=3.mce.1_10_1h1s2.3627.0.itmrvr4X3jfVb.pos_4-m_397701-sd_119",
            acm: "3.mce.1_10_1h1s2.3627.0.itmrvr4X3jfVb.pos_4-m_397701-sd_119",
            title: "牛仔裤"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_1bahd1ba76g4432bj80d2cdi1haic_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50273&title=%E5%8D%AB%E8%A1%A3&acm=3.mce.1_10_1h1s0.3627.0.itmrvr4X3jfVc.pos_5-m_397700-sd_119",
            acm: "3.mce.1_10_1h1s0.3627.0.itmrvr4X3jfVc.pos_5-m_397700-sd_119",
            title: "卫衣"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_6g5hb85kb4le8g12fe7406kgii2a4_200x200.jpg",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50250&title=%E7%A7%8B%E6%AC%BE%E5%A4%96%E5%A5%97&acm=3.mce.1_10_1h1se.3627.0.itmrvr4X3jfVd.pos_6-m_397707-sd_119",
            acm: "3.mce.1_10_1h1se.3627.0.itmrvr4X3jfVd.pos_6-m_397707-sd_119",
            title: "秋款外套"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_2k394laf927gg1cek31l9jc6ag66b_120x120.png",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50249&title=%E8%A1%AC%E8%A1%AB&acm=3.mce.1_10_1h1sa.3627.0.itmrvr4X3jfVe.pos_7-m_397705-sd_119",
            acm: "3.mce.1_10_1h1sa.3627.0.itmrvr4X3jfVe.pos_7-m_397705-sd_119",
            title: "衬衫"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180903_7aa007cgekcl617fc99kc18ck2dg5_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=20003435&title=%E9%92%88%E7%BB%87%E8%A1%AB&acm=3.mce.1_10_1h1si.3627.0.itmrvr4X3jfVf.pos_8-m_397709-sd_119",
            acm: "3.mce.1_10_1h1si.3627.0.itmrvr4X3jfVf.pos_8-m_397709-sd_119",
            title: "针织衫"
          },
          {
            image:
              "https://s3.mogucdn.com/mlcdn/c45406/180211_78k7b1f3c0g2cgh5fib3afgi9gehd_120x120.png",
            link:
              "http://m.mogujie.com/wall/book/clothing?fcid=50214&title=%E4%BC%91%E9%97%B2%E8%A3%A4&acm=3.mce.1_10_1h1sg.3627.0.itmrvr4X3jfVg.pos_9-m_397708-sd_119",
            acm: "3.mce.1_10_1h1sg.3627.0.itmrvr4X3jfVg.pos_9-m_397708-sd_119",
            title: "休闲裤"
          },
          {
            image:
              "https://s3.mogucdn.com/mlcdn/c45406/170621_0bki4gegikdaa0jec4gi47lfge174_120x120.png",
            link:
              "http://m.mogujie.com/x6/wall/book/shopping?fcid=10058428&title=运动套装&mt=12.5188.r152139.24314&acm=3.mce.1_10_1beok.3627.0.itmrvr4X3jfVh.pos_10-m_266094-sd_119",
            acm: "3.mce.1_10_1beok.3627.0.itmrvr4X3jfVh.pos_10-m_266094-sd_119",
            title: "运动套装"
          },
          {
            image:
              "https://s17.mogucdn.com/mlcdn/c45406/180419_030g5gd85ei2bfd5dda4dkgjlf9cj_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/shopping?fcid=10062839&title=清新泳衣&acm=3.mce.1_10_1hpzc.3627.0.itmrvr4X3jfVi.pos_11-m_413384-sd_119",
            acm: "3.mce.1_10_1hpzc.3627.0.itmrvr4X3jfVi.pos_11-m_413384-sd_119",
            title: "清新泳衣"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180613_1hkc4klbjlejil2k1jklhfc57515f_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/boyfriend?fcid=10056043&title=T%E6%81%A4&acm=3.mce.1_10_1hpys.3627.0.itmrvr4X3jfVj.pos_12-m_413374-sd_119",
            acm: "3.mce.1_10_1hpys.3627.0.itmrvr4X3jfVj.pos_12-m_413374-sd_119",
            title: "T恤男"
          },
          {
            image:
              "https://s17.mogucdn.com/mlcdn/c45406/180419_787h66887f28f4bklbb8496b102lh_180x180.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/boyfriend?fcid=20002795&title=衬衫&acm=3.mce.1_10_1hpz0.3627.0.itmrvr4X3jfVk.pos_13-m_413378-sd_119",
            acm: "3.mce.1_10_1hpz0.3627.0.itmrvr4X3jfVk.pos_13-m_413378-sd_119",
            title: "衬衫"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180613_6h9aibi1237a956g7h1ij950d4ee6_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/boyfriend?fcid=50094&title=%E4%BC%91%E9%97%B2%E8%A3%A4&acm=3.mce.1_10_1hpz4.3627.0.itmrvr4X3jfVl.pos_14-m_413380-sd_119",
            acm: "3.mce.1_10_1hpz4.3627.0.itmrvr4X3jfVl.pos_14-m_413380-sd_119",
            title: "男休闲裤"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180423_7213g8b3l215jb2a4932b039afe6e_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/boyfriend?fcid=50137&title=%E7%89%9B%E4%BB%94%E8%A3%A4&acm=3.mce.1_10_1hpz6.3627.0.itmrvr4X3jfVm.pos_15-m_413381-sd_119",
            acm: "3.mce.1_10_1hpz6.3627.0.itmrvr4X3jfVm.pos_15-m_413381-sd_119",
            title: "男牛仔裤"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180613_181iajdi2a63ala8253ejgh92cld8_120x120.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/boyfriend?fcid=20002845&title=短裤&acm=3.mce.1_10_1hpzk.3627.0.itmrvr4X3jfVn.pos_16-m_413388-sd_119",
            acm: "3.mce.1_10_1hpzk.3627.0.itmrvr4X3jfVn.pos_16-m_413388-sd_119",
            title: "五分裤"
          },
          {
            image:
              "https://s3.mogucdn.com/mlcdn/c45406/180419_274d4g40cbk0f3ij6j01je5k22144_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/boyfriend?fcid=50105&title=%E4%BC%91%E9%97%B2%E9%9E%8B&acm=3.mce.1_10_1hpza.3627.0.itmrvr4X3jfVo.pos_17-m_413383-sd_119",
            acm: "3.mce.1_10_1hpza.3627.0.itmrvr4X3jfVo.pos_17-m_413383-sd_119",
            title: "休闲鞋男"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180613_60b3hfji4kjg59k020bc1590k2a16_120x120.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/boyfriend?fcid=50188&title=%E5%B8%86%E5%B8%83%E9%9E%8B&acm=3.mce.1_10_1ido8.3627.0.itmrvr4X3jfVp.pos_18-m_428736-sd_119",
            acm: "3.mce.1_10_1ido8.3627.0.itmrvr4X3jfVp.pos_18-m_428736-sd_119",
            title: "帆布鞋男"
          },
          {
            image:
              "https://s10.mogucdn.com/p2/170104/rj_154g0c5iffe454i9l2f2cbdib9g06_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/shopping?fcid=20001232&title=%E8%BF%90%E5%8A%A8%E9%9E%8B%E5%A5%B3&acm=3.mce.1_10_1hpzi.3627.0.itmrvr4X3jfVq.pos_19-m_413387-sd_119",
            acm: "3.mce.1_10_1hpzi.3627.0.itmrvr4X3jfVq.pos_19-m_413387-sd_119",
            title: "运动鞋女"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180810_3j4fe99a07aj0f123443li2f49f6g_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/shopping?fcid=51943&title=%E9%9D%B4%E5%AD%90&acm=3.mce.1_10_1izvg.3627.0.itmrvr4X3jfVr.pos_20-m_443122-sd_119",
            acm: "3.mce.1_10_1izvg.3627.0.itmrvr4X3jfVr.pos_20-m_443122-sd_119",
            title: "靴子"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180731_5a5d7ci9l24l256k06k0a35dg3g76_120x120.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/shopping?fcid=51267&title=%E5%8D%95%E9%9E%8B&acm=3.mce.1_10_177sm.3627.0.itmrvr4X3jfVs.pos_21-m_168319-sd_119",
            acm: "3.mce.1_10_177sm.3627.0.itmrvr4X3jfVs.pos_21-m_168319-sd_119",
            title: "单鞋"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180813_1g377ihjj4dh7lial1b45bbc2d67c_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/shoes?fcid=51268&title=%E6%B4%BB%E5%8A%9B%E8%BF%90%E5%8A%A8&acm=3.mce.1_10_177so.3627.0.itmrvr4X3jfVt.pos_22-m_168320-sd_119",
            acm: "3.mce.1_10_177so.3627.0.itmrvr4X3jfVt.pos_22-m_168320-sd_119",
            title: "活力运动"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180731_1eki2je5kjg461h69cfc4c2gh6598_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/shoes?fcid=51224&title=%E4%BC%91%E9%97%B2%E5%B8%86%E5%B8%83&acm=3.mce.1_10_1ittw.3627.0.itmrvr4X3jfVu.pos_23-m_439206-sd_119",
            acm: "3.mce.1_10_1ittw.3627.0.itmrvr4X3jfVu.pos_23-m_439206-sd_119",
            title: "休闲帆布"
          },
          {
            image:
              "https://s3.mogucdn.com/mlcdn/c45406/180227_069ci8he1419k16did4c1lk9l5j3g_120x120.jpg",
            link:
              "http://m.mogujie.com/wall/book/shoes?fcid=51249&title=%E5%B0%8F%E7%99%BD%E9%9E%8B&acm=3.mce.1_10_1hs5c.3627.0.itmrvr4X3jfVv.pos_24-m_414788-sd_119",
            acm: "3.mce.1_10_1hs5c.3627.0.itmrvr4X3jfVv.pos_24-m_414788-sd_119",
            title: "小白鞋"
          },
          {
            image:
              "https://s3.mogucdn.com/mlcdn/c45406/170621_2l01a7607dage3cbi133bda4kldbe_180x180.jpg",
            link:
              "http://m.mogujie.com/wall/book/shopping?fcid=10057023&title=帆布鞋&acm=3.mce.1_10_1beoc.3627.0.itmrvr4X3jfVw.pos_25-m_266090-sd_119",
            acm: "3.mce.1_10_1beoc.3627.0.itmrvr4X3jfVw.pos_25-m_266090-sd_119",
            title: "帆布鞋"
          },
          {
            image:
              "http://s18.mogucdn.com/p1/160323/upload_ie3wmyzsmq2doojxg4zdambqgayde_130x130.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/bags?fcid=50657&title=双肩包&mt=12.3627.r76835.3171&acm=3.mce.1_10_177ss.3627.0.itmrvr4X3jfVx.pos_26-m_168322-sd_119",
            acm: "3.mce.1_10_177ss.3627.0.itmrvr4X3jfVx.pos_26-m_168322-sd_119",
            title: "校园双肩"
          },
          {
            image:
              "http://s16.mogucdn.com/p2/161013/upload_25f0d3ad4l7f3hg1554b9ck61fdge_130x130.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/bags?fcid=50775&title=大包&acm=3.mce.1_10_177su.3627.0.itmrvr4X3jfVy.pos_27-m_168323-sd_119",
            acm: "3.mce.1_10_177su.3627.0.itmrvr4X3jfVy.pos_27-m_168323-sd_119",
            title: "秋冬大包"
          }
        ],
        nextPage: 2
      }
    });
  }
  if (maitKey === "582") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        context: {
          currentTime: 1538143486
        },
        info: {
          title: "上衣"
        },
        isEnd: false,
        list: [
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180816_2h5k24ifj90k75ej5g0k8e4i3551e_180x180.gif",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50278&title=秋季新品&acm=3.mce.1_10_1j494.582.0.itmrvr4X3jJPC.pos_0-m_445960-sd_119",
            startTime: 1534608000,
            acm: "3.mce.1_10_1j494.582.0.itmrvr4X3jJPC.pos_0-m_445960-sd_119",
            sort: 1,
            endTime: 0,
            title: "秋季新品"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180816_450b2h908708589ib2cbi61ildg05_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50249&title=衬衫&acm=3.mce.1_10_1j498.582.0.itmrvr4X3jJPD.pos_1-m_445962-sd_119",
            acm: "3.mce.1_10_1j498.582.0.itmrvr4X3jJPD.pos_1-m_445962-sd_119",
            sort: 2,
            link_xcx: "",
            title: "衬衫",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180816_81fk2c7gkh03al07hg64hi3ljb393_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50273&title=时尚卫衣&acm=3.mce.1_10_1j49a.582.0.itmrvr4X3jJPE.pos_2-m_445963-sd_119",
            acm: "3.mce.1_10_1j49a.582.0.itmrvr4X3jJPE.pos_2-m_445963-sd_119",
            sort: 3,
            link_xcx: "",
            title: "时尚卫衣",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180824_5jallaagb99b1il32kc24j0388gac_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10057086&title=秋季外套&acm=3.mce.1_10_1jcdk.582.0.itmrvr4X3jJPF.pos_3-m_451224-sd_119",
            acm: "3.mce.1_10_1jcdk.582.0.itmrvr4X3jJPF.pos_3-m_451224-sd_119",
            sort: 4,
            link_xcx: "",
            title: "秋季外套",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180824_2efc2481egf67c3gi7889f3ib03lh_180x180.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50258&title=针织衫&acm=3.mce.1_10_1jcdm.582.0.itmrvr4X3jJPG.pos_4-m_451225-sd_119",
            startTime: 1536595200,
            acm: "3.mce.1_10_1jcdm.582.0.itmrvr4X3jJPG.pos_4-m_451225-sd_119",
            sort: 5,
            endTime: 0,
            title: "针织衫"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180827_468gjeechik60d487ec3bke07glaa_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10055532&title=显瘦V领&acm=3.mce.1_10_1jcdw.582.0.itmrvr4X3jJPH.pos_5-m_451230-sd_119",
            acm: "3.mce.1_10_1jcdw.582.0.itmrvr4X3jJPH.pos_5-m_451230-sd_119",
            sort: 6,
            link_xcx: "",
            title: "显瘦V领",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180910_0gd5i35805igd4d9bijc807f2jlj0_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50253&title=新款毛衣&acm=3.mce.1_10_1jcdo.582.0.itmrvr4X3jJPI.pos_6-m_451226-sd_119",
            acm: "3.mce.1_10_1jcdo.582.0.itmrvr4X3jJPI.pos_6-m_451226-sd_119",
            sort: 7,
            link_xcx: "",
            title: "新款毛衣",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180910_1l7ii4gejd9g5333313gefaebbhf5_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50256&title=打底衫&acm=3.mce.1_10_1jcdq.582.0.itmrvr4X3jJPJ.pos_7-m_451227-sd_119",
            acm: "3.mce.1_10_1jcdq.582.0.itmrvr4X3jJPJ.pos_7-m_451227-sd_119",
            sort: 8,
            link_xcx: "",
            title: "打底衫",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180815_1c16ad53j3kh700bcj6bai3828g04_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50261&title=风衣&acm=3.mce.1_10_1j49y.582.0.itmrvr4X3jJPK.pos_8-m_445975-sd_119",
            acm: "3.mce.1_10_1j49y.582.0.itmrvr4X3jJPK.pos_8-m_445975-sd_119",
            sort: 9,
            link_xcx: "",
            title: "风衣",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180509_3l2chdef6gaagjf317f53e91g0g2c_180x180.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50244&title=特卖T恤&acm=3.mce.1_10_1i4k6.582.0.itmrvr4X3jJPL.pos_9-m_422831-sd_119",
            startTime: 1535040000,
            acm: "3.mce.1_10_1i4k6.582.0.itmrvr4X3jJPL.pos_9-m_422831-sd_119",
            sort: 10,
            endTime: 0,
            title: "特卖T恤"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180910_6hcgh3k6gdi8j0101ak0i2dk8kldh_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10059867&title=连帽卫衣&acm=3.mce.1_10_1jce2.582.0.itmrvr4X3jJPM.pos_10-m_451233-sd_119",
            acm: "3.mce.1_10_1jce2.582.0.itmrvr4X3jJPM.pos_10-m_451233-sd_119",
            sort: 11,
            link_xcx: "",
            title: "连帽卫衣",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180827_709iij56lljb42a4a5ll32i95c91e_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=52174&title=经典条纹&acm=3.mce.1_10_1jce8.582.0.itmrvr4X3jJPN.pos_11-m_451236-sd_119",
            acm: "3.mce.1_10_1jce8.582.0.itmrvr4X3jJPN.pos_11-m_451236-sd_119",
            sort: 12,
            link_xcx: "",
            title: "经典条纹",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180827_2ded7fbcif6hejke7l0bhdha0b2c7_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10055075&title=白衬衫&acm=3.mce.1_10_1jcdy.582.0.itmrvr4X3jJPO.pos_12-m_451231-sd_119",
            acm: "3.mce.1_10_1jcdy.582.0.itmrvr4X3jJPO.pos_12-m_451231-sd_119",
            sort: 13,
            link_xcx: "",
            title: "白衬衫",
            wxa_appId: ""
          },
          {
            image:
              "https://s2.mogucdn.com/mlcdn/c45406/170417_179ik9l4ggac9ca5ddh1k8lgf21f9_130x130.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50259&title=棒球外套&acm=3.mce.1_10_1j4a2.582.0.itmrvr4X3jJPP.pos_13-m_445977-sd_119",
            startTime: 1535040000,
            acm: "3.mce.1_10_1j4a2.582.0.itmrvr4X3jJPP.pos_13-m_445977-sd_119",
            sort: 14,
            endTime: 0,
            title: "棒球外套"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180827_7bfj6l2d169b6cb2l4gifbi720d3e_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=20003385&title=ins超火&acm=3.mce.1_10_1jce0.582.0.itmrvr4X3jJPQ.pos_14-m_451232-sd_119",
            acm: "3.mce.1_10_1jce0.582.0.itmrvr4X3jJPQ.pos_14-m_451232-sd_119",
            sort: 15,
            link_xcx: "",
            title: "ins超火",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180815_7d01jlhd77je2j25abh1faf570kaj_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50248&title=背心吊带&acm=3.mce.1_10_1j49e.582.0.itmrvr4X3jJPR.pos_15-m_445965-sd_119",
            acm: "3.mce.1_10_1j49e.582.0.itmrvr4X3jJPR.pos_15-m_445965-sd_119",
            sort: 16,
            link_xcx: "",
            title: "背心吊带",
            wxa_appId: ""
          },
          {
            image:
              "https://s3.mogucdn.com/mlcdn/c45406/170813_5g9356629g61b6j0cj1hieal48lc6_120x120.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50270&title=牛仔外套&mt=12.6551.r151966.24285&acm=3.mce.1_10_1j4a0.582.0.itmrvr4X3jJPS.pos_16-m_445976-sd_119",
            startTime: 1535040000,
            acm: "3.mce.1_10_1j4a0.582.0.itmrvr4X3jJPS.pos_16-m_445976-sd_119",
            sort: 17,
            endTime: 0,
            title: "牛仔外套"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180827_08k40ld9d7d9d3kjg806ji67k99ad_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10056629&title=一字肩&acm=3.mce.1_10_1jce4.582.0.itmrvr4X3jJPT.pos_17-m_451234-sd_119",
            acm: "3.mce.1_10_1jce4.582.0.itmrvr4X3jJPT.pos_17-m_451234-sd_119",
            sort: 18,
            link_xcx: "",
            title: "一字肩",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180810_2l9fjld9d8327f50ghd4524cjd6l7_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10063664&title=BF风衬衫&acm=3.mce.1_10_1j49w.582.0.itmrvr4X3jJPU.pos_18-m_445974-sd_119",
            acm: "3.mce.1_10_1j49w.582.0.itmrvr4X3jJPU.pos_18-m_445974-sd_119",
            sort: 19,
            link_xcx: "",
            title: "BF风衬衫",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180910_1hb4j41h55021egjajal084f0kdk5_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=10059861&title=毛衣外套&acm=3.mce.1_10_1jcds.582.0.itmrvr4X3jJPV.pos_19-m_451228-sd_119",
            acm: "3.mce.1_10_1jcds.582.0.itmrvr4X3jJPV.pos_19-m_451228-sd_119",
            sort: 20,
            link_xcx: "",
            title: "毛衣外套",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180910_55jgke9j8kjc764egl0l01g3b75gi_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=52171&title=皮夹克&acm=3.mce.1_10_1jcdu.582.0.itmrvr4X3jJPW.pos_20-m_451229-sd_119",
            acm: "3.mce.1_10_1jcdu.582.0.itmrvr4X3jJPW.pos_20-m_451229-sd_119",
            sort: 21,
            link_xcx: "",
            title: "皮夹克",
            wxa_appId: ""
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180827_083d8f7g0kckflj98gc2l77caggha_100x100.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50255&title=西装外套&acm=3.mce.1_10_1jcea.582.0.itmrvr4X3jJPX.pos_21-m_451237-sd_119",
            acm: "3.mce.1_10_1jcea.582.0.itmrvr4X3jJPX.pos_21-m_451237-sd_119",
            sort: 22,
            link_xcx: "",
            title: "西装外套",
            wxa_appId: ""
          },
          {
            image:
              "https://s11.mogucdn.com/mlcdn/c45406/170823_7dkl85cdikcfd4940de030hg315il_120x120.jpg",
            link:
              "http://m.mogujie.com/x6/wall/book/shopping?fcid=10062628&title=刺绣衬衫&acm=3.mce.1_10_1dvnq.582.0.itmrvr4X3jJPY.pos_22-m_323751-sd_119",
            acm: "3.mce.1_10_1dvnq.582.0.itmrvr4X3jJPY.pos_22-m_323751-sd_119",
            sort: 23,
            title: "刺绣衬衫"
          },
          {
            image:
              "https://s10.mogucdn.com/mlcdn/c45406/180815_019aec6dj21jh6deje7k0182b3533_180x180.jpg",
            wxa_link: "",
            link:
              "http://m.mogujie.com/x6/wall/book/clothing?fcid=50245&title=雪纺衫&acm=3.mce.1_10_1j49g.582.0.itmrvr4X3jJPZ.pos_23-m_445966-sd_119",
            acm: "3.mce.1_10_1j49g.582.0.itmrvr4X3jJPZ.pos_23-m_445966-sd_119",
            sort: 24,
            link_xcx: "",
            title: "雪纺衫",
            wxa_appId: ""
          }
        ],
        nextPage: 2
      }
    });
  }

  return mockRequest({
    url: "/post",
    method: "post",
    data: {
      context: {
        currentTime: 1538143487
      },
      info: {
        title: "裤子"
      },
      isEnd: false,
      list: [
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/clothing?fcid=50206&title=牛仔裤&fId=&mt=12.596.r73445.2913&acm=3.mce.1_10_17a0i.596.0.gkhzcr4X3jY4S.pos_0-m_169757-sd_119",
          startTime: 1460540280,
          acm: "3.mce.1_10_17a0i.596.0.gkhzcr4X3jY4S.pos_0-m_169757-sd_119",
          sort: 1,
          endTime: 0,
          title: "牛仔裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_2g113l47f70kg7a0b3a3k2c3147ba_130x130.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50214&title=%E4%BC%91%E9%97%B2%E8%A3%A4&acm=3.mce.1_10_17a0y.596.0.gkhzcr4X3jY4T.pos_1-m_169765-sd_119",
          startTime: 1463389380,
          acm: "3.mce.1_10_17a0y.596.0.gkhzcr4X3jY4T.pos_1-m_169765-sd_119",
          sort: 2,
          endTime: 0,
          title: "休闲裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_82f53jf7jj79ge65la2gd1jgajdl0_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/clothing?fcid=50216&title=打底裤&fId=&mt=12.596.r73449.2913&acm=3.mce.1_10_17a0q.596.0.gkhzcr4X3jY4U.pos_2-m_169761-sd_119",
          startTime: 1463389260,
          acm: "3.mce.1_10_17a0q.596.0.gkhzcr4X3jY4U.pos_2-m_169761-sd_119",
          sort: 3,
          endTime: 0,
          title: "打底裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_33053a8addcejl12da55b1df4kd8k_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/clothing?fcid=50211&title=小脚裤&fId=&mt=12.596.r73448.2913&acm=3.mce.1_10_17a0m.596.0.gkhzcr4X3jY4V.pos_3-m_169759-sd_119",
          startTime: 1463389080,
          acm: "3.mce.1_10_17a0m.596.0.gkhzcr4X3jY4V.pos_3-m_169759-sd_119",
          sort: 4,
          endTime: 0,
          title: "小脚裤"
        },
        {
          image:
            "https://s3.mogucdn.com/mlcdn/c45406/180307_6j14ah0j70a3gcd1c10aaj8bi4led_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/clothing?fcid=10055042&title=短裤&fId=&mt=12.596.r73447.2913&acm=3.mce.1_10_17a0k.596.0.gkhzcr4X3jY4W.pos_4-m_169758-sd_119",
          startTime: 1458558480,
          acm: "3.mce.1_10_17a0k.596.0.gkhzcr4X3jY4W.pos_4-m_169758-sd_119",
          sort: 5,
          endTime: 0,
          title: "短裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_6eiac783d9f3d76j3f0ah95fa7jaf_130x130.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=10063622&title=%E4%BE%A7%E8%BE%B9%E6%9D%A1%E7%BA%B9%E8%BF%90%E5%8A%A8%E8%A3%A4&acm=3.mce.1_10_17a0g.596.0.gkhzcr4X3jY4X.pos_5-m_169756-sd_119",
          startTime: 1463388720,
          acm: "3.mce.1_10_17a0g.596.0.gkhzcr4X3jY4X.pos_5-m_169756-sd_119",
          sort: 6,
          endTime: 0,
          title: "侧边条纹运动裤"
        },
        {
          image:
            "http://s18.mogucdn.com/p2/161012/upload_38ka743iaia35c51lb4b53ec0bi2h_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/clothing?fcid=50208&title=背带裤&fId=&mt=12.596.r73446.2913&acm=3.mce.1_10_17a0o.596.0.gkhzcr4X3jY4Y.pos_6-m_169760-sd_119",
          startTime: 1463389200,
          acm: "3.mce.1_10_17a0o.596.0.gkhzcr4X3jY4Y.pos_6-m_169760-sd_119",
          sort: 7,
          endTime: 0,
          title: "背带裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_322ab5e81h9363c4eg0834bk2dk4e_130x130.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50212&title=%E7%A0%B4%E6%B4%9E%E7%89%9B%E4%BB%94%E8%A3%A4&acm=3.mce.1_10_17a12.596.0.gkhzcr4X3jY4Z.pos_7-m_169767-sd_119",
          startTime: 1463389860,
          acm: "3.mce.1_10_17a12.596.0.gkhzcr4X3jY4Z.pos_7-m_169767-sd_119",
          sort: 8,
          endTime: 0,
          title: "破洞牛仔裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_6cf1e4affi4i9560bh5fge00jgcj9_130x130.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50207&title=%E9%98%94%E8%85%BF%E8%A3%A4&acm=3.mce.1_10_17a0s.596.0.gkhzdr4X3jY40.pos_8-m_169762-sd_119",
          startTime: 1463389740,
          acm: "3.mce.1_10_17a0s.596.0.gkhzdr4X3jY40.pos_8-m_169762-sd_119",
          sort: 9,
          endTime: 0,
          title: "阔腿裤"
        },
        {
          image:
            "http://s18.mogucdn.com/p2/160912/upload_30elj3j7i730cg67efea4fj6fj3d3_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/clothing?fcid=10059842&title=宽松牛仔裤&acm=3.mce.1_10_17a0u.596.0.gkhzdr4X3jY41.pos_9-m_169763-sd_119",
          startTime: 1460542680,
          acm: "3.mce.1_10_17a0u.596.0.gkhzdr4X3jY41.pos_9-m_169763-sd_119",
          sort: 10,
          endTime: 0,
          title: "宽松牛仔裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_5aj956hdekk0244a4ee32h7j06g4d_130x130.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=10055617&title=裙裤&acm=3.mce.1_10_17a0w.596.0.gkhzdr4X3jY42.pos_10-m_169764-sd_119",
          startTime: 1463389740,
          acm: "3.mce.1_10_17a0w.596.0.gkhzdr4X3jY42.pos_10-m_169764-sd_119",
          sort: 11,
          endTime: 0,
          title: "刺绣牛仔裤"
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/170623_497a3276ee3cl3jl2f80a03i5jffc_130x130.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=10063617&title=%E9%9B%AA%E7%BA%BA%E7%9F%AD%E8%A3%A4&acm=3.mce.1_10_17a10.596.0.gkhzdr4X3jY43.pos_11-m_169766-sd_119",
          startTime: 1460540580,
          acm: "3.mce.1_10_17a10.596.0.gkhzdr4X3jY43.pos_11-m_169766-sd_119",
          sort: 12,
          endTime: 0,
          title: "雪纺短裤"
        }
      ],
      nextPage: 2
    }
  });
}

export function getCategoryDetail(miniWallkey, type) {
  if (type === "pop") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: [
        {
          tradeItemId: "1kf8q3w",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/170818_6i5id70ieb5d3c9j04g8gh7j8941k_640x960.jpg",
          iid: "1kf8q3w",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_35&cparam=MTUzODE5MTY1OF8xN3J0ano0X2ZmZWZlNTVlYzA5ODZlNTFjZDRmN2QxYjEwZjY4MGI3XzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_35&cparam=MTUzODE5MTY1OF8xN3J0ano0X2ZmZWZlNTVlYzA5ODZlNTFjZDRmN2QxYjEwZjY4MGI3XzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_35",
          title: "3条装 防勾丝秋冬款连裤袜高筒袜打底袜中厚肉色丝袜打底裤袜",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xN3J0ano0X2ZmZWZlNTVlYzA5ODZlNTFjZDRmN2QxYjEwZjY4MGI3XzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 42.72,
          props: ["肉色丝袜", "防勾丝", "秋冬款", "3条装"],
          hasSimilarity: true,
          sale: "2390",
          cfav: "9884",
          price: 29.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_35&itemType=7",
          shopSeller: "丹丹精品袜铺"
        },
        {
          tradeItemId: "1k9cg24",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180412_4bjed85ahhj588ci41ih89367g570_640x960.jpg",
          iid: "1k9cg24",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_35&cparam=MTUzODE5MTY1OF8xZW10ejltX2FlY2JiNGE1MzU4ZjIxZDRhZDUyMWVlZGMxMTk1ODRmXzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTc5MjM1XzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_35&cparam=MTUzODE5MTY1OF8xZW10ejltX2FlY2JiNGE1MzU4ZjIxZDRhZDUyMWVlZGMxMTk1ODRmXzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTc5MjM1XzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          itemMarks: "1525 2 1497 138 1670 82 172 173",
          acm:
            "3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_35",
          title:
            "【2支40元 屈臣氏爆卖】思尚保湿不掉色哑光多色正品口红咬唇妆雾面丝绒 防水不脱色滋润唇膏",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xZW10ejltX2FlY2JiNGE1MzU4ZjIxZDRhZDUyMWVlZGMxMTk1ODRmXzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTc5MjM1XzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          orgPrice: 70,
          props: [
            "思尚",
            "滋润唇膏",
            "雾面",
            "唇妆",
            "不脱色",
            "不掉色",
            "哑光",
            "保湿",
            "丝绒",
            "防水",
            "多色",
            "正品",
            "2支40"
          ],
          hasSimilarity: true,
          sale: "18650",
          cfav: "25210",
          price: 35,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_35&itemType=7",
          shopSeller: "思尚店"
        },
        {
          tradeItemId: "1m7tgua",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180828_1kg4b3c6ch3i6g9lhk2llckhjd61i_640x960.jpg",
          iid: "1m7tgua",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7tgua&acm=3.ms.1_4_1m7tgua.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_431595108_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzE1OTUxMDhfNGY4Zl8wXzBfMF8xNzdfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7tgua&acm=3.ms.1_4_1m7tgua.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_431595108_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzE1OTUxMDhfNGY4Zl8wXzBfMF8xNzdfMV8zX2xvYy0w",
          itemMarks: "353 181",
          acm:
            "3.ms.1_4_1m7tgua.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_431595108_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "英伦风粗跟短靴女2018春秋季新款韩版百搭短筒靴子女时尚撞色切尔西靴方头套脚高跟鞋子",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzE1OTUxMDhfNGY4Zl8wXzBfMF8xNzdfMV8zX2xvYy0w",
          orgPrice: 139,
          props: [
            "粗跟短靴",
            "英伦风",
            "方头",
            "百搭",
            "时尚",
            "春秋季",
            "撞色",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 691,
          cfav: 1111,
          price: 97,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.78",
            descDsr: "4.77",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.83",
            serviceDsr: "4.83"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7tgua&acm=3.ms.1_4_1m7tgua.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_431595108_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "王二小店铺"
        },
        {
          tradeItemId: "1m7jsqe",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180822_6c3i8g110gkga5eh4k3k8hcg6cef2_640x960.jpg",
          iid: "1m7jsqe",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7jsqe&acm=3.ms.1_4_1m7jsqe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_430936252_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzA5MzYyNTJfNGY4Zl8wXzBfMF84NjVfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7jsqe&acm=3.ms.1_4_1m7jsqe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_430936252_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzA5MzYyNTJfNGY4Zl8wXzBfMF84NjVfMV8zX2xvYy0w",
          itemMarks: "1525 2 138 172 173",
          acm:
            "3.ms.1_4_1m7jsqe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_430936252_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "秋冬上新包包女韩版斜挎包小包2018新款包包复古手提包编织链条小方包百搭宽肩带单肩包斜挎包",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzA5MzYyNTJfNGY4Zl8wXzBfMF84NjVfMV8zX2xvYy0w",
          orgPrice: 82.86,
          props: ["斜挎包小包", "宽肩带", "编织", "百搭", "韩版", "秋冬"],
          hasSimilarity: true,
          sale: 1390,
          cfav: 3505,
          price: 55.51,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.76",
            descDsr: "4.77",
            tagDescDsr: "4.73",
            tagQualityDsr: "4.73",
            tagServiceDsr: "4.82",
            serviceDsr: "4.85"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7jsqe&acm=3.ms.1_4_1m7jsqe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_430936252_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "小小美包馆"
        },
        {
          tradeItemId: "1m6xc08",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180806_407bi19all2f8b1lckg6fg97kf0gg_640x960.jpg",
          iid: "1m6xc08",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6xc08&acm=3.ms.1_4_1m6xc08.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423506878_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjM1MDY4NzhfNGY4Zl8wXzBfMF81MjRfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6xc08&acm=3.ms.1_4_1m6xc08.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423506878_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjM1MDY4NzhfNGY4Zl8wXzBfMF81MjRfMV8zX2xvYy0w",
          itemMarks: "1525 82",
          acm:
            "3.ms.1_4_1m6xc08.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423506878_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title: "外套男春秋季韩版潮流学生修身夹克上衣男士青少年大码帅气棒球服",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjM1MDY4NzhfNGY4Zl8wXzBfMF81MjRfMV8zX2xvYy0w",
          orgPrice: 214,
          props: ["修身夹克", "帅气", "潮流", "春秋季", "大码", "男士", "韩版"],
          hasSimilarity: true,
          sale: 1548,
          cfav: 921,
          price: 128,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.93",
            descDsr: "4.93",
            tagDescDsr: "4.77",
            tagQualityDsr: "4.77",
            tagServiceDsr: "4.86",
            serviceDsr: "4.96"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6xc08&acm=3.ms.1_4_1m6xc08.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423506878_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "木羽先生 "
        },
        {
          tradeItemId: "1kkmgwy",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/170917_4i8j5h2f63g0klj95f3la6aka1b4i_640x960.jpg",
          iid: "1kkmgwy",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kkmgwy&acm=3.ms.1_4_1kkmgwy.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_345217418_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNDUyMTc0MThfNGM4N18wXzBfMF82MTVfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kkmgwy&acm=3.ms.1_4_1kkmgwy.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_345217418_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNDUyMTc0MThfNGM4N18wXzBfMF82MTVfMV8zX2xvYy0w",
          itemMarks: "1525 2 1477 149 82",
          acm:
            "3.ms.1_4_1kkmgwy.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_345217418_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "2018秋季新款男士灯芯绒小脚休闲裤韩版宽松束腿裤青少年日系百搭哈伦裤黑色长裤学生潮男裤子",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNDUyMTc0MThfNGM4N18wXzBfMF82MTVfMV8zX2xvYy0w",
          orgPrice: 114,
          props: [
            "小脚休闲裤",
            "灯芯绒",
            "日系",
            "百搭",
            "宽松",
            "男士",
            "秋季",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 1007,
          cfav: 25733,
          price: 77,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.51",
            descDsr: "4.49",
            tagDescDsr: "4.77",
            tagQualityDsr: "4.77",
            tagServiceDsr: "4.86",
            serviceDsr: "4.70"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kkmgwy&acm=3.ms.1_4_1kkmgwy.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_345217418_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "不二潮品男装"
        },
        {
          tradeItemId: "1lrnvh2",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180224_3j74be604a5j37jlkj6hcjd5fhj49_640x960.jpg",
          iid: "1lrnvh2",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lrnvh2&acm=3.ms.1_4_1lrnvh2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_349022326_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNDkwMjIzMjZfNGM4YV8wXzBfMF8yNTRfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lrnvh2&acm=3.ms.1_4_1lrnvh2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_349022326_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNDkwMjIzMjZfNGM4YV8wXzBfMF8yNTRfMV8zX2xvYy0w",
          itemMarks: "352 77 1210 82 351",
          acm:
            "3.ms.1_4_1lrnvh2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_349022326_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "[正版3个颜色]2018秋装新款男女纯色开衫夹克韩版休闲男装外套夹克日系复古修身针织衫外套",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNDkwMjIzMjZfNGM4YV8wXzBfMF8yNTRfMV8zX2xvYy0w",
          orgPrice: 114,
          props: ["夹克", "日系", "正版", "复古", "新款", "韩版"],
          hasSimilarity: true,
          sale: 897,
          cfav: 2868,
          price: 78,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.78",
            descDsr: "4.80",
            tagDescDsr: "4.77",
            tagQualityDsr: "4.77",
            tagServiceDsr: "4.86",
            serviceDsr: "4.78"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lrnvh2&acm=3.ms.1_4_1lrnvh2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_349022326_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "嘉年华VAP"
        },
        {
          tradeItemId: "1m8hki2",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180912_4i9ec0hig5lh3j98gcei6c3f3ae7f_640x960.jpg",
          iid: "1m8hki2",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8hki2&acm=3.ms.1_4_1m8hki2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437852884_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80Mzc4NTI4ODRfNGZfMF8wXzBfOTA0XzFfM19sb2MtMA==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8hki2&acm=3.ms.1_4_1m8hki2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437852884_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80Mzc4NTI4ODRfNGZfMF8wXzBfOTA0XzFfM19sb2MtMA==",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_4_1m8hki2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437852884_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "2018秋季新品韩版宽松显瘦开叉前短后长拼色针织毛衣外套+吊带背心连衣裙两件套时尚套装女",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80Mzc4NTI4ODRfNGZfMF8wXzBfOTA0XzFfM19sb2MtMA==",
          orgPrice: 97.15,
          props: [
            "时尚套装",
            "针织",
            "开叉",
            "拼色",
            "前短后长",
            "宽松显瘦",
            "秋季",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 1153,
          cfav: 3438,
          price: 68,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.62",
            descDsr: "4.63",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.72"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8hki2&acm=3.ms.1_4_1m8hki2.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437852884_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "茵素家"
        },
        {
          tradeItemId: "1m8voqa",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180922_09e2fi70fc88hefgll6ffj34e13i3_640x960.jpg",
          iid: "1m8voqa",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503500_3_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503500_70_0-dit_35&cparam=MTUzODE5MTY1OF8xOTE4Nzh5XzAyZWVkYjYzZDA5Y2RjNzFjMDFjMjY4NWUyNzc1YWNmXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503500_3_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503500_70_0-dit_35&cparam=MTUzODE5MTY1OF8xOTE4Nzh5XzAyZWVkYjYzZDA5Y2RjNzFjMDFjMjY4NWUyNzc1YWNmXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503500_3_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503500_70_0-dit_35",
          title:
            "秋冬季无痕加厚性感内衣套装少女聚拢无钢圈文胸美背小胸罩聚拢上托防下垂深V一片式光面无痕胸罩",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xOTE4Nzh5XzAyZWVkYjYzZDA5Y2RjNzFjMDFjMjY4NWUyNzc1YWNmXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 57,
          props: [
            "胸罩",
            "美背",
            "聚拢",
            "一片式",
            "无痕",
            "光面",
            "性感",
            "防下垂",
            "加厚",
            "秋冬季"
          ],
          hasSimilarity: true,
          sale: "50",
          cfav: "95",
          price: 39.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503500_3_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503500_70_0-dit_35&itemType=7",
          shopSeller: "二八佳人品牌内衣"
        },
        {
          tradeItemId: "1kljr06",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/171023_83jjlha20abhaglk1lc2bka0kk0e4_640x960.jpg",
          iid: "1kljr06",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_35&cparam=MTUzODE5MTY1OF8xZTQ0czR1X2RhOTRiMGQ2ZmM0YWQ3NjMxNjA2MzNiZTRhZGE2NTM0XzE2XzNfMjczMTI4ODkzXzRhOGNfMTkwMjI1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_35&cparam=MTUzODE5MTY1OF8xZTQ0czR1X2RhOTRiMGQ2ZmM0YWQ3NjMxNjA2MzNiZTRhZGE2NTM0XzE2XzNfMjczMTI4ODkzXzRhOGNfMTkwMjI1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_35",
          title: "3条装 简约轻熟内裤女纯棉盒装纯棉中腰无痕三角内裤性感小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xZTQ0czR1X2RhOTRiMGQ2ZmM0YWQ3NjMxNjA2MzNiZTRhZGE2NTM0XzE2XzNfMjczMTI4ODkzXzRhOGNfMTkwMjI1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "中腰无痕",
            "盒装",
            "纯棉",
            "性感",
            "小清新",
            "简约"
          ],
          hasSimilarity: true,
          sale: "4042",
          cfav: "8925",
          price: 29.96,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_35&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1k6h3qw",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/170530_57d0b6fea6e52dge3ci8ah26cd2g5_640x960.jpg",
          iid: "1k6h3qw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k6h3qw&acm=3.ms.1_4_1k6h3qw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_222532782_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8yMjI1MzI3ODJfNGY4Zl8wXzBfMF82OTNfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k6h3qw&acm=3.ms.1_4_1k6h3qw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_222532782_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8yMjI1MzI3ODJfNGY4Zl8wXzBfMF82OTNfMV8zX2xvYy0w",
          itemMarks: "1525 353 79 1655 1497 1670 82 1947 1318",
          acm:
            "3.ms.1_4_1k6h3qw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_222532782_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title: "蜗牛原液护肤品套装素颜霜补水保湿滋润除痘印水乳套装化妆品正品",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8yMjI1MzI3ODJfNGY4Zl8wXzBfMF82OTNfMV8zX2xvYy0w",
          orgPrice: 276,
          props: [
            "BAIMISS/佰魅伊人",
            "蜗牛原液",
            "补水保湿",
            "痘印",
            "滋润",
            "素颜",
            "正品"
          ],
          hasSimilarity: true,
          sale: 32187,
          cfav: 53590,
          price: 99.36,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.82",
            descDsr: "4.83",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.87"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k6h3qw&acm=3.ms.1_4_1k6h3qw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_222532782_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "佰魅伊人官方旗舰店"
        },
        {
          tradeItemId: "1m7da6m",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180817_38ibc62jke24d2h2dkb432dcllj2d_640x960.jpg",
          iid: "1m7da6m",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7da6m&acm=3.ms.1_4_1m7da6m.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7da6m&acm=3.ms.1_4_1m7da6m.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m7da6m.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "千鸟格毛呢外套女新款秋冬季中长款韩版学生过膝森系时尚大衣高领毛衣百折半身裙三件套套装",
          type: 2,
          orgPrice: 84.29,
          props: ["半身裙", "森系", "秋冬季", "过膝", "中长款", "新款", "韩版"],
          hasSimilarity: true,
          sale: 2375,
          cfav: 16356,
          price: 59,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.69",
            descDsr: "4.63",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.73"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7da6m&acm=3.ms.1_4_1m7da6m.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "木子女装"
        },
        {
          tradeItemId: "1m6g1qe",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180726_863641iag5k2d2ghd053g3e98bfge_800x1066.jpg",
          iid: "1m6g1qe",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6g1qe&acm=3.ms.1_4_1m6g1qe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426997081_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY5OTcwODFfNGY4Zl8wXzBfMF80NzNfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6g1qe&acm=3.ms.1_4_1m6g1qe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426997081_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY5OTcwODFfNGY4Zl8wXzBfMF80NzNfMV8zX2xvYy0w",
          itemMarks: "1525 352 351",
          acm:
            "3.ms.1_4_1m6g1qe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426997081_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【送礼盒】MAC口红CHILI小辣椒魅可唇膏子弹头cockney姨妈色人鱼姬色",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY5OTcwODFfNGY4Zl8wXzBfMF80NzNfMV8zX2xvYy0w",
          orgPrice: 298,
          props: ["MAC", "唇膏", "姨妈色", "子弹头"],
          hasSimilarity: true,
          sale: 28586,
          cfav: 2400,
          price: 120,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.83",
            descDsr: "4.84",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.87"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6g1qe&acm=3.ms.1_4_1m6g1qe.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426997081_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "朵颜美妆"
        },
        {
          tradeItemId: "1m7fjn8",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180819_34cgjac0c8777h382j84bdc8680i0_640x960.jpg",
          iid: "1m7fjn8",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7fjn8&acm=3.ms.1_4_1m7fjn8.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_434647053_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzQ2NDcwNTNfNGNfMF8wXzBfNTQ3XzFfM19sb2MtMA==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7fjn8&acm=3.ms.1_4_1m7fjn8.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_434647053_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzQ2NDcwNTNfNGNfMF8wXzBfNTQ3XzFfM19sb2MtMA==",
          itemMarks: "1525 77 2 138 1210 172 173",
          acm:
            "3.ms.1_4_1m7fjn8.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_434647053_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "英伦风马丁靴女2018秋季新款学生系带高帮弹力袜子靴女粗跟中筒机车靴女潮",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MzQ2NDcwNTNfNGNfMF8wXzBfNTQ3XzFfM19sb2MtMA==",
          orgPrice: 112.86,
          props: [
            "机车靴",
            "粗跟",
            "英伦风",
            "高帮",
            "系带",
            "弹力",
            "女潮",
            "秋季",
            "新款"
          ],
          hasSimilarity: true,
          sale: 7427,
          cfav: 7713,
          price: 69.97,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.74",
            descDsr: "4.76",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.84",
            serviceDsr: "4.80"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7fjn8&acm=3.ms.1_4_1m7fjn8.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_434647053_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "wowo莹莹家"
        },
        {
          tradeItemId: "1m7c3sk",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180817_87e64067d1i4k7dd90fd7fl592gl0_640x960.jpg",
          iid: "1m7c3sk",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7c3sk&acm=3.ms.1_4_1m7c3sk.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_428369449_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjgzNjk0NDlfNGY4Zl8wXzBfMF8zNTdfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7c3sk&acm=3.ms.1_4_1m7c3sk.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_428369449_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjgzNjk0NDlfNGY4Zl8wXzBfMF8zNTdfMV8zX2xvYy0w",
          itemMarks: "1525 352 351",
          acm:
            "3.ms.1_4_1m7c3sk.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_428369449_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【送礼盒】正品法国Dior迪奥口红烈艳蓝金唇膏持久保湿不脱色999/888/520",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjgzNjk0NDlfNGY4Zl8wXzBfMF8zNTdfMV8zX2xvYy0w",
          orgPrice: 488,
          props: ["迪奥", "口红", "持久保湿", "不脱色", "正品"],
          hasSimilarity: true,
          sale: 11943,
          cfav: 1191,
          price: 188,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.74",
            descDsr: "4.76",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7c3sk&acm=3.ms.1_4_1m7c3sk.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_428369449_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "蛋宝宝美妆"
        },
        {
          tradeItemId: "1m7y9ie",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180831_3ij9bhjea4gb71i0d120fgk8a46i6_640x960.jpg",
          iid: "1m7y9ie",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7y9ie&acm=3.ms.1_4_1m7y9ie.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_440708941_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDA3MDg5NDFfNGM4YV8wXzBfMF8xMzFfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7y9ie&acm=3.ms.1_4_1m7y9ie.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_440708941_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDA3MDg5NDFfNGM4YV8wXzBfMF8xMzFfMV8zX2xvYy0w",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m7y9ie.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_440708941_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title: "男士外套春秋2018新款韩版潮流修身帅气学生迷彩秋季休闲夹克男装",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDA3MDg5NDFfNGM4YV8wXzBfMF8xMzFfMV8zX2xvYy0w",
          orgPrice: 127.15,
          props: [
            "休闲夹克",
            "帅气",
            "潮流",
            "迷彩",
            "修身",
            "男士",
            "秋季",
            "春秋",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 1304,
          cfav: 1424,
          price: 89,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.71",
            descDsr: "4.71",
            tagDescDsr: "4.77",
            tagQualityDsr: "4.77",
            tagServiceDsr: "4.86",
            serviceDsr: "4.78"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7y9ie&acm=3.ms.1_4_1m7y9ie.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_440708941_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "昆弥男装"
        },
        {
          tradeItemId: "1m7acja",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180906_6fbh31ekb259gjgj0f0f2chh323i9_640x960.jpg",
          iid: "1m7acja",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_35&cparam=MTUzODE5MTY1OF8xOHBkNGl5XzYwNzVmMzIzNDU0ZWRlMWFkMzk0M2U5YzlmMjczZDkwXzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NF81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_35&cparam=MTUzODE5MTY1OF8xOHBkNGl5XzYwNzVmMzIzNDU0ZWRlMWFkMzk0M2U5YzlmMjczZDkwXzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NF81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_35",
          title:
            "3条装 日系简约内裤女纯棉盒装纯棉中腰学院低腰大码学生甜美性感全棉裆女士三角内裤头小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xOHBkNGl5XzYwNzVmMzIzNDU0ZWRlMWFkMzk0M2U5YzlmMjczZDkwXzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NF81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "低腰",
            "中腰",
            "盒装",
            "全棉",
            "纯棉",
            "性感",
            "日系",
            "甜美",
            "大码",
            "小清新",
            "简约",
            "女士"
          ],
          hasSimilarity: true,
          sale: "1697",
          cfav: "742",
          price: 29.96,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_35&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1kbtxmc",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180312_0d4a013795lhi7ihj27i9c9jhlldf_640x960.jpg",
          iid: "1kbtxmc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1961015_6_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1961015_107_0-dit_35&cparam=MTUzODE5MTY1OF8xOWc0ZXl1XzMxMGM1YWE5MDRhZmNiZjU5OTEwMjczYTdkMThkYTI2XzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTYxMDE1XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1961015_6_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1961015_107_0-dit_35&cparam=MTUzODE5MTY1OF8xOWc0ZXl1XzMxMGM1YWE5MDRhZmNiZjU5OTEwMjczYTdkMThkYTI2XzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTYxMDE1XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          itemMarks: "2 1477 149",
          acm:
            "3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1961015_6_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1961015_107_0-dit_35",
          title:
            "安踏女子跑步鞋夏季新款透气网布运动鞋女百搭轻便减震耐磨休闲网面跑步鞋子92815525",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xOWc0ZXl1XzMxMGM1YWE5MDRhZmNiZjU5OTEwMjczYTdkMThkYTI2XzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTYxMDE1XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          orgPrice: 269,
          props: [
            "安踏",
            "跑步鞋",
            "网面",
            "减震",
            "轻便",
            "透气",
            "耐磨",
            "休闲",
            "百搭",
            "女子"
          ],
          hasSimilarity: true,
          sale: "297",
          cfav: "8746",
          price: 169,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1961015_6_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1961015_107_0-dit_35&itemType=7",
          shopSeller: "安踏旗舰店"
        },
        {
          tradeItemId: "1lvfrr6",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180402_737ada936be97h00hl436600hgfba_640x960.jpg",
          iid: "1lvfrr6",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lvfrr6&acm=3.ms.1_4_1lvfrr6.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_354289473_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNTQyODk0NzNfNGM4YV8wXzBfMF8yNjhfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lvfrr6&acm=3.ms.1_4_1lvfrr6.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_354289473_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNTQyODk0NzNfNGM4YV8wXzBfMF8yNjhfMV8zX2xvYy0w",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_4_1lvfrr6.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_354289473_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "3条盒装小清新蝴蝶结蕾丝纯棉内裤女性感诱惑中低腰女士无痕三角裤头少女可爱全棉底裤",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNTQyODk0NzNfNGM4YV8wXzBfMF8yNjhfMV8zX2xvYy0w",
          orgPrice: 99,
          props: [
            "纯棉内裤",
            "中低腰",
            "无痕",
            "盒装",
            "诱惑",
            "全棉",
            "蕾丝",
            "性感",
            "蝴蝶结",
            "可爱",
            "小清新",
            "女士"
          ],
          hasSimilarity: true,
          sale: 7408,
          cfav: 5265,
          price: 35,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.76",
            descDsr: "4.77",
            tagDescDsr: "4.79",
            tagQualityDsr: "4.78",
            tagServiceDsr: "4.85",
            serviceDsr: "4.81"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lvfrr6&acm=3.ms.1_4_1lvfrr6.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_354289473_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "欧美性感内衣"
        },
        {
          tradeItemId: "1m7j5tu",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180821_7gccd889f8f88hde1kd4l99dj0h3e_640x960.jpg",
          iid: "1m7j5tu",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7j5tu&acm=3.ms.1_4_1m7j5tu.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7j5tu&acm=3.ms.1_4_1m7j5tu.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          itemMarks: "1525 82",
          acm:
            "3.ms.1_4_1m7j5tu.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "偏大大码秋装女套装新款2018中长款连帽卫衣+牛仔马甲洋气套装胖mm遮肉显瘦两件套省心搭配",
          type: 2,
          orgPrice: 70,
          props: [
            "显瘦两件套",
            "搭配",
            "遮肉",
            "洋气",
            "胖mm",
            "大码",
            "中长款",
            "新款"
          ],
          hasSimilarity: true,
          sale: 1877,
          cfav: 5247,
          price: 49,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.59",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.73"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7j5tu&acm=3.ms.1_4_1m7j5tu.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "胖家小妹"
        },
        {
          tradeItemId: "17o66hc",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180726_7e5jjdkde5ha107eaf4afkl3lg407_640x960.jpg",
          iid: "17o66hc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=17o66hc&acm=3.ms.1_4_17o66hc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_350165084_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNTAxNjUwODRfNGY4Zl8wXzBfMF80OTJfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=17o66hc&acm=3.ms.1_4_17o66hc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_350165084_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNTAxNjUwODRfNGY4Zl8wXzBfMF80OTJfMV8zX2xvYy0w",
          itemMarks: "1525 77 1964 1497 128 1331 1210 1253 1670 82 72 62",
          acm:
            "3.ms.1_4_17o66hc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_350165084_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【99元3盒送15片】珀薇蚕丝芦荟玻尿酸面膜贴7片保湿补水提亮收缩毛孔肤色正品学生",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zNTAxNjUwODRfNGY4Zl8wXzBfMF80OTJfMV8zX2xvYy0w",
          orgPrice: 136,
          props: [
            "bovey/珀薇",
            "面膜贴",
            "玻尿酸",
            "缩毛孔",
            "蚕丝",
            "芦荟",
            "提亮",
            "保湿补水",
            "正品"
          ],
          hasSimilarity: true,
          sale: 21105,
          cfav: 36159,
          price: 58,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.91",
            descDsr: "4.92",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.93"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=17o66hc&acm=3.ms.1_4_17o66hc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_350165084_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "珀薇官方旗舰店"
        },
        {
          tradeItemId: "1m8h17w",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180912_868deg41312h2b9jf92iflh16ba8h_640x960.jpg",
          iid: "1m8h17w",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8h17w&acm=3.ms.1_4_1m8h17w.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437646627_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80Mzc2NDY2MjdfNGZfMF8wXzBfMjQzXzFfM19sb2MtMA==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8h17w&acm=3.ms.1_4_1m8h17w.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437646627_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80Mzc2NDY2MjdfNGZfMF8wXzBfMjQzXzFfM19sb2MtMA==",
          itemMarks: "1525 1964 2 138 172",
          acm:
            "3.ms.1_4_1m8h17w.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437646627_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "三件套秋季新款韩版小清新慵懒针织衫马甲+法式复古长袖衬衫+束脚高腰显瘦休闲灯笼裤时尚套装女",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80Mzc2NDY2MjdfNGZfMF8wXzBfMjQzXzFfM19sb2MtMA==",
          orgPrice: 92.86,
          props: [
            "时尚套装",
            "高腰",
            "显瘦",
            "束脚",
            "法式",
            "复古",
            "小清新",
            "秋季",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 282,
          cfav: 1498,
          price: 63.14,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.46",
            descDsr: "4.43",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.57"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8h17w&acm=3.ms.1_4_1m8h17w.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_437646627_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "青青时尚女装"
        },
        {
          tradeItemId: "1m74m74",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180811_423c5a3algj3f3jl16gd7bk825b41_640x960.jpg",
          iid: "1m74m74",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m74m74&acm=3.ms.1_4_1m74m74.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426848099_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY4NDgwOTlfNGM4ZF8wXzBfMF82NDVfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m74m74&acm=3.ms.1_4_1m74m74.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426848099_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY4NDgwOTlfNGM4ZF8wXzBfMF82NDVfMV8zX2xvYy0w",
          itemMarks: "1525 353 2 138 1232 1990 181 172",
          acm:
            "3.ms.1_4_1m74m74.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426848099_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "专区任选2套99元 歌帕半杯性感蕾丝少女内衣套装加厚小胸聚拢软钢圈调整型收副乳防下垂文胸",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY4NDgwOTlfNGM4ZF8wXzBfMF82NDVfMV8zX2xvYy0w",
          orgPrice: 91.43,
          props: ["软钢圈", "调整型", "聚拢", "副乳", "小胸", "加厚"],
          hasSimilarity: true,
          sale: 1717,
          cfav: 1410,
          price: 59.42,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.78",
            descDsr: "4.79",
            tagDescDsr: "4.79",
            tagQualityDsr: "4.78",
            tagServiceDsr: "4.85",
            serviceDsr: "4.85"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m74m74&acm=3.ms.1_4_1m74m74.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426848099_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "歌帕内衣"
        },
        {
          tradeItemId: "1m7dvpc",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180818_59kdlg400869hgfe6h49447b4fd98_640x960.jpg",
          iid: "1m7dvpc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7dvpc&acm=3.ms.1_4_1m7dvpc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7dvpc&acm=3.ms.1_4_1m7dvpc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m7dvpc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "2018秋季新款韩版宽松百搭后背字母印花长袖开衫休闲外套女显瘦气质款口袋开叉半身裙两件套",
          type: 2,
          orgPrice: 112.86,
          props: [
            "半身裙",
            "开叉",
            "显瘦",
            "百搭",
            "字母印花",
            "后背",
            "宽松",
            "气质款",
            "秋季",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 554,
          cfav: 2585,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.64",
            descDsr: "4.65",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.71"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7dvpc&acm=3.ms.1_4_1m7dvpc.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "艾芳女装屋"
        },
        {
          tradeItemId: "1k22cmo",
          img:
            "https://s11.mogucdn.com/p2/161210/upload_2299h7addk39439caa8fk8l330826_640x960.jpg",
          iid: "1k22cmo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_35&cparam=MTUzODE5MTY1OF8xM29xN3lzXzhhZmU2ZDc1YTVhZWQ0YjI4Mjc4NDQyYWUzYmIxN2Y5XzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_35&cparam=MTUzODE5MTY1OF8xM29xN3lzXzhhZmU2ZDc1YTVhZWQ0YjI4Mjc4NDQyYWUzYmIxN2Y5XzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "121 1525 82",
          acm:
            "3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_35",
          title: "韩国瘦腿袜收腹提臀压力裤春秋中厚打底袜子防勾丝塑形美腿连裤袜",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xM29xN3lzXzhhZmU2ZDc1YTVhZWQ0YjI4Mjc4NDQyYWUzYmIxN2Y5XzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 28,
          props: ["打底袜子", "防勾丝", "美腿", "塑形", "收腹", "提臀", "春秋"],
          hasSimilarity: true,
          sale: "1674",
          cfav: "9841",
          price: 19.6,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_35&itemType=7",
          shopSeller: "筱一时尚屋"
        },
        {
          tradeItemId: "1k3m1kw",
          img:
            "https://s11.mogucdn.com/p2/170317/upload_02d48fl52g1b2jdad4kceb15hd0bh_640x960.jpg",
          iid: "1k3m1kw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_35&cparam=MTUzODE5MTY1OF8xNmZzeW1hX2NhMmExZTk5YzA3ZjRmZWIyZjcwMjk4MWE2ZTdiNzMxXzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_35&cparam=MTUzODE5MTY1OF8xNmZzeW1hX2NhMmExZTk5YzA3ZjRmZWIyZjcwMjk4MWE2ZTdiNzMxXzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "121 1525 184 185",
          acm:
            "3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_35",
          title: "3条装日系原单收腹内裤女莱卡棉中腰无痕性感提臀包臀舒适透气",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xNmZzeW1hX2NhMmExZTk5YzA3ZjRmZWIyZjcwMjk4MWE2ZTdiNzMxXzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 39,
          props: [
            "收腹内裤",
            "中腰无痕",
            "提臀",
            "原单",
            "性感",
            "舒适",
            "透气",
            "包臀",
            "日系"
          ],
          hasSimilarity: true,
          sale: "2317",
          cfav: "21511",
          price: 27.3,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_35&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1m7bn50",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180817_2e348467kka72e6j58cf1k58jjj18_640x960.jpg",
          iid: "1m7bn50",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7bn50&acm=3.ms.1_4_1m7bn50.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_427308787_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjczMDg3ODdfNGY4Zl8wXzBfMF85OThfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7bn50&acm=3.ms.1_4_1m7bn50.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_427308787_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjczMDg3ODdfNGY4Zl8wXzBfMF85OThfMV8zX2xvYy0w",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m7bn50.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_427308787_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【2件30元三件38元】925银针防过敏耳环气质长款个性百搭流苏耳坠女欧美夸张圆圈耳饰配饰",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjczMDg3ODdfNGY4Zl8wXzBfMF85OThfMV8zX2xvYy0w",
          orgPrice: 29,
          props: [
            "耳坠",
            "圆圈",
            "长款",
            "气质",
            "流苏",
            "个性",
            "欧美",
            "百搭"
          ],
          hasSimilarity: true,
          sale: 6346,
          cfav: 2783,
          price: 18.8,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.76",
            descDsr: "4.78",
            tagDescDsr: "4.79",
            tagQualityDsr: "4.78",
            tagServiceDsr: "4.84",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7bn50&acm=3.ms.1_4_1m7bn50.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_427308787_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "Lee菇娘の珠宝屋"
        },
        {
          tradeItemId: "1m6wx9s",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180805_10l2abb88d422h4868k5igk7gh3l5_640x960.jpg",
          iid: "1m6wx9s",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6wx9s&acm=3.ms.1_4_1m6wx9s.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423757807_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjM3NTc4MDdfNGY4Zl8wXzBfMF83NDZfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6wx9s&acm=3.ms.1_4_1m6wx9s.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423757807_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjM3NTc4MDdfNGY4Zl8wXzBfMF83NDZfMV8zX2xvYy0w",
          itemMarks: "1525 2 138 172",
          acm:
            "3.ms.1_4_1m6wx9s.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423757807_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【VICKY代购】Chanel/香奈儿炫亮魅力丝绒唇膏3.5g 旗舰口红43/42抖音同款",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjM3NTc4MDdfNGY4Zl8wXzBfMF83NDZfMV8zX2xvYy0w",
          orgPrice: 358,
          props: ["香奈儿", "唇膏", "炫亮", "丝绒", "魅力", "同款", "3.5g"],
          hasSimilarity: true,
          sale: 342,
          cfav: 1182,
          price: 157,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.66",
            descDsr: "4.69",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.77"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6wx9s&acm=3.ms.1_4_1m6wx9s.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_423757807_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "VICKY美妆店"
        },
        {
          tradeItemId: "1m6xfjw",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180806_10d1bfa9dg2d1f4i5j6figjj40ahk_640x960.jpg",
          iid: "1m6xfjw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6xfjw&acm=3.ms.1_4_1m6xfjw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_424333704_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjQzMzM3MDRfNGNfMF8wXzBfMzMzXzFfM19sb2MtMA==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6xfjw&acm=3.ms.1_4_1m6xfjw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_424333704_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjQzMzM3MDRfNGNfMF8wXzBfMzMzXzFfM19sb2MtMA==",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m6xfjw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_424333704_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "时尚套装春秋新款bf学生宽松韩版破洞蝙蝠袖乞丐牛仔外套女中长款薄款连帽格子毛呢连衣裙两件套",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjQzMzM3MDRfNGNfMF8wXzBfMzMzXzFfM19sb2MtMA==",
          orgPrice: 114,
          props: [
            "时尚套装",
            "格子",
            "蝙蝠袖",
            "破洞",
            "春秋",
            "宽松",
            "薄款",
            "中长款",
            "连帽",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 680,
          cfav: 2394,
          price: 79.8,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.77",
            descDsr: "4.76",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.78"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6xfjw&acm=3.ms.1_4_1m6xfjw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_424333704_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "韩LIU舍"
        },
        {
          tradeItemId: "1m6tj5e",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180803_2c58laad1cbg91kf13a0536hckdd2_640x960.jpg",
          iid: "1m6tj5e",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6tj5e&acm=3.ms.1_4_1m6tj5e.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426191514_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjYxOTE1MTRfNGY4Zl8wXzBfMF80MjVfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6tj5e&acm=3.ms.1_4_1m6tj5e.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426191514_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjYxOTE1MTRfNGY4Zl8wXzBfMF80MjVfMV8zX2xvYy0w",
          itemMarks: "1525 352 351",
          acm:
            "3.ms.1_4_1m6tj5e.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426191514_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "送礼盒 正品美国Mac/魅可子弹头保湿持久滋润哑光不掉色唇膏口红小辣椒多色可选",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjYxOTE1MTRfNGY4Zl8wXzBfMF80MjVfMV8zX2xvYy0w",
          orgPrice: 388,
          props: [
            "魅可",
            "唇膏",
            "持久滋润",
            "不掉色",
            "哑光",
            "保湿",
            "多色可选",
            "子弹头",
            "正品"
          ],
          hasSimilarity: true,
          sale: 13550,
          cfav: 2402,
          price: 125,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.65",
            descDsr: "4.64",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.71"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6tj5e&acm=3.ms.1_4_1m6tj5e.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426191514_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "魅彩美妆专营店"
        },
        {
          tradeItemId: "1m89lam",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180907_8d6543d81f8e12kc46279k817bhkh_800x1200.jpg",
          iid: "1m89lam",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m89lam&acm=3.ms.1_4_1m89lam.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m89lam&acm=3.ms.1_4_1m89lam.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m89lam.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title: "2018早秋新款韩版时尚气质条纹针织上衣+单排扣半裙套装女潮",
          type: 2,
          orgPrice: 152.86,
          props: [
            "半裙套装",
            "气质",
            "条纹",
            "单排扣",
            "女潮",
            "时尚",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 25,
          cfav: 75,
          price: 107,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.72",
            descDsr: "4.70",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.81"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m89lam&acm=3.ms.1_4_1m89lam.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "韩流新款"
        },
        {
          tradeItemId: "1lo4c5o",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/171223_0h3jfe9jcbcd3eei933k4f03ehbhe_640x960.jpg",
          iid: "1lo4c5o",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lo4c5o&acm=3.ms.1_4_1lo4c5o.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_333376674_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zMzMzNzY2NzRfNGY4OV8wXzBfMF85OTJfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lo4c5o&acm=3.ms.1_4_1lo4c5o.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_333376674_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zMzMzNzY2NzRfNGY4OV8wXzBfMF85OTJfMV8zX2xvYy0w",
          itemMarks: "1525 352 77 1655 1210 82 1318 351",
          acm:
            "3.ms.1_4_1lo4c5o.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_333376674_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【祛痘之选】可美祛痘三件套 控油祛痘膏清洁面控油脂锁水去痘痘印粉刺护肤套装",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zMzMzNzY2NzRfNGY4OV8wXzBfMF85OTJfMV8zX2xvYy0w",
          orgPrice: 398,
          props: [
            "可美",
            "祛痘膏",
            "洁面",
            "去痘",
            "祛痘",
            "粉刺",
            "锁水",
            "痘印",
            "控油"
          ],
          hasSimilarity: true,
          sale: 1212,
          cfav: 3785,
          price: 189.05,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.76",
            descDsr: "4.77",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.80"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lo4c5o&acm=3.ms.1_4_1lo4c5o.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_333376674_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "可美官方旗舰店"
        },
        {
          tradeItemId: "1k1g4aq",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/171116_42fe5k7bbbcdg5754djheaie4bh6c_640x960.jpg",
          iid: "1k1g4aq",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_35&cparam=MTUzODE5MTY1OF8xYXR5cXY4X2IzNzk2ODlmM2QxMGU2NTdlOGY5ZGY2NGZjMDQxZWEzXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxNjk1Nl85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_35&cparam=MTUzODE5MTY1OF8xYXR5cXY4X2IzNzk2ODlmM2QxMGU2NTdlOGY5ZGY2NGZjMDQxZWEzXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxNjk1Nl85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525 2 138 1232 82 172",
          acm:
            "3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_35",
          title: "E杯神器超聚拢调整型侧收无痕无钢圈小胸厚少女内衣文胸女套装薄",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xYXR5cXY4X2IzNzk2ODlmM2QxMGU2NTdlOGY5ZGY2NGZjMDQxZWEzXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxNjk1Nl85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 57.1,
          props: ["内衣文胸", "调整型", "聚拢", "无钢圈", "无痕"],
          hasSimilarity: true,
          sale: "2678",
          cfav: "9841",
          price: 34.83,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_35&itemType=7",
          shopSeller: "wyfan888"
        },
        {
          tradeItemId: "1lpdys0",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180106_0cefb118dgl0dk7297j89bbk1ld12_640x960.jpg",
          iid: "1lpdys0",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271591_10_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271591_70_0-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271591_10_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271591_70_0-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271591_10_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271591_70_0-dit_35",
          title:
            "新款促销三角杯薄款蕾丝刺绣女内衣套装文胸聚拢无钢圈性感上托收副乳胸罩学生少女高中生无痕奶罩",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 42.72,
          props: ["蕾丝刺绣", "无钢圈", "副乳", "无痕", "性感", "薄款", "新款"],
          hasSimilarity: true,
          sale: "4695",
          cfav: "14563",
          price: 29.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrhA5.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271591_10_0-t_suUjcr50jrhA5-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271591_70_0-dit_35&itemType=7",
          shopSeller: "二八佳人品牌内衣"
        },
        {
          tradeItemId: "1lphnrg",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180107_640ldf800jfi9h5g7i6h15e0fkk82_640x960.jpg",
          iid: "1lphnrg",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lphnrg&acm=3.ms.1_4_1lphnrg.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lphnrg&acm=3.ms.1_4_1lphnrg.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1lphnrg.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "秋季新款时尚套装韩版紫色麻花针织开衫上衣外套女中长款百搭碎花裙两件套装",
          type: 2,
          orgPrice: 98.58,
          props: [
            "时尚套装",
            "针织",
            "中长款百搭",
            "紫色",
            "秋季",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 360,
          cfav: 3378,
          price: 69,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.85",
            descDsr: "4.83",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.86"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lphnrg&acm=3.ms.1_4_1lphnrg.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "Goddess沐筱"
        },
        {
          tradeItemId: "1m8tovw",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180920_4g4ce4klhf78fk76lcd2a8kjhc689_640x960.jpg",
          iid: "1m8tovw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8tovw&acm=3.ms.1_4_1m8tovw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443285189_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDMyODUxODlfNGY4Zl8wXzBfMF8xNzdfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8tovw&acm=3.ms.1_4_1m8tovw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443285189_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDMyODUxODlfNGY4Zl8wXzBfMF8xNzdfMV8zX2xvYy0w",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8tovw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443285189_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "短筒靴子女2018秋冬季新款韩版学生粗跟短靴时尚百搭拉链中跟绒面女鞋子",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDMyODUxODlfNGY4Zl8wXzBfMF8xNzdfMV8zX2xvYy0w",
          orgPrice: 125,
          props: ["粗跟短靴", "秋冬季", "百搭", "时尚", "韩版", "新款"],
          hasSimilarity: true,
          sale: 26,
          cfav: 138,
          price: 87,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.78",
            descDsr: "4.77",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.83",
            serviceDsr: "4.83"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8tovw&acm=3.ms.1_4_1m8tovw.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443285189_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "王二小店铺"
        },
        {
          tradeItemId: "1m8q1le",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180918_5k09khdhk5a02i43l9b0hlfd336g6_640x960.jpg",
          iid: "1m8q1le",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8q1le&acm=3.ms.1_4_1m8q1le.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443057806_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDMwNTc4MDZfNGNfMF8wXzBfNzg5XzFfM19sb2MtMA==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8q1le&acm=3.ms.1_4_1m8q1le.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443057806_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDMwNTc4MDZfNGNfMF8wXzBfNzg5XzFfM19sb2MtMA==",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8q1le.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443057806_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "秋季新款韩范小清新气质网红同款宽松百搭连帽条纹毛衣+慵懒风显瘦针织阔腿裤两件套学生套装女",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80NDMwNTc4MDZfNGNfMF8wXzBfNzg5XzFfM19sb2MtMA==",
          orgPrice: 113,
          props: [
            "针织阔腿裤",
            "气质",
            "显瘦",
            "韩范",
            "百搭",
            "同款",
            "宽松",
            "小清新",
            "连帽",
            "秋季",
            "新款"
          ],
          hasSimilarity: true,
          sale: 324,
          onSaleTime: "最近上新",
          cfav: 1419,
          price: 79.1,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.57",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.71"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8q1le&acm=3.ms.1_4_1m8q1le.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_443057806_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "小奕家"
        },
        {
          tradeItemId: "1m04jma",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180602_736d3l1898fj22g9i76c3jdidacj5_1000x1200.jpg",
          iid: "1m04jma",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m04jma&acm=3.ms.1_4_1m04jma.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_410137906_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MTAxMzc5MDZfNGY4Zl8wXzBfMF85NDdfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m04jma&acm=3.ms.1_4_1m04jma.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_410137906_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MTAxMzc5MDZfNGY4Zl8wXzBfMF85NDdfMV8zX2xvYy0w",
          itemMarks: "2 138 1670 82 172",
          acm:
            "3.ms.1_4_1m04jma.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_410137906_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【明星款送化妆刷5支】超火大理石盘网红16色眼影盘防水珠光眼影盘大地色哑光裸妆韩国懒人眼影",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MTAxMzc5MDZfNGY4Zl8wXzBfMF85NDdfMV8zX2xvYy0w",
          orgPrice: 99,
          props: [
            "FUNPARK",
            "眼影盘",
            "大地色",
            "珠光",
            "裸妆",
            "哑光",
            "防水",
            "懒人",
            "明星款",
            "5支"
          ],
          hasSimilarity: true,
          sale: 7142,
          cfav: 12440,
          price: 26.7,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.83",
            descDsr: "4.83",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.89"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m04jma&acm=3.ms.1_4_1m04jma.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_410137906_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "狐狸美妆全球购"
        },
        {
          tradeItemId: "1lm2uui",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180505_1k4k9al49l20eb4c4fi4h2lcehh40_640x960.jpg",
          iid: "1lm2uui",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lm2uui&acm=3.ms.1_4_1lm2uui.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_325019754_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zMjUwMTk3NTRfNGU4Zl8wXzBfMF8xODFfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lm2uui&acm=3.ms.1_4_1lm2uui.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_325019754_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zMjUwMTk3NTRfNGU4Zl8wXzBfMF8xODFfMV8zX2xvYy0w",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1lm2uui.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_325019754_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "【屈臣氏爆卖】思尚粉底液保湿遮瑕控油强持久裸妆不脱色隔离粉底膏BB霜正品",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF8zMjUwMTk3NTRfNGU4Zl8wXzBfMF8xODFfMV8zX2xvYy0w",
          orgPrice: 118,
          props: [
            "思尚",
            "粉底液",
            "遮瑕控油",
            "裸妆",
            "保湿",
            "持久",
            "不脱色",
            "正品"
          ],
          hasSimilarity: true,
          sale: 6129,
          cfav: 7078,
          price: 59,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.75",
            descDsr: "4.76",
            tagDescDsr: "4.82",
            tagQualityDsr: "4.82",
            tagServiceDsr: "4.87",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lm2uui&acm=3.ms.1_4_1lm2uui.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_325019754_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "思尚店"
        },
        {
          tradeItemId: "1m7acja",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180815_60370h52d64d532164iagb7c1h0hi_800x1200.jpg",
          iid: "1m7acja",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_4_1m7acja.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426733686_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY3MzM2ODZfNGM4Zl8wXzBfMF8zNDZfMV8zX2xvYy0w",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_4_1m7acja.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426733686_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&cparam=MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY3MzM2ODZfNGM4Zl8wXzBfMF8zNDZfMV8zX2xvYy0w",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m7acja.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426733686_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35",
          title:
            "3条装 日系简约内裤女纯棉盒装纯棉中腰学院低腰大码学生甜美性感全棉裆女士三角内裤头小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY1OF8xMWtfYmZlMzVmMTExODY3ZTkyNTdhM2Y3NWE4ZWQzZDU1YWRfMTZfMF80MjY3MzM2ODZfNGM4Zl8wXzBfMF8zNDZfMV8zX2xvYy0w",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "低腰",
            "中腰",
            "盒装",
            "全棉",
            "纯棉",
            "性感",
            "日系",
            "甜美",
            "大码",
            "小清新",
            "简约",
            "女士"
          ],
          hasSimilarity: true,
          sale: 1756,
          cfav: 767,
          price: 29.96,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.71",
            descDsr: "4.73",
            tagDescDsr: "4.79",
            tagQualityDsr: "4.78",
            tagServiceDsr: "4.85",
            serviceDsr: "4.79"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7acja&acm=3.ms.1_4_1m7acja.84.1129-69000.suUjcr50jrhA5.sd_117-swt_84-imt_6-c_1_16_426733686_0_0_3-t_suUjcr50jrhA5-lc_16-fcid_10062603-dit_35&itemType=6",
          shopSeller: "丽颜黛梦内衣店"
        }
      ]
    });
  }
  if (type === "sell") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: [
        {
          tradeItemId: "1kf8q3w",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/170818_6i5id70ieb5d3c9j04g8gh7j8941k_640x960.jpg",
          iid: "1kf8q3w",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_37&cparam=MTUzODE5MTY1OV8xN3J0ano0XzI3NGI3Njk5ZjE1M2ZlZDE2NTVjZDk4YzMzOGVmMDQyXzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_37&cparam=MTUzODE5MTY1OV8xN3J0ano0XzI3NGI3Njk5ZjE1M2ZlZDE2NTVjZDk4YzMzOGVmMDQyXzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_37",
          title: "3条装 防勾丝秋冬款连裤袜高筒袜打底袜中厚肉色丝袜打底裤袜",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xN3J0ano0XzI3NGI3Njk5ZjE1M2ZlZDE2NTVjZDk4YzMzOGVmMDQyXzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 42.72,
          props: ["肉色丝袜", "防勾丝", "秋冬款", "3条装"],
          hasSimilarity: true,
          sale: "2390",
          cfav: "9884",
          price: 29.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_37&itemType=7",
          shopSeller: "丹丹精品袜铺"
        },
        {
          tradeItemId: "1k9cg24",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180402_2kgdh40gjki3672fgk3849g25dk49_640x960.jpg",
          iid: "1k9cg24",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1973323_2_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1973323_288_0-dit_37&cparam=MTUzODE5MTY1OV8xZW10ejltXzM2MTIzMmI4ZDE1YzJhYWY1OTUzMTFiODRiZWRmYjI3XzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTczMzIzXzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1973323_2_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1973323_288_0-dit_37&cparam=MTUzODE5MTY1OV8xZW10ejltXzM2MTIzMmI4ZDE1YzJhYWY1OTUzMTFiODRiZWRmYjI3XzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTczMzIzXzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          itemMarks: "1525 2 1497 138 1670 82 172 173",
          acm:
            "3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1973323_2_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1973323_288_0-dit_37",
          title:
            "【2支40元 屈臣氏爆卖】思尚保湿不掉色哑光多色正品口红咬唇妆雾面丝绒 防水不脱色滋润唇膏",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xZW10ejltXzM2MTIzMmI4ZDE1YzJhYWY1OTUzMTFiODRiZWRmYjI3XzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTczMzIzXzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          orgPrice: 70,
          props: [
            "思尚",
            "滋润唇膏",
            "雾面",
            "唇妆",
            "不脱色",
            "不掉色",
            "哑光",
            "保湿",
            "丝绒",
            "防水",
            "多色",
            "正品",
            "2支40"
          ],
          hasSimilarity: true,
          sale: "18650",
          cfav: "25210",
          price: 35,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1973323_2_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1973323_288_0-dit_37&itemType=7",
          shopSeller: "思尚店"
        },
        {
          tradeItemId: "1m7s9c4",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg",
          iid: "1m7s9c4",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7s9c4&acm=3.ms.1_4_1m7s9c4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7s9c4&acm=3.ms.1_4_1m7s9c4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m7s9c4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
          type: 2,
          orgPrice: 127,
          props: ["时尚套装", "新款", "韩版"],
          hasSimilarity: true,
          sale: 32086,
          cfav: 387,
          price: 88.9,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7s9c4&acm=3.ms.1_4_1m7s9c4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8o4xe",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180917_2fig5kb7fk4f2574le44f362l2bce_640x960.jpg",
          iid: "1m8o4xe",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4xe&acm=3.ms.1_4_1m8o4xe.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4xe&acm=3.ms.1_4_1m8o4xe.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8o4xe.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "牛仔裤女秋2018新款chic设计感高腰拉链打底紧身显瘦小脚裤女",
          type: 2,
          orgPrice: 112.86,
          props: ["显瘦小脚裤", "紧身", "设计感", "打底", "新款"],
          hasSimilarity: true,
          sale: 30007,
          cfav: 88,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8o4xe&acm=3.ms.1_4_1m8o4xe.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m7jj7a",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg",
          iid: "1m7jj7a",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7jj7a&acm=3.ms.1_4_1m7jj7a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7jj7a&acm=3.ms.1_4_1m7jj7a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m7jj7a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
          type: 2,
          orgPrice: 211.43,
          props: ["连帽卫衣", "气质", "新款时尚", "个性", "春秋", "复古"],
          hasSimilarity: true,
          sale: 28997,
          cfav: 331,
          price: 148,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7jj7a&acm=3.ms.1_4_1m7jj7a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8mvn4",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180916_68kje9l32b630eblel8b5025c10g7_640x960.jpg",
          iid: "1m8mvn4",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8mvn4&acm=3.ms.1_4_1m8mvn4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8mvn4&acm=3.ms.1_4_1m8mvn4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8mvn4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "网红休闲宽松鹿皮绒卫衣运动秋装女2018新款套装女时尚俏皮半身裙两件套潮",
          type: 2,
          orgPrice: 200,
          props: ["绒卫衣", "时尚", "运动", "休闲宽松", "新款"],
          hasSimilarity: true,
          sale: 28867,
          cfav: 205,
          price: 98,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.84",
            descDsr: "4.85",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.90"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8mvn4&acm=3.ms.1_4_1m8mvn4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "JJH女装馆"
        },
        {
          tradeItemId: "1kp5kjq",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/171030_1c951k17lf501jjli9bg84jjd855k_640x960.jpg",
          iid: "1kp5kjq",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kp5kjq&acm=3.ms.1_4_1kp5kjq.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kp5kjq&acm=3.ms.1_4_1kp5kjq.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "61",
          acm:
            "3.ms.1_4_1kp5kjq.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "秋冬熊耳朵套头卫衣女韩版宽松2018学院风大码女装学生加绒厚款假两件中长款连帽卫衣女外套",
          type: 2,
          orgPrice: 169,
          props: [
            "套头卫衣",
            "加绒",
            "宽松",
            "学院风",
            "中长款",
            "秋冬",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 23285,
          cfav: 208,
          price: 68,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.54",
            descDsr: "4.50",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.62"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kp5kjq&acm=3.ms.1_4_1kp5kjq.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "卓尔千衣"
        },
        {
          tradeItemId: "1m8o4ai",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180917_5ialg2l234gi690gkl1b5cf4j88l8_640x960.jpg",
          iid: "1m8o4ai",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4ai&acm=3.ms.1_4_1m8o4ai.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4ai&acm=3.ms.1_4_1m8o4ai.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8o4ai.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "娃娃卫衣女潮2018秋新款韩版学生宽松ulzzang套头连帽上衣",
          type: 2,
          orgPrice: 112.86,
          props: ["卫衣", "套头", "宽松", "女潮", "韩版", "新款"],
          hasSimilarity: true,
          sale: 21006,
          cfav: 237,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8o4ai&acm=3.ms.1_4_1m8o4ai.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8voqa",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180922_7a8ea8851a9c49b8iafl6074h9d50_640x960.jpg",
          iid: "1m8voqa",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503199_3_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503199_70_0-dit_37&cparam=MTUzODE5MTY1OV8xOTE4Nzh5X2RkZWMzZjA3ZmJhNmE3MTQxNjNlNTNmZWFlMzhkNjNkXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503199_3_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503199_70_0-dit_37&cparam=MTUzODE5MTY1OV8xOTE4Nzh5X2RkZWMzZjA3ZmJhNmE3MTQxNjNlNTNmZWFlMzhkNjNkXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503199_3_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503199_70_0-dit_37",
          title:
            "秋冬季无痕加厚性感内衣套装少女聚拢无钢圈文胸美背小胸罩聚拢上托防下垂深V一片式光面无痕胸罩",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xOTE4Nzh5X2RkZWMzZjA3ZmJhNmE3MTQxNjNlNTNmZWFlMzhkNjNkXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 57,
          props: [
            "胸罩",
            "美背",
            "聚拢",
            "一片式",
            "无痕",
            "光面",
            "性感",
            "防下垂",
            "加厚",
            "秋冬季"
          ],
          hasSimilarity: true,
          sale: "50",
          cfav: "95",
          price: 39.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503199_3_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503199_70_0-dit_37&itemType=7",
          shopSeller: "二八佳人品牌内衣"
        },
        {
          tradeItemId: "1kljr06",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/171013_59i0ij6d90120dhfc9fa55dgffi17_640x960.jpg",
          iid: "1kljr06",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1916659_4_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916659_80_0-dit_37&cparam=MTUzODE5MTY1OV8xZTQ0czR1Xzg2NGJmNDNiMThhNDk2MDJiMzA3MjMwODZiZGYyNTU3XzE2XzNfMjczMTI4ODkzXzRhOGNfMTkxNjY1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1916659_4_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916659_80_0-dit_37&cparam=MTUzODE5MTY1OV8xZTQ0czR1Xzg2NGJmNDNiMThhNDk2MDJiMzA3MjMwODZiZGYyNTU3XzE2XzNfMjczMTI4ODkzXzRhOGNfMTkxNjY1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1916659_4_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916659_80_0-dit_37",
          title: "3条装 简约轻熟内裤女纯棉盒装纯棉中腰无痕三角内裤性感小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xZTQ0czR1Xzg2NGJmNDNiMThhNDk2MDJiMzA3MjMwODZiZGYyNTU3XzE2XzNfMjczMTI4ODkzXzRhOGNfMTkxNjY1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "中腰无痕",
            "盒装",
            "纯棉",
            "性感",
            "小清新",
            "简约"
          ],
          hasSimilarity: true,
          sale: "4042",
          cfav: "8925",
          price: 29.96,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1916659_4_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916659_80_0-dit_37&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1m76l50",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180815_81dj3id2i70kfeh4eekd94k9ij0k4_640x913.jpg",
          iid: "1m76l50",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m76l50&acm=3.ms.1_4_1m76l50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m76l50&acm=3.ms.1_4_1m76l50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m76l50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "2018秋冬新款ins超火针织时尚两件套小香风套装女",
          type: 2,
          orgPrice: 154.29,
          props: ["小香风套装", "针织", "时尚", "秋冬新款"],
          hasSimilarity: true,
          sale: 20290,
          cfav: 58,
          price: 108,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m76l50&acm=3.ms.1_4_1m76l50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m6zb50",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180808_0312e2cd957g59610k88091621gf2_640x954.jpg",
          iid: "1m6zb50",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6zb50&acm=3.ms.1_4_1m6zb50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6zb50&acm=3.ms.1_4_1m6zb50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m6zb50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "网红同款2018秋季新款慵懒风空调衫针织开衫+针织半身裙时尚套装",
          type: 2,
          orgPrice: 127.15,
          props: ["时尚套装", "同款", "秋季", "新款"],
          hasSimilarity: true,
          sale: 20235,
          cfav: 77,
          price: 89,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6zb50&acm=3.ms.1_4_1m6zb50.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8o4mg",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180917_6i96bleh4fkif9l82hdehlfg6467i_640x960.jpg",
          iid: "1m8o4mg",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4mg&acm=3.ms.1_4_1m8o4mg.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4mg&acm=3.ms.1_4_1m8o4mg.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8o4mg.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "卫衣裙2018秋季新款女长袖韩版秋装慵懒风宽松连帽长款纯色连衣裙",
          type: 2,
          orgPrice: 127.15,
          props: [
            "纯色连衣裙",
            "长袖",
            "宽松",
            "长款",
            "连帽",
            "新款",
            "韩版",
            "秋季"
          ],
          hasSimilarity: true,
          sale: 20186,
          cfav: 143,
          price: 89,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8o4mg&acm=3.ms.1_4_1m8o4mg.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8o734",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180917_01340efjf7j886bcki30l3fi3h37k_640x960.jpg",
          iid: "1m8o734",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o734&acm=3.ms.1_4_1m8o734.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o734&acm=3.ms.1_4_1m8o734.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8o734.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "2018秋季新温柔风毛衣+仙女温柔风气质半身网纱套装两件套",
          type: 2,
          orgPrice: 182.86,
          props: ["套装两件套", "半身", "气质", "网纱", "秋季"],
          hasSimilarity: true,
          sale: 20074,
          cfav: 224,
          price: 128,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8o734&acm=3.ms.1_4_1m8o734.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8m4yo",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180916_57egl11h647ajbb4i6ie920g49aed_640x960.jpg",
          iid: "1m8m4yo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8m4yo&acm=3.ms.1_4_1m8m4yo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8m4yo&acm=3.ms.1_4_1m8m4yo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "352 351",
          acm:
            "3.ms.1_4_1m8m4yo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "2018早秋新款螺纹袖卫衣连帽卫衣女初秋原宿时尚撞色宽松学生上衣显瘦字母刺绣卫衣撞色上衣女",
          type: 2,
          orgPrice: 87.2,
          props: ["连帽卫衣", "字母", "原宿", "螺纹", "显瘦", "时尚", "新款"],
          hasSimilarity: true,
          sale: 20043,
          cfav: 169,
          price: 61,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.77",
            descDsr: "4.76",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8m4yo&acm=3.ms.1_4_1m8m4yo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "小资家女装"
        },
        {
          tradeItemId: "1m8jzwo",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg",
          iid: "1m8jzwo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8jzwo&acm=3.ms.1_4_1m8jzwo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8jzwo&acm=3.ms.1_4_1m8jzwo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8jzwo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套",
          type: 2,
          orgPrice: 78.58,
          props: [
            "套装两件套",
            "高腰",
            "格子",
            "时尚",
            "显瘦",
            "学院风",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 20002,
          cfav: 638,
          price: 55,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.54",
            descDsr: "4.50",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.62"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8jzwo&acm=3.ms.1_4_1m8jzwo.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "卓尔千衣"
        },
        {
          tradeItemId: "1m7acja",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180906_621egbf0i3dg0024dhffa251a7ij4_640x960.jpg",
          iid: "1m7acja",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034095_5_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034095_50_0-dit_37&cparam=MTUzODE5MTY1OV8xOHBkNGl5XzZmYTI1MzI2NGMyMDAxZTg5MmUwNDRhNTUwOTc5OWFiXzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NV81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034095_5_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034095_50_0-dit_37&cparam=MTUzODE5MTY1OV8xOHBkNGl5XzZmYTI1MzI2NGMyMDAxZTg5MmUwNDRhNTUwOTc5OWFiXzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NV81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034095_5_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034095_50_0-dit_37",
          title:
            "3条装 日系简约内裤女纯棉盒装纯棉中腰学院低腰大码学生甜美性感全棉裆女士三角内裤头小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xOHBkNGl5XzZmYTI1MzI2NGMyMDAxZTg5MmUwNDRhNTUwOTc5OWFiXzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NV81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "低腰",
            "中腰",
            "盒装",
            "全棉",
            "纯棉",
            "性感",
            "日系",
            "甜美",
            "大码",
            "小清新",
            "简约",
            "女士"
          ],
          hasSimilarity: true,
          sale: "1697",
          cfav: "742",
          price: 29.96,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034095_5_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034095_50_0-dit_37&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1kbtxmc",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180209_15cdj512lh1e33c5f2iak4l1hhfjd_640x960.jpg",
          iid: "1kbtxmc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1950554_6_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1950554_107_0-dit_37&cparam=MTUzODE5MTY1OV8xOWc0ZXl1X2I1NjE3MWM0YzY3YWQyOGQwYTZiOGQ1OTdhNDE4YTQ3XzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTUwNTU0XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1950554_6_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1950554_107_0-dit_37&cparam=MTUzODE5MTY1OV8xOWc0ZXl1X2I1NjE3MWM0YzY3YWQyOGQwYTZiOGQ1OTdhNDE4YTQ3XzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTUwNTU0XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          itemMarks: "2 1477 149",
          acm:
            "3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1950554_6_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1950554_107_0-dit_37",
          title:
            "安踏女子跑步鞋夏季新款透气网布运动鞋女百搭轻便减震耐磨休闲网面跑步鞋子92815525",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xOWc0ZXl1X2I1NjE3MWM0YzY3YWQyOGQwYTZiOGQ1OTdhNDE4YTQ3XzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTUwNTU0XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          orgPrice: 269,
          props: [
            "安踏",
            "跑步鞋",
            "网面",
            "减震",
            "轻便",
            "透气",
            "耐磨",
            "休闲",
            "百搭",
            "女子"
          ],
          hasSimilarity: true,
          sale: "297",
          cfav: "8746",
          price: 169,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1950554_6_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1950554_107_0-dit_37&itemType=7",
          shopSeller: "安踏旗舰店"
        },
        {
          tradeItemId: "1m8o4io",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180917_76djee590kiee2ffd362495g58590_640x960.jpg",
          iid: "1m8o4io",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4io&acm=3.ms.1_4_1m8o4io.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4io&acm=3.ms.1_4_1m8o4io.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8o4io.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "连帽卫衣女2018秋装新款韩版宽松慵懒风松松垮垮薄款外套上衣",
          type: 2,
          orgPrice: 113,
          props: ["连帽卫衣", "宽松", "薄款", "韩版", "新款"],
          hasSimilarity: true,
          sale: 19998,
          cfav: 154,
          price: 79.1,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8o4io&acm=3.ms.1_4_1m8o4io.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m7jcbc",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180825_3ja79219k0j57k8hdhild9fi26bfj_640x1076.jpg",
          iid: "1m7jcbc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7jcbc&acm=3.ms.1_4_1m7jcbc.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7jcbc&acm=3.ms.1_4_1m7jcbc.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m7jcbc.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "迪士尼米奇系列印花经典格纹衬衫2018秋新款宽松显瘦衬衣",
          type: 2,
          orgPrice: 98.58,
          props: ["格纹衬衫", "宽松显瘦", "印花", "经典", "迪士尼米奇", "新款"],
          hasSimilarity: true,
          sale: 19996,
          cfav: 41,
          price: 69,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7jcbc&acm=3.ms.1_4_1m7jcbc.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m7z27m",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180917_6e7cc0fhj2jbcj35i5baehl0i7f27_640x910.jpg",
          iid: "1m7z27m",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7z27m&acm=3.ms.1_4_1m7z27m.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7z27m&acm=3.ms.1_4_1m7z27m.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m7z27m.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "圆领印花卫衣2018新款女长袖韩版chic早秋上衣慵懒风",
          type: 2,
          orgPrice: 112.86,
          props: ["印花卫衣", "长袖", "圆领", "韩版", "新款"],
          hasSimilarity: true,
          sale: 19994,
          cfav: 79,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7z27m&acm=3.ms.1_4_1m7z27m.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m7yze8",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180917_1h01dabg09i7l3kh4g21blh6j41a6_640x910.jpg",
          iid: "1m7yze8",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7yze8&acm=3.ms.1_4_1m7yze8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7yze8&acm=3.ms.1_4_1m7yze8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m7yze8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "2018秋季新款潮人必入超显瘦高腰紧身牛仔铅笔裤牛仔裤女",
          type: 2,
          orgPrice: 112.86,
          props: ["牛仔铅笔裤", "紧身", "高腰", "显瘦", "秋季", "新款"],
          hasSimilarity: true,
          sale: 19990,
          cfav: 51,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7yze8&acm=3.ms.1_4_1m7yze8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8rdg8",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180919_4e7k59iifgkg84041f3illacfl201_640x946.jpg",
          iid: "1m8rdg8",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8rdg8&acm=3.ms.1_4_1m8rdg8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8rdg8&acm=3.ms.1_4_1m8rdg8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8rdg8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "2018新款女闺蜜装休闲套头长袖卡通小熊卫衣",
          type: 2,
          orgPrice: 112.86,
          props: ["闺蜜装", "套头", "长袖", "卡通", "休闲", "新款"],
          hasSimilarity: true,
          sale: 19987,
          cfav: 46,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8rdg8&acm=3.ms.1_4_1m8rdg8.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8lksy",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180915_6bi7981bg5j532fjiik7ge6af960h_640x960.jpg",
          iid: "1m8lksy",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8lksy&acm=3.ms.1_4_1m8lksy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8lksy&acm=3.ms.1_4_1m8lksy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8lksy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "长袖连衣裙秋装新款2018韩版宽松胖MM大码女装裙子慵懒学院风连帽兔耳朵中长款卫衣裙外套女",
          type: 2,
          orgPrice: 168,
          props: [
            "长款卫衣裙",
            "连帽",
            "宽松",
            "学院风",
            "胖mm",
            "兔耳朵",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 19976,
          cfav: 190,
          price: 68,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.58",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.67"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8lksy&acm=3.ms.1_4_1m8lksy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "潮匹凤"
        },
        {
          tradeItemId: "1k22cmo",
          img:
            "https://s11.mogucdn.com/p2/161210/upload_2299h7addk39439caa8fk8l330826_640x960.jpg",
          iid: "1k22cmo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_37&cparam=MTUzODE5MTY1OV8xM29xN3lzX2NiNTU2MWVmZTViNGNlMzNmMzc1ZTFlM2RhZGNjZWVhXzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_37&cparam=MTUzODE5MTY1OV8xM29xN3lzX2NiNTU2MWVmZTViNGNlMzNmMzc1ZTFlM2RhZGNjZWVhXzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "121 1525 82",
          acm:
            "3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_37",
          title: "韩国瘦腿袜收腹提臀压力裤春秋中厚打底袜子防勾丝塑形美腿连裤袜",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xM29xN3lzX2NiNTU2MWVmZTViNGNlMzNmMzc1ZTFlM2RhZGNjZWVhXzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 28,
          props: ["打底袜子", "防勾丝", "美腿", "塑形", "收腹", "提臀", "春秋"],
          hasSimilarity: true,
          sale: "1674",
          cfav: "9841",
          price: 19.6,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_37&itemType=7",
          shopSeller: "筱一时尚屋"
        },
        {
          tradeItemId: "1k3m1kw",
          img:
            "https://s11.mogucdn.com/p2/170317/upload_02d48fl52g1b2jdad4kceb15hd0bh_640x960.jpg",
          iid: "1k3m1kw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_37&cparam=MTUzODE5MTY1OV8xNmZzeW1hXzZkZDYzNmMwNmQyNjAyNGViM2Y1YWQ3MTgxYmEwMjA0XzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_37&cparam=MTUzODE5MTY1OV8xNmZzeW1hXzZkZDYzNmMwNmQyNjAyNGViM2Y1YWQ3MTgxYmEwMjA0XzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "121 1525 184 185",
          acm:
            "3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_37",
          title: "3条装日系原单收腹内裤女莱卡棉中腰无痕性感提臀包臀舒适透气",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xNmZzeW1hXzZkZDYzNmMwNmQyNjAyNGViM2Y1YWQ3MTgxYmEwMjA0XzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 39,
          props: [
            "收腹内裤",
            "中腰无痕",
            "提臀",
            "原单",
            "性感",
            "舒适",
            "透气",
            "包臀",
            "日系"
          ],
          hasSimilarity: true,
          sale: "2317",
          cfav: "21511",
          price: 27.3,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_37&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1m8mywy",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180916_3gfheg2egb1j46b2fj04a7g3l21eh_640x960.jpg",
          iid: "1m8mywy",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8mywy&acm=3.ms.1_4_1m8mywy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8mywy&acm=3.ms.1_4_1m8mywy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8mywy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "套装裙子2018秋冬季新款韩版宽松显瘦小香风挂脖慵懒风长袖毛衣+网纱裙两件套时尚套装女",
          type: 2,
          orgPrice: 70,
          props: [
            "时尚套装",
            "小香风",
            "挂脖",
            "秋冬季",
            "宽松显瘦",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 19878,
          cfav: 106,
          price: 49,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.84",
            descDsr: "4.85",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.90"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8mywy&acm=3.ms.1_4_1m8mywy.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "JJH女装馆"
        },
        {
          tradeItemId: "1m8le80",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180915_6kkjh58a94414al45ai252004d06e_640x960.jpg",
          iid: "1m8le80",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8le80&acm=3.ms.1_4_1m8le80.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8le80&acm=3.ms.1_4_1m8le80.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8le80.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "2018春秋韩版新款立领套头牛仔短外套女 宽松休闲时尚学生牛仔衫个性显瘦套头牛仔外套",
          type: 2,
          orgPrice: 200,
          props: [
            "牛仔短外套",
            "宽松",
            "立领",
            "个性",
            "显瘦",
            "休闲",
            "套头",
            "时尚",
            "春秋",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 19663,
          cfav: 24,
          price: 98,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.82",
            descDsr: "4.83",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.88"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8le80&acm=3.ms.1_4_1m8le80.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "JJH女装馆"
        },
        {
          tradeItemId: "1m8n18c",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180917_0ig1a055ickda43ebdcied84d4j12_640x960.jpg",
          iid: "1m8n18c",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8n18c&acm=3.ms.1_4_1m8n18c.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8n18c&acm=3.ms.1_4_1m8n18c.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8n18c.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "ins超火长袖连帽卫衣女秋冬季2018新款韩版bf风学生宽松加绒加厚上衣女百搭小清新外套女",
          type: 2,
          orgPrice: 149.9,
          props: [
            "连帽卫衣",
            "加绒加厚",
            "bf风",
            "宽松",
            "长袖",
            "秋冬季",
            "百搭",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 19574,
          cfav: 42,
          price: 49.9,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.58",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.67"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8n18c&acm=3.ms.1_4_1m8n18c.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "潮匹凤"
        },
        {
          tradeItemId: "1m8loki",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180916_4di1ek7k3kha3klk02185678b025d_640x960.jpg",
          iid: "1m8loki",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8loki&acm=3.ms.1_4_1m8loki.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8loki&acm=3.ms.1_4_1m8loki.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8loki.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "中长款长袖连衣裙秋装新款2018韩版休闲胖mm大码女装裙子女学生宽松松垮垮中长款卫衣裙外套",
          type: 2,
          orgPrice: 168,
          props: ["长袖连衣裙", "胖mm", "中长款", "休闲", "新款", "韩版"],
          hasSimilarity: true,
          sale: 19056,
          cfav: 169,
          price: 54,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.54",
            descDsr: "4.50",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.62"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8loki&acm=3.ms.1_4_1m8loki.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "卓尔千衣"
        },
        {
          tradeItemId: "1kn4r0k",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/171011_01b3l1cfk0601538ckeghg4l73g45_640x960.jpg",
          iid: "1kn4r0k",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kn4r0k&acm=3.ms.1_4_1kn4r0k.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kn4r0k&acm=3.ms.1_4_1kn4r0k.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "1525 353",
          acm:
            "3.ms.1_4_1kn4r0k.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "【三双装】日系小猫船袜子女浅口四季薄款可爱低帮运动吸汗防臭",
          type: 2,
          orgPrice: 12.9,
          props: [
            "船袜",
            "防臭",
            "吸汗",
            "浅口",
            "日系",
            "低帮",
            "四季",
            "薄款",
            "可爱",
            "运动",
            "三双装"
          ],
          hasSimilarity: true,
          sale: 22803,
          cfav: 595,
          price: 9.03,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.63",
            descDsr: "4.64",
            tagDescDsr: "4.74",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.81",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kn4r0k&acm=3.ms.1_4_1kn4r0k.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "萌小小生活馆"
        },
        {
          tradeItemId: "1m6nhqa",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180730_38ec8gj6alg835k8d6fe5ac551hai_640x960.jpg",
          iid: "1m6nhqa",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6nhqa&acm=3.ms.1_4_1m6nhqa.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m6nhqa&acm=3.ms.1_4_1m6nhqa.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m6nhqa.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "2018春秋季新款oversize明星同款机场bf港风情侣装宽松连帽牛仔外套女",
          type: 2,
          orgPrice: 200,
          props: ["牛仔外套", "春秋季", "明星同款", "港风", "连帽", "新款"],
          hasSimilarity: true,
          sale: 25606,
          cfav: 875,
          price: 98,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.67",
            descDsr: "4.66",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.77"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m6nhqa&acm=3.ms.1_4_1m6nhqa.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "小资少女"
        },
        {
          tradeItemId: "1k1g4aq",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/171118_651ifhkf0a95542jfbgh4a79e5d49_640x960.jpg",
          iid: "1k1g4aq",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1918395_9_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1918395_96_0-dit_37&cparam=MTUzODE5MTY1OV8xYXR5cXY4Xzc0ZjE3MDEyZjdiZGUxODdiYTc4OTlkMDgzM2EzZTFkXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxODM5NV85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1918395_9_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1918395_96_0-dit_37&cparam=MTUzODE5MTY1OV8xYXR5cXY4Xzc0ZjE3MDEyZjdiZGUxODdiYTc4OTlkMDgzM2EzZTFkXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxODM5NV85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525 2 138 1232 82 172",
          acm:
            "3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1918395_9_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1918395_96_0-dit_37",
          title: "E杯神器超聚拢调整型侧收无痕无钢圈小胸厚少女内衣文胸女套装薄",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xYXR5cXY4Xzc0ZjE3MDEyZjdiZGUxODdiYTc4OTlkMDgzM2EzZTFkXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxODM5NV85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 57.1,
          props: ["内衣文胸", "调整型", "聚拢", "无钢圈", "无痕"],
          hasSimilarity: true,
          sale: "2678",
          cfav: "9841",
          price: 34.83,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1918395_9_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1918395_96_0-dit_37&itemType=7",
          shopSeller: "wyfan888"
        },
        {
          tradeItemId: "1lpdys0",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180106_31hcc6780776kc058ci5bbgb5214f_640x960.jpg",
          iid: "1lpdys0",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_1054108250_10_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_2_1054108250_70_0-dit_37&cparam=MTUzODE5MTY1OV8xMWtfNjhhZGU5YTk2ZTU3MWNiMTA1ZDM1NTUyMTQyN2FkYmZfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_1054108250_10_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_2_1054108250_70_0-dit_37&cparam=MTUzODE5MTY1OV8xMWtfNjhhZGU5YTk2ZTU3MWNiMTA1ZDM1NTUyMTQyN2FkYmZfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_1054108250_10_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_2_1054108250_70_0-dit_37",
          title:
            "新款促销三角杯薄款蕾丝刺绣女内衣套装文胸聚拢无钢圈性感上托收副乳胸罩学生少女高中生无痕奶罩",
          type: 2,
          cparam:
            "MTUzODE5MTY1OV8xMWtfNjhhZGU5YTk2ZTU3MWNiMTA1ZDM1NTUyMTQyN2FkYmZfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 42.72,
          props: ["蕾丝刺绣", "无钢圈", "副乳", "无痕", "性感", "薄款", "新款"],
          hasSimilarity: true,
          sale: "4695",
          cfav: "14563",
          price: 29.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.suUjcr50jrAKO.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_1054108250_10_0-t_suUjcr50jrAKO-lc_16-fcid_10062603-c1_10062603_nil_nil_2_1054108250_70_0-dit_37&itemType=7",
          shopSeller: "二八佳人品牌内衣"
        },
        {
          tradeItemId: "1m8ezk4",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180910_5ffb78j8f7edke9e9j067k5d9g207_640x960.jpg",
          iid: "1m8ezk4",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8ezk4&acm=3.ms.1_4_1m8ezk4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8ezk4&acm=3.ms.1_4_1m8ezk4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8ezk4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "2018初秋时节新款实用单品短款长袖针织小外套+百褶吊带针织衫裙连衣裙两件套时尚套装女",
          type: 2,
          orgPrice: 160,
          props: ["时尚套装", "长袖", "实用", "短款", "新款"],
          hasSimilarity: true,
          sale: 18084,
          cfav: 460,
          price: 88,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.84",
            descDsr: "4.85",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.90"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8ezk4&acm=3.ms.1_4_1m8ezk4.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "JJH女装馆"
        },
        {
          tradeItemId: "1m8gy3g",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180912_0913hcd63jf9dag6j6fdlcbk19dig_640x882.jpg",
          iid: "1m8gy3g",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8gy3g&acm=3.ms.1_4_1m8gy3g.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8gy3g&acm=3.ms.1_4_1m8gy3g.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8gy3g.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "秋季新款韩版原宿圆领条纹撞色长袖卫衣外套高腰系带收腰小脚束脚裤子套装秋装时尚套装两件套女装",
          type: 2,
          orgPrice: 98.58,
          props: [
            "套装两件套",
            "高腰",
            "收腰",
            "时尚",
            "圆领条纹",
            "撞色",
            "小脚",
            "系带",
            "原宿",
            "秋季",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 17850,
          cfav: 428,
          price: 69,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.59",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.72"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8gy3g&acm=3.ms.1_4_1m8gy3g.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "糖糖house"
        },
        {
          tradeItemId: "1m8o4js",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180917_4gig14d3kb6d9084cefk9g7fb19kl_640x960.jpg",
          iid: "1m8o4js",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4js&acm=3.ms.1_4_1m8o4js.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8o4js&acm=3.ms.1_4_1m8o4js.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8o4js.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "复古波点连衣裙2018新款女长袖秋中长款收腰a型显瘦裙子",
          type: 2,
          orgPrice: 112.86,
          props: ["波点连衣裙", "收腰", "中长款", "长袖", "复古", "新款"],
          hasSimilarity: true,
          sale: 17592,
          cfav: 52,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8o4js&acm=3.ms.1_4_1m8o4js.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m76pms",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180815_7ff4fbk769cc2d1c2l494ie7j5jke_640x908.jpg",
          iid: "1m76pms",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m76pms&acm=3.ms.1_4_1m76pms.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m76pms&acm=3.ms.1_4_1m76pms.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m76pms.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title: "2018秋新款韩版时尚简约系带显瘦条纹系带西服套装女",
          type: 2,
          orgPrice: 154.29,
          props: ["显瘦条纹", "时尚", "系带", "简约", "新款", "韩版"],
          hasSimilarity: true,
          sale: 17591,
          cfav: 43,
          price: 108,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.55",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.61"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m76pms&acm=3.ms.1_4_1m76pms.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "阿究究"
        },
        {
          tradeItemId: "1m8fv9a",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180911_86fig00l2j2dfbg0ag8c93740a470_640x960.jpg",
          iid: "1m8fv9a",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8fv9a&acm=3.ms.1_4_1m8fv9a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8fv9a&acm=3.ms.1_4_1m8fv9a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8fv9a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "ins超火高腰小脚牛仔裤女2018春秋新款韩版学生百搭紧身显瘦复古港味chic风弹力九分裤",
          type: 2,
          orgPrice: 149.9,
          props: ["小脚牛仔裤", "紧身", "高腰", "显瘦", "韩版", "新款", "春秋"],
          hasSimilarity: true,
          sale: 17409,
          cfav: 409,
          price: 49.9,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.54",
            descDsr: "4.50",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.62"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8fv9a&acm=3.ms.1_4_1m8fv9a.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "卓尔千衣"
        },
        {
          tradeItemId: "1m8lpa6",
          img:
            "https://s11.mogucdn.com/mlcdn/55cf19/180915_3d9ghld1a15g0j1hg8dk10b8ek0b1_640x960.jpg",
          iid: "1m8lpa6",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8lpa6&acm=3.ms.1_4_1m8lpa6.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8lpa6&acm=3.ms.1_4_1m8lpa6.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m8lpa6.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37",
          title:
            "假两件连帽卫衣女秋季新款韩版2018嘻哈卡通印花长袖上衣女学生原宿风中长款显瘦卫衣裙女外套",
          type: 2,
          orgPrice: 168,
          props: [
            "连帽卫衣",
            "卡通印花",
            "原宿风",
            "嘻哈",
            "中长款显瘦",
            "韩版",
            "秋季",
            "新款"
          ],
          hasSimilarity: true,
          sale: 17283,
          cfav: 157,
          price: 54.4,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.57",
            descDsr: "4.58",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.67"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8lpa6&acm=3.ms.1_4_1m8lpa6.84.1243-69000.suUjcr50jrAKO.sd_117-swt_84-imt_6-t_suUjcr50jrAKO-lc_16-fcid_10062603-dit_37&itemType=6",
          shopSeller: "潮匹凤"
        }
      ]
    });
  }
  if (type === "new") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: [
        {
          tradeItemId: "1kf8q3w",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/170818_6i5id70ieb5d3c9j04g8gh7j8941k_640x960.jpg",
          iid: "1kf8q3w",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_39&cparam=MTUzODE5MTY2MF8xN3J0ano0XzIyYWViZWFhZjQ5YzE3ZmI1NDJlODczNTc3OGQyOTc0XzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_39&cparam=MTUzODE5MTY2MF8xN3J0ano0XzIyYWViZWFhZjQ5YzE3ZmI1NDJlODczNTc3OGQyOTc0XzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1kf8q3w.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_39",
          title: "3条装 防勾丝秋冬款连裤袜高筒袜打底袜中厚肉色丝袜打底裤袜",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xN3J0ano0XzIyYWViZWFhZjQ5YzE3ZmI1NDJlODczNTc3OGQyOTc0XzE2XzBfMjYyNzA2OTI0XzQ4OGVfMTg1MzczMl8xXzBfMzMyXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 42.72,
          props: ["肉色丝袜", "防勾丝", "秋冬款", "3条装"],
          hasSimilarity: true,
          sale: "2390",
          cfav: "9884",
          price: 29.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kf8q3w&acm=3.ms.1_1_1kf8q3w.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_262706924_1853732_1_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1853732_60_0-dit_39&itemType=7",
          shopSeller: "丹丹精品袜铺"
        },
        {
          tradeItemId: "1k9cg24",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180412_4bjed85ahhj588ci41ih89367g570_640x960.jpg",
          iid: "1k9cg24",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_39&cparam=MTUzODE5MTY2MF8xZW10ejltXzFkYzBjMjRhZTNkZmJhMTBiZjA2NTQxZjcyODQ3MGI3XzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTc5MjM1XzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_39&cparam=MTUzODE5MTY2MF8xZW10ejltXzFkYzBjMjRhZTNkZmJhMTBiZjA2NTQxZjcyODQ3MGI3XzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTc5MjM1XzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          itemMarks: "1525 2 1497 138 1670 82 172 173",
          acm:
            "3.ms.1_1_1k9cg24.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_39",
          title:
            "【2支40元 屈臣氏爆卖】思尚保湿不掉色哑光多色正品口红咬唇妆雾面丝绒 防水不脱色滋润唇膏",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xZW10ejltXzFkYzBjMjRhZTNkZmJhMTBiZjA2NTQxZjcyODQ3MGI3XzE2XzFfMjM0OTk1ODYwXzRmOGI5NF8xOTc5MjM1XzJfMF8xODFfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          orgPrice: 70,
          props: [
            "思尚",
            "滋润唇膏",
            "雾面",
            "唇妆",
            "不脱色",
            "不掉色",
            "哑光",
            "保湿",
            "丝绒",
            "防水",
            "多色",
            "正品",
            "2支40"
          ],
          hasSimilarity: true,
          sale: "18650",
          cfav: "25210",
          price: 35,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k9cg24&acm=3.ms.1_1_1k9cg24.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_234995860_1979235_2_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1979235_288_0-dit_39&itemType=7",
          shopSeller: "思尚店"
        },
        {
          tradeItemId: "1m91wxc",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180926_8be67alec1hc25j53eai7a9f9714l_640x960.jpg",
          iid: "1m91wxc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m91wxc&acm=3.ms.1_4_1m91wxc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m91wxc&acm=3.ms.1_4_1m91wxc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m91wxc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "秋季新款韩版温柔毛呢大衣外套慵懒风宽松连帽卫衣高腰开叉chic半身裙秋装时尚套装三件套女装",
          type: 2,
          orgPrice: 112.86,
          props: [
            "半身裙",
            "开叉",
            "高腰",
            "时尚",
            "宽松",
            "秋季",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 3,
          onSaleTime: "3天内上新",
          cfav: 9,
          price: 79,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.50",
            descDsr: "4.51",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.64"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m91wxc&acm=3.ms.1_4_1m91wxc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "素本依"
        },
        {
          tradeItemId: "1m910aq",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180926_688a52da39k6i37hfldf945j5854b_640x960.jpg",
          iid: "1m910aq",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m910aq&acm=3.ms.1_4_1m910aq.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m910aq&acm=3.ms.1_4_1m910aq.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m910aq.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "秋冬季小清新水貂绒v领海马毛毛衣女套头宽松学生韩版短款毛线衣",
          type: 2,
          orgPrice: 220,
          props: [
            "海马毛毛衣",
            "貂绒",
            "套头",
            "v领",
            "宽松",
            "短款",
            "秋冬季",
            "小清新",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 1,
          onSaleTime: "3天内上新",
          cfav: 2,
          price: 89,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.88",
            descDsr: "4.88",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.92"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m910aq&acm=3.ms.1_4_1m910aq.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "Smile微微一笑"
        },
        {
          tradeItemId: "1m90lus",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180925_77gka97h5ll0d92hhclc33gd51169_640x960.jpg",
          iid: "1m90lus",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m90lus&acm=3.ms.1_4_1m90lus.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m90lus&acm=3.ms.1_4_1m90lus.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525 352 351",
          acm:
            "3.ms.1_4_1m90lus.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "品质2018秋冬新款韩版小脚裤百搭宽松显瘦萝卜裤女裤子毛呢哈伦裤九分裤纯色网红休闲裤子潮",
          type: 2,
          orgPrice: 85.5,
          props: ["毛呢哈伦裤", "宽松显瘦", "百搭", "秋冬新款", "品质"],
          hasSimilarity: true,
          sale: 16,
          onSaleTime: "7天内上新",
          cfav: 30,
          price: 59,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.79",
            descDsr: "4.79",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.86"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m90lus&acm=3.ms.1_4_1m90lus.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "妮家D口袋"
        },
        {
          tradeItemId: "1m90ho2",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180925_5h1k4k78jifl29kfcc3j7a588b7jd_640x960.jpg",
          iid: "1m90ho2",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m90ho2&acm=3.ms.1_4_1m90ho2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m90ho2&acm=3.ms.1_4_1m90ho2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525 352 351",
          acm:
            "3.ms.1_4_1m90ho2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "2018秋季新款法式少女茶歇裙吊带裙加外搭两件套网纱连衣裙",
          type: 2,
          orgPrice: 170,
          props: ["网纱连衣裙", "法式", "新款", "秋季"],
          hasSimilarity: true,
          sale: 87,
          onSaleTime: "7天内上新",
          cfav: 28,
          price: 109,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.97",
            descDsr: "4.98",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.98"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m90ho2&acm=3.ms.1_4_1m90ho2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "懿轩世家女装"
        },
        {
          tradeItemId: "1m90eh2",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180925_8965ckia9ceakld7b6hk967bcfba4_640x960.jpg",
          iid: "1m90eh2",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m90eh2&acm=3.ms.1_4_1m90eh2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m90eh2&acm=3.ms.1_4_1m90eh2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m90eh2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "秋冬新款韩版ins超火的小清新少女网红风无袖针织毛衣背心+浪漫仙仙压褶长袖连衣裙套装两件套",
          type: 2,
          orgPrice: 114,
          props: [
            "套装两件套",
            "压褶",
            "针织",
            "无袖",
            "浪漫",
            "秋冬新款",
            "小清新",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 7,
          onSaleTime: "7天内上新",
          cfav: 13,
          price: 79.8,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.58",
            descDsr: "4.60",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.71"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m90eh2&acm=3.ms.1_4_1m90eh2.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "时尚天国"
        },
        {
          tradeItemId: "1m9043w",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180925_81e4a0e794kf3a46aj3ll50ceja54_640x960.jpg",
          iid: "1m9043w",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m9043w&acm=3.ms.1_4_1m9043w.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m9043w&acm=3.ms.1_4_1m9043w.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m9043w.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "情侣装秋装2018新款韩版宽松连帽套头长袖卫衣ins+半身长裙女两件套bf风时尚休闲套装女",
          type: 2,
          orgPrice: 98.58,
          props: [
            "半身长裙",
            "时尚",
            "套头",
            "bf风",
            "宽松",
            "连帽",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 3,
          onSaleTime: "7天内上新",
          cfav: 17,
          price: 69,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.67",
            descDsr: "4.65",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.75"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m9043w&acm=3.ms.1_4_1m9043w.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "X小芒果X"
        },
        {
          tradeItemId: "1m8voqa",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180922_6j6jd1ife363d7iji7gab5ei2a1e9_640x960.jpg",
          iid: "1m8voqa",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503198_3_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503198_70_0-dit_39&cparam=MTUzODE5MTY2MF8xOTE4Nzh5X2FjNDE5ZGI4ZjMyMzI3MTFhMzZlNDVkMzZlN2MxYzFjXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503198_3_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503198_70_0-dit_39&cparam=MTUzODE5MTY2MF8xOTE4Nzh5X2FjNDE5ZGI4ZjMyMzI3MTFhMzZlNDVkMzZlN2MxYzFjXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1m8voqa.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503198_3_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503198_70_0-dit_39",
          title:
            "秋冬季无痕加厚性感内衣套装少女聚拢无钢圈文胸美背小胸罩聚拢上托防下垂深V一片式光面无痕胸罩",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xOTE4Nzh5X2FjNDE5ZGI4ZjMyMzI3MTFhMzZlNDVkMzZlN2MxYzFjXzE2XzJfNDQyNDM4MzQ1XzRiOGZfMF8zXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 57,
          props: [
            "胸罩",
            "美背",
            "聚拢",
            "一片式",
            "无痕",
            "光面",
            "性感",
            "防下垂",
            "加厚",
            "秋冬季"
          ],
          hasSimilarity: true,
          sale: "50",
          cfav: "95",
          price: 39.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8voqa&acm=3.ms.1_1_1m8voqa.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_442438345_466503198_3_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_466503198_70_0-dit_39&itemType=7",
          shopSeller: "二八佳人品牌内衣"
        },
        {
          tradeItemId: "1kljr06",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/171023_83jjlha20abhaglk1lc2bka0kk0e4_640x960.jpg",
          iid: "1kljr06",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_39&cparam=MTUzODE5MTY2MF8xZTQ0czR1X2NiNjE3ZWZlYmRhN2JkOTllOTJhZGQ2Mzk3OTQyODAxXzE2XzNfMjczMTI4ODkzXzRhOGNfMTkwMjI1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_39&cparam=MTUzODE5MTY2MF8xZTQ0czR1X2NiNjE3ZWZlYmRhN2JkOTllOTJhZGQ2Mzk3OTQyODAxXzE2XzNfMjczMTI4ODkzXzRhOGNfMTkwMjI1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_1_1kljr06.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_39",
          title: "3条装 简约轻熟内裤女纯棉盒装纯棉中腰无痕三角内裤性感小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xZTQ0czR1X2NiNjE3ZWZlYmRhN2JkOTllOTJhZGQ2Mzk3OTQyODAxXzE2XzNfMjczMTI4ODkzXzRhOGNfMTkwMjI1OV80XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "中腰无痕",
            "盒装",
            "纯棉",
            "性感",
            "小清新",
            "简约"
          ],
          hasSimilarity: true,
          sale: "4042",
          cfav: "8925",
          price: 29.96,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kljr06&acm=3.ms.1_1_1kljr06.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_273128893_1902259_4_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1902259_80_0-dit_39&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1m903y8",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180925_2k1ld9640hh53189gd1jb7gk9ik6j_640x960.jpg",
          iid: "1m903y8",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m903y8&acm=3.ms.1_4_1m903y8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m903y8&acm=3.ms.1_4_1m903y8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m903y8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "秋冬季时尚套装女2018新款小清新格子呢大衣复古毛呢外套搭温柔风长袖打底连衣裙两件套",
          type: 2,
          orgPrice: 142,
          props: ["时尚套装", "长袖", "秋冬季", "复古", "小清新", "新款"],
          hasSimilarity: true,
          sale: 0,
          onSaleTime: "7天内上新",
          cfav: 2,
          price: 99.4,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.78",
            descDsr: "4.77",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.79"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m903y8&acm=3.ms.1_4_1m903y8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "韩LIU舍"
        },
        {
          tradeItemId: "1m8z3ng",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180924_1cl8g6113k2h46j7e5kli9jk27c1d_640x960.jpg",
          iid: "1m8z3ng",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8z3ng&acm=3.ms.1_4_1m8z3ng.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m8z3ng&acm=3.ms.1_4_1m8z3ng.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525 352 351",
          acm:
            "3.ms.1_4_1m8z3ng.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "ins超火气质新款翻领单排扣口袋袖拌长袖茧型显瘦呢子大衣长款毛呢外套女",
          type: 2,
          orgPrice: 251,
          props: [
            "呢子大衣",
            "茧型",
            "翻领",
            "长款",
            "单排扣",
            "气质",
            "显瘦",
            "长袖",
            "新款"
          ],
          hasSimilarity: true,
          sale: 9,
          onSaleTime: "7天内上新",
          cfav: 12,
          price: 155,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.70",
            descDsr: "4.70",
            tagDescDsr: "4.75",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.77"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m8z3ng&acm=3.ms.1_4_1m8z3ng.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "韩派风尚店"
        },
        {
          tradeItemId: "1m964z8",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_1dh12jf2c86d94kbl03jb8l17ei5a_640x960.jpg",
          iid: "1m964z8",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964z8&acm=3.ms.1_4_1m964z8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964z8&acm=3.ms.1_4_1m964z8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m964z8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "2018春秋新款宽松韩版学生短外套女流行百搭显瘦运动条纹棒球服",
          type: 2,
          orgPrice: 139.9,
          props: [
            "学生短外套",
            "宽松",
            "百搭显瘦",
            "流行",
            "运动",
            "春秋",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 139.9,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.98",
            descDsr: "4.98",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.98"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m964z8&acm=3.ms.1_4_1m964z8.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "女神视觉"
        },
        {
          tradeItemId: "1m968hg",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_3ei63283l62435cl6c434914ia04b_800x832.jpg",
          iid: "1m968hg",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968hg&acm=3.ms.1_4_1m968hg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968hg&acm=3.ms.1_4_1m968hg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968hg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "秋冬新款高腰显瘦百搭纹理打底针织半身裙女",
          type: 2,
          orgPrice: 112.86,
          props: [
            "素檬",
            "针织半身裙",
            "高腰",
            "显瘦",
            "百搭",
            "秋冬新款",
            "打底"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 112.86,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.61",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.74"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968hg&acm=3.ms.1_4_1m968hg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "米诺韩系馆"
        },
        {
          tradeItemId: "1m968he",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_5174g62h876a3f07g9d474i5255jh_640x960.jpg",
          iid: "1m968he",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968he&acm=3.ms.1_4_1m968he.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968he&acm=3.ms.1_4_1m968he.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968he.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "2018新款胸包男斜挎包韩版潮单肩包斜跨胸前包时尚休闲小背包男包",
          type: 2,
          orgPrice: 202.8,
          props: ["男包", "斜跨", "时尚", "韩版"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 141.96,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.70",
            tagDescDsr: "4.73",
            tagQualityDsr: "4.73",
            tagServiceDsr: "4.82",
            serviceDsr: "4.74"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968he&acm=3.ms.1_4_1m968he.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "亲亲鱼"
        },
        {
          tradeItemId: "1m968ha",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_020lhd6b403dkbjgfdkj324keck67_640x960.jpg",
          iid: "1m968ha",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968ha&acm=3.ms.1_4_1m968ha.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968ha&acm=3.ms.1_4_1m968ha.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968ha.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "2018新款 秋装青年t恤男士V领长袖薄款韩版潮流印花帅气卫衣春秋季上衣服夏秋衣",
          type: 2,
          orgPrice: 58,
          props: [
            "秋衣",
            "印花",
            "潮流",
            "薄款",
            "v领长袖",
            "男士",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 58,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.48",
            descDsr: "4.54",
            tagDescDsr: "4.78",
            tagQualityDsr: "4.78",
            tagServiceDsr: "4.86",
            serviceDsr: "4.74"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968ha&acm=3.ms.1_4_1m968ha.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "吾稀罕的潮店"
        },
        {
          tradeItemId: "1m7acja",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180906_6fbh31ekb259gjgj0f0f2chh323i9_640x960.jpg",
          iid: "1m7acja",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_39&cparam=MTUzODE5MTY2MF8xOHBkNGl5XzM2MmY1YTU4OWRmMmU1ZGMwNWQyNTgwMGZlZmM2MDI3XzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NF81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_39&cparam=MTUzODE5MTY2MF8xOHBkNGl5XzM2MmY1YTU4OWRmMmU1ZGMwNWQyNTgwMGZlZmM2MDI3XzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NF81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "1525",
          acm:
            "3.ms.1_1_1m7acja.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_39",
          title:
            "3条装 日系简约内裤女纯棉盒装纯棉中腰学院低腰大码学生甜美性感全棉裆女士三角内裤头小清新",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xOHBkNGl5XzM2MmY1YTU4OWRmMmU1ZGMwNWQyNTgwMGZlZmM2MDI3XzE2XzRfNDI2NzMzOTc5XzQ5ODdfMjAzNDA5NF81XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 42.8,
          props: [
            "三角内裤",
            "低腰",
            "中腰",
            "盒装",
            "全棉",
            "纯棉",
            "性感",
            "日系",
            "甜美",
            "大码",
            "小清新",
            "简约",
            "女士"
          ],
          hasSimilarity: true,
          sale: "1697",
          cfav: "742",
          price: 29.96,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m7acja&acm=3.ms.1_1_1m7acja.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_426733979_2034094_5_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_2034094_50_0-dit_39&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1kbtxmc",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/180301_554672k29f40gef9bcl3kbff5432k_640x960.jpg",
          iid: "1kbtxmc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1953766_6_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1953766_107_0-dit_39&cparam=MTUzODE5MTY2MF8xOWc0ZXl1XzRmZGE2ZTMyMzQwNDBlMGM4NGYxMTYxNzI4NTBiNzkxXzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTUzNzY2XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1953766_6_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1953766_107_0-dit_39&cparam=MTUzODE5MTY2MF8xOWc0ZXl1XzRmZGE2ZTMyMzQwNDBlMGM4NGYxMTYxNzI4NTBiNzkxXzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTUzNzY2XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          itemMarks: "2 1477 149",
          acm:
            "3.ms.1_1_1kbtxmc.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1953766_6_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1953766_107_0-dit_39",
          title:
            "安踏女子跑步鞋夏季新款透气网布运动鞋女百搭轻便减震耐磨休闲网面跑步鞋子92815525",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xOWc0ZXl1XzRmZGE2ZTMyMzQwNDBlMGM4NGYxMTYxNzI4NTBiNzkxXzE2XzVfMjYzMTY2MDczXzRjOGY5NF8xOTUzNzY2XzZfMF81OTJfMV8wX3JzLTEwMDYyNjAzLnJ0LTAud3QtMg==",
          orgPrice: 269,
          props: [
            "安踏",
            "跑步鞋",
            "网面",
            "减震",
            "轻便",
            "透气",
            "耐磨",
            "休闲",
            "百搭",
            "女子"
          ],
          hasSimilarity: true,
          sale: "297",
          cfav: "8746",
          price: 169,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1kbtxmc&acm=3.ms.1_1_1kbtxmc.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_263166073_1953766_6_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1953766_107_0-dit_39&itemType=7",
          shopSeller: "安踏旗舰店"
        },
        {
          tradeItemId: "1m964yi",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_0h96gfc709lf63elh5h82igeg7c96_640x960.jpg",
          iid: "1m964yi",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964yi&acm=3.ms.1_4_1m964yi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964yi&acm=3.ms.1_4_1m964yi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m964yi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "条纹半身裙秋冬2018新款高腰中长款a字裙毛呢包臀裙子中长裙",
          type: 2,
          orgPrice: 85,
          props: ["a字裙", "高腰", "中长款", "秋冬", "新款"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 85,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.81",
            descDsr: "4.82",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.87"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m964yi&acm=3.ms.1_4_1m964yi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "JIUYUEQ/久月七"
        },
        {
          tradeItemId: "1m968mi",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_196agb5l14jacec01eg21cj25e03g_640x960.jpg",
          iid: "1m968mi",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968mi&acm=3.ms.1_4_1m968mi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968mi&acm=3.ms.1_4_1m968mi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968mi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "好面料翻领衬衣+背心裙两件套 NX",
          type: 2,
          orgPrice: 199,
          props: ["背心裙"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 199,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.75",
            descDsr: "4.76",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.84"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968mi&acm=3.ms.1_4_1m968mi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "君穎e店"
        },
        {
          tradeItemId: "1m964ye",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_8104h2a04bl753ib7k3j3ke3l4jlc_640x960.jpg",
          iid: "1m964ye",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964ye&acm=3.ms.1_4_1m964ye.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964ye&acm=3.ms.1_4_1m964ye.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m964ye.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "2018秋冬新款马丁靴女高帮英伦风反绒骑士靴韩版系带厚底增高短筒短靴女百搭学生拼接靴子女",
          type: 2,
          orgPrice: 127.87,
          props: [
            "骑士靴",
            "短筒",
            "英伦风",
            "反绒",
            "高帮",
            "厚底",
            "系带",
            "增高",
            "秋冬新款",
            "百搭",
            "拼接",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 127.87,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.66",
            descDsr: "4.71",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.84",
            serviceDsr: "4.78"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m964ye&acm=3.ms.1_4_1m964ye.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "浪缌莱潮鞋坊"
        },
        {
          tradeItemId: "1m968mg",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_2i6hkhcd27k926a34ffj36ab13ijd_640x960.jpg",
          iid: "1m968mg",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968mg&acm=3.ms.1_4_1m968mg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968mg&acm=3.ms.1_4_1m968mg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968mg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "轻骑者户外运动多功能腰包男包时尚骑行胸包女休闲单肩斜跨包小包",
          type: 2,
          orgPrice: 101.4,
          props: ["多功能腰包", "单肩", "休闲", "时尚"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 70.98,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.70",
            tagDescDsr: "4.73",
            tagQualityDsr: "4.73",
            tagServiceDsr: "4.82",
            serviceDsr: "4.74"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968mg&acm=3.ms.1_4_1m968mg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "亲亲鱼"
        },
        {
          tradeItemId: "1m964yc",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_4cg555c62656a4j28di13f9b21b22_640x960.jpg",
          iid: "1m964yc",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964yc&acm=3.ms.1_4_1m964yc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964yc&acm=3.ms.1_4_1m964yc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m964yc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "秋季新款韩版双面单排扣长袖连帽毛呢大衣女学生中长款修身显瘦纯色百搭加厚大毛领呢子外套",
          type: 2,
          orgPrice: 225.72,
          props: [
            "毛呢大衣",
            "双面",
            "单排扣",
            "大毛领",
            "加厚",
            "连帽",
            "修身显瘦",
            "纯色",
            "长袖",
            "百搭",
            "秋季",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 225.72,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.76",
            descDsr: "4.75",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m964yc&acm=3.ms.1_4_1m964yc.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "格安唐"
        },
        {
          tradeItemId: "1m968ma",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_7db8bd626jc3ac127cb5dkehljh23_640x960.jpg",
          iid: "1m968ma",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968ma&acm=3.ms.1_4_1m968ma.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968ma&acm=3.ms.1_4_1m968ma.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968ma.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "秋季韩版新款女装中长款风衣宽松矮个子港风chic外套薄款",
          type: 2,
          orgPrice: 41,
          props: ["中长款风衣", "薄款", "宽松", "港风", "秋季", "新款", "韩版"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 41,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.65",
            descDsr: "4.68",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.77"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968ma&acm=3.ms.1_4_1m968ma.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "乐大可"
        },
        {
          tradeItemId: "1k22cmo",
          img:
            "https://s11.mogucdn.com/p2/161210/upload_2299h7addk39439caa8fk8l330826_640x960.jpg",
          iid: "1k22cmo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_39&cparam=MTUzODE5MTY2MF8xM29xN3lzX2RiMzMwNWZmMGQ5OGE0YTg0MTJlNjU0Yjk4NzJmNGE5XzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_39&cparam=MTUzODE5MTY2MF8xM29xN3lzX2RiMzMwNWZmMGQ5OGE0YTg0MTJlNjU0Yjk4NzJmNGE5XzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "121 1525 82",
          acm:
            "3.ms.1_1_1k22cmo.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_39",
          title: "韩国瘦腿袜收腹提臀压力裤春秋中厚打底袜子防勾丝塑形美腿连裤袜",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xM29xN3lzX2RiMzMwNWZmMGQ5OGE0YTg0MTJlNjU0Yjk4NzJmNGE5XzE2XzZfMjg1NjM3NzAzXzQ4OGZfMTUwOTkyMV83XzBfODQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 28,
          props: ["打底袜子", "防勾丝", "美腿", "塑形", "收腹", "提臀", "春秋"],
          hasSimilarity: true,
          sale: "1674",
          cfav: "9841",
          price: 19.6,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k22cmo&acm=3.ms.1_1_1k22cmo.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_285637703_1509921_7_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1509921_50_0-dit_39&itemType=7",
          shopSeller: "筱一时尚屋"
        },
        {
          tradeItemId: "1k3m1kw",
          img:
            "https://s11.mogucdn.com/p2/170317/upload_02d48fl52g1b2jdad4kceb15hd0bh_640x960.jpg",
          iid: "1k3m1kw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_39&cparam=MTUzODE5MTY2MF8xNmZzeW1hX2RjYmZlYjZkYWZiZjAyZWQzMzg1Yjg0YjdkZjgwMGI3XzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_39&cparam=MTUzODE5MTY2MF8xNmZzeW1hX2RjYmZlYjZkYWZiZjAyZWQzMzg1Yjg0YjdkZjgwMGI3XzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          itemMarks: "121 1525 184 185",
          acm:
            "3.ms.1_1_1k3m1kw.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_39",
          title: "3条装日系原单收腹内裤女莱卡棉中腰无痕性感提臀包臀舒适透气",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xNmZzeW1hX2RjYmZlYjZkYWZiZjAyZWQzMzg1Yjg0YjdkZjgwMGI3XzE2XzdfMTExNDY2MzE4XzQ4ODZfMTkxMTQ5NF84XzBfMzQ2XzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTA=",
          orgPrice: 39,
          props: [
            "收腹内裤",
            "中腰无痕",
            "提臀",
            "原单",
            "性感",
            "舒适",
            "透气",
            "包臀",
            "日系"
          ],
          hasSimilarity: true,
          sale: "2317",
          cfav: "21511",
          price: 27.3,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k3m1kw&acm=3.ms.1_1_1k3m1kw.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_111466318_1911494_8_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1911494_60_0-dit_39&itemType=7",
          shopSeller: "丽颜黛梦内衣店"
        },
        {
          tradeItemId: "1m968gw",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_2ie6c9e89jf9e81ac3g8f4k2f9a37_640x960.jpg",
          iid: "1m968gw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968gw&acm=3.ms.1_4_1m968gw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968gw&acm=3.ms.1_4_1m968gw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968gw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "运动套装女春秋季2018新款休闲服韩版显瘦大码女装长袖卫衣两件套",
          type: 2,
          orgPrice: 119,
          props: ["休闲服", "新款", "春秋季", "显瘦", "韩版"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 119,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.73",
            descDsr: "3.91",
            tagDescDsr: "4.80",
            tagQualityDsr: "4.79",
            tagServiceDsr: "4.86",
            serviceDsr: "5.00"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968gw&acm=3.ms.1_4_1m968gw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "龙升运动鞋服"
        },
        {
          tradeItemId: "1m964y4",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_12jl981d429d267a6j80dhh4glcld_640x960.jpg",
          iid: "1m964y4",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964y4&acm=3.ms.1_4_1m964y4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964y4&acm=3.ms.1_4_1m964y4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m964y4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "圣圆男士胸包时尚休闲单肩斜挎小背包潮流胸前男包迷你运动斜跨包",
          type: 2,
          orgPrice: 176.8,
          props: [
            "男包",
            "单肩",
            "潮流",
            "迷你",
            "运动",
            "休闲",
            "时尚",
            "胸前",
            "男士"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 123.76,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.70",
            tagDescDsr: "4.73",
            tagQualityDsr: "4.73",
            tagServiceDsr: "4.82",
            serviceDsr: "4.74"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m964y4&acm=3.ms.1_4_1m964y4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "亲亲鱼"
        },
        {
          tradeItemId: "1m968m0",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_1k04h5113844fc4k67fbk0khe6e0f_640x960.jpg",
          iid: "1m968m0",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968m0&acm=3.ms.1_4_1m968m0.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968m0&acm=3.ms.1_4_1m968m0.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968m0.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "睡衣女秋冬加厚法兰绒睡衣女套装珊瑚绒睡衣女家居服中年妈妈睡衣",
          type: 2,
          orgPrice: 49,
          props: ["珊瑚绒睡衣", "加厚", "中年", "秋冬"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 49,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.59",
            descDsr: "4.59",
            tagDescDsr: "4.79",
            tagQualityDsr: "4.77",
            tagServiceDsr: "4.85",
            serviceDsr: "4.66"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968m0&acm=3.ms.1_4_1m968m0.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "C苡然服饰"
        },
        {
          tradeItemId: "1m968gk",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_88bb486ci4hh3e4ea28a2ed7lclh9_640x960.jpg",
          iid: "1m968gk",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968gk&acm=3.ms.1_4_1m968gk.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968gk&acm=3.ms.1_4_1m968gk.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968gk.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "白衬衫女长袖2018秋装新款韩范宽松荷叶边衬衣短款蕾丝衫上衣甜美小清新学生百搭显瘦娃娃衫",
          type: 2,
          orgPrice: 129,
          props: ["白衬衫", "韩范", "小清新", "长袖", "甜美", "宽松", "新款"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 129,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.74",
            descDsr: "4.76",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.84",
            serviceDsr: "4.84"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968gk&acm=3.ms.1_4_1m968gk.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "银千穗"
        },
        {
          tradeItemId: "1m968gi",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_0fil553ldh4j7gg3jb6g5lbf9c94g_640x959.jpg",
          iid: "1m968gi",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968gi&acm=3.ms.1_4_1m968gi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968gi&acm=3.ms.1_4_1m968gi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968gi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "韩版休闲鞋女2018夏秋季新款透气小白鞋女百搭学生简约跑步鞋女增高网红同款老爹鞋显瘦运动鞋",
          type: 2,
          orgPrice: 113,
          props: ["运动鞋", "增高", "同款", "百搭", "显瘦", "简约", "新款"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 113,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.96",
            descDsr: "4.96",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.84",
            serviceDsr: "4.96"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968gi&acm=3.ms.1_4_1m968gi.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "落落潮鞋"
        },
        {
          tradeItemId: "1m968lo",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_7da0h11albhdfgfajh0c7700jc799_640x960.jpg",
          iid: "1m968lo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968lo&acm=3.ms.1_4_1m968lo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968lo&acm=3.ms.1_4_1m968lo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968lo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "雪地靴男2018冬季新款保暖加绒加厚靴子男士懒人套筒黑色面包鞋东北棉鞋个性时尚英伦风男鞋",
          type: 2,
          orgPrice: 112,
          props: [
            "加厚靴子",
            "加绒",
            "英伦风",
            "懒人",
            "时尚",
            "新款",
            "黑色",
            "个性",
            "冬季",
            "男士"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 112,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.73",
            descDsr: "4.72",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.84",
            serviceDsr: "4.79"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968lo&acm=3.ms.1_4_1m968lo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "韩鞋士"
        },
        {
          tradeItemId: "1k1g4aq",
          img:
            "https://s11.mogucdn.com/mlcdn/17f85e/171116_42fe5k7bbbcdg5754djheaie4bh6c_640x960.jpg",
          iid: "1k1g4aq",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_39&cparam=MTUzODE5MTY2MF8xYXR5cXY4XzI3ZTk3YzM3OTMyMjQ1ZTZmN2I2N2M2NzdlZGZhNTZlXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxNjk1Nl85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_39&cparam=MTUzODE5MTY2MF8xYXR5cXY4XzI3ZTk3YzM3OTMyMjQ1ZTZmN2I2N2M2NzdlZGZhNTZlXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxNjk1Nl85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525 2 138 1232 82 172",
          acm:
            "3.ms.1_1_1k1g4aq.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_39",
          title: "E杯神器超聚拢调整型侧收无痕无钢圈小胸厚少女内衣文胸女套装薄",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xYXR5cXY4XzI3ZTk3YzM3OTMyMjQ1ZTZmN2I2N2M2NzdlZGZhNTZlXzE2XzhfMTk0NjcxMjM3XzQ0ODlfMTkxNjk1Nl85XzBfNTQwXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 57.1,
          props: ["内衣文胸", "调整型", "聚拢", "无钢圈", "无痕"],
          hasSimilarity: true,
          sale: "2678",
          cfav: "9841",
          price: 34.83,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1k1g4aq&acm=3.ms.1_1_1k1g4aq.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_194671237_1916956_9_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_0_1916956_96_0-dit_39&itemType=7",
          shopSeller: "wyfan888"
        },
        {
          tradeItemId: "1lpdys0",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180106_8ge5385h1aig0b935098e2ca4ig6g_640x960.jpg",
          iid: "1lpdys0",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271586_10_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271586_70_0-dit_39&cparam=MTUzODE5MTY2MF8xMWtfZDliZjllYzc1NDM0NTVlNmViZTY0NzcxNjNkOTI5NzhfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271586_10_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271586_70_0-dit_39&cparam=MTUzODE5MTY2MF8xMWtfZDliZjllYzc1NDM0NTVlNmViZTY0NzcxNjNkOTI5NzhfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          itemMarks: "1525 1232",
          acm:
            "3.ms.1_1_1lpdys0.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271586_10_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271586_70_0-dit_39",
          title:
            "新款促销三角杯薄款蕾丝刺绣女内衣套装文胸聚拢无钢圈性感上托收副乳胸罩学生少女高中生无痕奶罩",
          type: 2,
          cparam:
            "MTUzODE5MTY2MF8xMWtfZDliZjllYzc1NDM0NTVlNmViZTY0NzcxNjNkOTI5NzhfMTZfOV8zMjc0OTU4NDZfNGE4Zl8wXzEwXzBfMjYxXzFfMF9ycy0xMDA2MjYwMy5ydC0wLnd0LTI=",
          orgPrice: 42.72,
          props: ["蕾丝刺绣", "无钢圈", "副乳", "无痕", "性感", "薄款", "新款"],
          hasSimilarity: true,
          sale: "4695",
          cfav: "14563",
          price: 29.9,
          shopDsr: {},
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1lpdys0&acm=3.ms.1_1_1lpdys0.84.31296-69000.0Q42Sr50jrNhc.ct_8100-sd_117-swt_84-imt_7-c_2_16_327495846_387271586_10_0-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-c1_10062603_nil_nil_1_387271586_70_0-dit_39&itemType=7",
          shopSeller: "二八佳人品牌内衣"
        },
        {
          tradeItemId: "1m968g4",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_2ki767leeilff5gj30a3afhilebj8_640x960.jpg",
          iid: "1m968g4",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968g4&acm=3.ms.1_4_1m968g4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968g4&acm=3.ms.1_4_1m968g4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968g4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "2018新款男士单肩包牛津布商务休闲斜挎包韩版时尚男包竖款背包潮",
          type: 2,
          orgPrice: 254.8,
          props: ["时尚男包", "竖款", "商务", "牛津布", "新款", "韩版", "男士"],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 178.36,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.60",
            descDsr: "4.70",
            tagDescDsr: "4.73",
            tagQualityDsr: "4.73",
            tagServiceDsr: "4.82",
            serviceDsr: "4.74"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968g4&acm=3.ms.1_4_1m968g4.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "亲亲鱼"
        },
        {
          tradeItemId: "1m968lg",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_08ki3gb0a68862h8gl5628l5did72_800x800.jpg",
          iid: "1m968lg",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968lg&acm=3.ms.1_4_1m968lg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968lg&acm=3.ms.1_4_1m968lg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968lg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title: "小白鞋女秋季2018新款百搭韩版夏季白鞋女鞋厚底板鞋ulzzang原宿",
          type: 2,
          orgPrice: 75,
          props: [
            "小白鞋",
            "厚底",
            "原宿",
            "百搭",
            "秋季",
            "韩版",
            "夏季",
            "新款"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 75,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.74",
            descDsr: "4.76",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.74",
            tagServiceDsr: "4.84",
            serviceDsr: "4.84"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968lg&acm=3.ms.1_4_1m968lg.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "Daisy潮品"
        },
        {
          tradeItemId: "1m964xm",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_61ae075ai4lk7475b1dh65khfca9f_640x960.jpg",
          iid: "1m964xm",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964xm&acm=3.ms.1_4_1m964xm.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m964xm&acm=3.ms.1_4_1m964xm.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m964xm.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "2018韩版秋冬上衣显瘦连帽皮毛一体马甲女新款宽松加绒坎肩无袖外套马夹",
          type: 2,
          orgPrice: 170,
          props: [
            "无袖外套",
            "皮毛",
            "一体",
            "连帽",
            "显瘦",
            "宽松",
            "加绒",
            "韩版",
            "新款"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 170,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.89",
            descDsr: "4.88",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.90"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m964xm&acm=3.ms.1_4_1m964xm.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "小西原创女装"
        },
        {
          tradeItemId: "1m968fw",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_20840adlh3g456ck7ek8ibc71h250_800x1200.jpg",
          iid: "1m968fw",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968fw&acm=3.ms.1_4_1m968fw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968fw&acm=3.ms.1_4_1m968fw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968fw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "小香风名媛气质拼接连衣裙2018秋冬新款韩版气质翻领粗花呢收腰流苏拼接假两件网纱连衣裙",
          type: 2,
          orgPrice: 226,
          props: [
            "拼接连衣裙",
            "收腰",
            "名媛",
            "气质",
            "拼接",
            "小香风",
            "翻领",
            "秋冬新款",
            "流苏",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 158.2,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.81",
            descDsr: "4.80",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.90"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968fw&acm=3.ms.1_4_1m968fw.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "糖果家"
        },
        {
          tradeItemId: "1m968l6",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_6ckch0hdjifg0d9f03ka1ljj5egdb_640x960.jpg",
          iid: "1m968l6",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968l6&acm=3.ms.1_4_1m968l6.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968l6&acm=3.ms.1_4_1m968l6.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "-1",
          acm:
            "3.ms.1_4_1m968l6.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "秋装2018新款韩版纯色简约百搭修身显瘦chic早秋打底针织衫女长袖套头V领上衣",
          type: 2,
          orgPrice: 64.28,
          props: [
            "打底针织衫",
            "套头",
            "修身显瘦",
            "长袖",
            "纯色",
            "百搭",
            "简约",
            "新款",
            "韩版"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 64.28,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.49",
            descDsr: "4.61",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.82"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968l6&acm=3.ms.1_4_1m968l6.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "爱女生衣"
        },
        {
          tradeItemId: "1m968fo",
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/180929_3ha72geb804h73b8a60clblaeedek_640x960.jpg",
          iid: "1m968fo",
          clientUrl:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968fo&acm=3.ms.1_4_1m968fo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          link:
            "//h5.mogujie.com/detail-normal/index.html?itemId=1m968fo&acm=3.ms.1_4_1m968fo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          itemMarks: "1525",
          acm:
            "3.ms.1_4_1m968fo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39",
          title:
            "早秋新款复古呢料格纹连帽连衣裙秋季百搭宽松打底裙修身显瘦减龄学生韩版鱼尾卫衣裙",
          type: 2,
          orgPrice: 146,
          props: [
            "连帽连衣裙",
            "减龄",
            "修身显瘦",
            "格纹",
            "复古",
            "宽松",
            "百搭",
            "新款",
            "韩版",
            "秋季"
          ],
          hasSimilarity: true,
          sale: 0,
          cfav: 0,
          price: 146,
          shopDsr: {
            priceDsr: "5.00",
            tagPriceDsr: "5.00",
            qualityDsr: "4.77",
            descDsr: "4.76",
            tagDescDsr: "4.76",
            tagQualityDsr: "4.75",
            tagServiceDsr: "4.84",
            serviceDsr: "4.83"
          },
          similarityUrl:
            "//m.mogujie.com/wall/relative?pid=8872&iid=1m968fo&acm=3.ms.1_4_1m968fo.84.1239-69000.0Q42Sr50jrNhc.sd_117-swt_84-imt_6-t_0Q42Sr50jrNhc-lc_16-fcid_10062603-dit_39&itemType=6",
          shopSeller: "梦幻如一女装"
        }
      ]
    });
  }
}
