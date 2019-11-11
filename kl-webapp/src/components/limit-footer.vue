<template>
    <div class="limit-footer">
        <a :href="t.lurl" :key="index" v-for="(t,index) in data">
            <img :src="current===index?t.activePic:t.normalPic">
        </a>
    </div>
</template>

<script>
    import dataApi from "../api/dataApi";
    export default {
        name: "limit-footer",
        props:["current"],
        data(){
            return{
                data:{},
                // footerNav:{
                //     limitTabs:[
                //         {
                //             name:"限时购",//limit-limit
                //             normalPic:'./images/limit-limit.png',
                //             activePic:'./images/limit-limit-active.png',
                //             lurl:'#/main/limit/limited'
                //         },
                //         {
                //             name:"品牌闪购",//limit-shop
                //             normalPic:'./images/limit-shop.png',
                //             activePic:'./images/limit-shop-active.png',
                //             lurl:'#/main/limit/limitShop'
                //         },
                //         {
                //             name:"超值量贩",//limit-volume
                //             normalPic:'./images/limit-volume.png',
                //             activePic:'./images/limit-volume-active.png',
                //             lurl:'#/main/limit/limitVolume'
                //         },
                //         {
                //             name:"9.9秒杀",//limit-seckil
                //             normalPic:'./images/limit-seckil.png',
                //             activePic:'./images/limit-seckil-active.png',
                //             lurl:'#/main/limit/limitSeckil'
                //         }
                //     ]
                // },
            }
        },
        methods:{
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.limitfooter;
            }
        },
        beforeMount() {
            this._initData()
        }
    }
</script>

<style scoped>
    .limit-footer{
        width: 100%;
        display: flex;
        background-color: white;
        border-top: 0.5px solid rgb(221, 221, 221);
        position: fixed;
        bottom: 0;
        z-index:10;
    }
    .limit-footer>a{
        flex: 1;
    }
    .limit-footer img{
        width: 0.75rem;
        margin: 0 auto;
    }
</style>