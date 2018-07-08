import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import Foot from 'components/Foot'
import Swiper from 'components/Swiper'


let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false,
    bannerLists: null,
  },
  methods:{
    getLists(){
      if(this.allLoaded) return
      this.loading = true
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res=>{
        let curLists = res.data.lists
        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }
        if (this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          // 第一次请求
          this.lists = curLists
        }
        this.pageNum ++
        this.loading = false
      })
    },
    getBanner(){
      axios.get(url.banner)
        .then(res=>{
          this.bannerLists = res.data.lists
        })
    }
  },
  created(){
    this.getLists()
    this.getBanner()
  },
  components:{
    Foot,
    Swiper,
  }
})
