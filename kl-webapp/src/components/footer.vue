<template>
    <div class="footer">
        <a :href="tab.url" :key="index" v-for="(tab,index) in footerNav.tabs" @click="handleClick(index)">
            <img :src="current===index?tab.activePic:tab.normalPic">
        </a>
    </div>
</template>

<script>
    export default {
        name: "kfooter",
        data(){
            return{
                footerNav:{
                    tabs:[
                        {
                            name:"首页",//home
                            normalPic:require('../assets/images/home.png'),
                            activePic:require('../assets/images/home-active.png'),
                            url:'#/'
                        },
                        {
                            name:"分类",//sort
                            normalPic:require('../assets/images/sort.png'),
                            activePic:require('../assets/images/sort-active.png'),
                            url:'#/main/sort/sortHome'
                        },
                        {
                            name:"限时购",//limit
                            normalPic:require('../assets/images/limit.png'),
                            activePic:require('../assets/images/limit.png'),
                            url:'#/main/limit/limited'
                        },
                        {
                            name:"购物车",//cart
                            normalPic:require('../assets/images/cart.png'),
                            activePic:require('../assets/images/cart-active.png'),
                            url:'#/main/cart'
                        },
                        {
                            name:"我的考拉",//my
                            normalPic:require('../assets/images/my.png'),
                            activePic:require('../assets/images/my-active.png'),
                            url:'#/main/my'
                        }
                    ]
                },
                current:0
            }
        },
        methods:{
            handleClick(index){
                this.current=index;
            }
        }
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: white;
        border-top: 0.005rem solid rgb(221, 221, 221);
    }
    .footer>a{
        flex: 1;
    }
    .footer img{
        width: 0.48rem;
        margin: 0 auto;
    }
</style>