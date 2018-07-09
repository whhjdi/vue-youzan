import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transition.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs' 
import mixin from 'js/mixin.js'
import Swiper from 'components/Swiper.vue'

let {id} = qs.parse(location.search.substr(1))
let detailTab = ['商品详情','本店成交']

new Vue({
    el:'#app',
    data:{
        id,
        details: null,
        detailTab,
        tabIndex: 0,
        dealList: null,
        bannerLists: null,
        skuType: 1,
        showSku: false,
        skuNum:1,
        isAddCart: false,
        showAddMsg: false
    },
    created(){
        this.getDetails() 
    },
    methods:{
        getDetails(){
            axios.post(url.detailList,{id})
                .then(res=>{
                    this.details = res.data.data
                    this.bannerLists = []
                    this.details.imgs.forEach(item => {
                        this.bannerLists.push({
                            clickUrl:'',
                            img: item
                        })
                    });
                })
        },
        changeTab(index){
            this.tabIndex = index
            if(index){
                this.getDeals()
            }
        },
        getDeals(){
            axios.post(url.dealList,{id})
                .then(res=>{
                    this.dealList = res.data.data.lists
                })
        },
        chooseSku(type){
            this.skuType = type
            this.showSku = true
        },
        changeSkuNum(num){
            if(num<0&&this.skuNum===1){
                return
            }else{
                this.skuNum += num
            }
        },
        addCart(){
            axios.post(url.addCart,{
                id,
                number: this.skuNum
            }).then(res=>{
                console.log(res.data)
                if(res.data.status===200){
                    this.showSku = false
                    this.isAddCart = true
                    this.showAddMsg = true
                    setTimeout(()=>{
                        this.showAddMsg = false
                    },1000)
                }
            })
        }
    },
    mixins: [mixin],
    components:{
        Swiper
    },
    watch:{
        showSku(val,oldval){
            document.body.style.overflow = val ? 'hidden' : 'auto'
            document.querySelector('html').style.overflow = val ? 'hidden' : 'auto'
            document.body.style.height = val ? '100%':'auto'
            document.querySelector('html').style.height= val ? '100%':'auto'
        }
    }
})