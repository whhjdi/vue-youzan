import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot'

new Vue({
    el:'#app',
    data:{
        topLists: {},
        topIndex: 0,
        subData: {},
        rankData: {}
    },
    created(){
        this.getTopList()
        this.getSubList(0)
    },
    methods:{
        getTopList(){
            axios.post(url.topList)
                .then(res=>{
                    this.topLists = res.data.lists
                })
        },
        getSubList(index,id){
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subList,{id})
                    .then(res=>{
                        this.subData = res.data.data
                    })
            }
        },
        getRank(){
            axios.post(url.rank)
                    .then(res=>{
                        this.rankData = res.data.data
                    })
            }
    },
    filters:{
        formatPrice(x) {
            var f_x = parseFloat(x);
            if (isNaN(f_x)) {
                alert('function:changeTwoDecimal->parameter error');
                return false;
            }
            var f_x = Math.round(x * 100) / 100;
            var s_x = f_x.toString();
            var pos_decimal = s_x.indexOf('.');
            if (pos_decimal < 0) {
                pos_decimal = s_x.length;
                s_x += '.';
            }
            while (s_x.length <= pos_decimal + 2) {
                s_x += '0';
            }
            return s_x;
        }
    },
    components:{
        Foot,
    }
})
