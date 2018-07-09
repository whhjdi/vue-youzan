let url = {
  'hotLists': '/index/hotLists',
  'banner': '/index/banner',
  'topList': '/category/topList',
  'subList': '/category/subList',
  'rank': '/category/rank',
  'searchList': '/search/list',
  'dealList':'/goods/deal',
  'detailList':'/goods/details',
  'evaliuationList':'/goods/evaluation',
  'addCart':'/cart/add'
}

//开发环境和打包上线的切换
let host = 'http://rap2api.taobao.org/app/mock/7058'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]

  }
}

export default url
