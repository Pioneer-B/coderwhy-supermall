import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:7888/api/hy66",
    timeout: 10000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  return instance(config);
}

export function mockRequest(config) {
  const instance = axios.create({
    baseURL: "https://httpbin.org",
    timeout: 10000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      //   console.log(555, res);
      res.data.data = JSON.parse(res.data.data);
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  return instance(config);
}
