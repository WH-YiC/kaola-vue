<template>
    <div class="footer">
        <a :href="tab.url" :key="index" v-for="(tab,index) in data">
            <img :src="number===index?tab.activePic:tab.normalPic"/>
        </a>
    </div>
</template>

<script>
    import dataApi from "../api/dataApi";
    export default {
        name: "kfooter",
        props:["number"],
        data(){
            return{
                // footerNav:{
                //     tabs:[
                //         {
                //             name:"首页",//home
                //             normalPic:'./images/home.png',
                //             activePic:'./images/home-active.png',
                //             url:'#/'
                //         },
                //         {
                //             name:"分类",//sort
                //             normalPic:'./images/sort.png',
                //             activePic:'./images/sort-active.png',
                //             url:'#/main/sort'
                //         },
                //         {
                //             name:"限时购",//limit
                //             normalPic:'./images/limit.png',
                //             activePic:'./images/limit.png',
                //             url:'#/main/limit/limited'
                //         },
                //         {
                //             name:"购物车",//cart
                //             normalPic:'./images/cart.png',
                //             activePic:'./images/cart-active.png',
                //             url:'#/main/cart'
                //         },
                //         {
                //             name:"我的考拉",//my
                //             normalPic:'./images/my.png',
                //             activePic:'./images/my-active.png',
                //             url:'#/main/my'
                //         }
                //     ]
                // },
                data:[]
            }
        },
        methods:{
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.footerNav;
            }
        },
        beforeMount() {
            this._initData()
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