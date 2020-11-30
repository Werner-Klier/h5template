#一个封装好的基于vue2.x+vant+promise的前端通用框架，下载即用

## 安装依赖
```
yarn install
```

### 运行服务
```
yarn serve
```

### 打包
```
yarn build
```
### 测试服包
```
yarn test
```

### 请求loading的使用,不加{loading: true}默认为false
```
getStateInfo: (params = {}) => http.get("/userinfo/get", params,{loading: true}),
```

### 设计稿大小
```
在postcss.config.js中设置你的设计稿大小和rem比例
```

### 接口调用
```
this.$api.接口名称.then().catch()
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
