import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs' 
import mixin from 'js/mixin.js'
let {keyword,id} = qs.parse(location.search.substr(1))
import Velocity from 'velocity-animate'

new Vue({
    el:'.container',
    data:{
        searchList: {},
        keyword,
        isShow: false,
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
            axios.post(url.searchList,{
                keyword,
                id,
            }).then(res=>{
                this.searchList = res.data.lists
            })
        },
        move(){
            if(document.scrollingElement.scrollTop > 100){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        toTop(){
            Velocity(document.scrollingElement, 'scroll',{duration:1000})
            this.isShow = false
        }
    },
    mixins: [mixin]
})