# youzan

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##  学习笔记
+ vue实例的挂载点不能是body或html
+ 单vue组件,template是必须的,而且只能有一个根节点
+ axios方案:
    1. Vue.prototype.$http= axios
    将axios模块绑定到全局的Vue原型上面。
    2. 单独写一个utils工具类，
    在这个工具类中
    ```javascript
    import axios from 'axios'
    import qs from 'qs'
    ```
    导入 axios模块和qs模块（为了axios 进行post请求时对参数进行格式化）
    然后在这里
    ```javascript
    export funciton(){}
    ```
    定义导出的方法，在组件中如果要使用的时候
    直接import 进去就可以了
+ 