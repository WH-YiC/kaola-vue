<template>
    <div>
        <ul>
            <li :key="index" v-for="(s,index) in footerNav.sortNav" @click="handleclick(index)">
                <a :class="current===index?'click':''" :href="s.url">
                    {{s.name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sort-nav",
        data(){
            return{
                footerNav:{
                    sortNav:[
                        {
                            name:"美容彩妆",
                            url:'#/'
                        },
                        {
                            name:"奶粉/纸尿裤",
                            url:'#'
                        },
                        {
                            name:"母婴专区",
                            url:'#'
                        },
                        {
                            name:"营养保健",
                            url:'#'
                        },
                        {
                            name:"数码家电",
                            url:'#'
                        },
                        {
                            name:"个人洗护",
                            url:'#'
                        },
                        {
                            name:"服饰鞋靴",
                            url:'#'
                        },
                        {
                            name:"运动户外",
                            url:'#'
                        },
                        {
                            name:"手表配饰",
                            url:'#'
                        },
                        {
                            name:"轻奢",
                            url:'#'
                        },
                        {
                            name:"家居生活",
                            url:'#'
                        },
                        {
                            name:"环球美食",
                            url:'#'
                        },
                        {
                            name:"全球工厂店",
                            url:'#'
                        },
                        {
                            name:"海外旗舰",
                            url:'#'
                        },
                        {
                            name:"网易严选",
                            url:'#'
                        },
                        {
                            name:"海外商超",
                            url:'#'
                        },
                        {
                            name:"生鲜",
                            url:'#'
                        },
                        {
                            name:"充值中心",
                            url:'#'
                        },
                        {
                            name:"宠物生活",
                            url:'#'
                        }
                    ]
                },
                current:0
            }
        },
        methods:{
            handleclick(index){
                this.current=index;
            }
        }
    }
</script>

<style scoped>
    ul{
        width: 1rem;
        text-align: center;
    }
    li{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.14rem;
    }
    .click{
        /*color: red;*/
        background-image: -webkit-gradient(linear,right top,left top,from(red),to(#ff3264));
        background-image: -webkit-linear-gradient(right,red,#ff3264);
        background-image: linear-gradient(-90deg,red,#ff3264);
        border-radius: 25px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        padding: 2.5px 7px;
    }
</style>