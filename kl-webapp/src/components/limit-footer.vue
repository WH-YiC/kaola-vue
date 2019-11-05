<template>
    <div class="limit-footer">
        <a :href="t.lurl" :key="index" v-for="(t,index) in footerNav.limitTabs" @click="handleClick(index)">
            <img :src="lcurrent===index?t.activePic:t.normalPic">
        </a>
    </div>
</template>

<script>
    export default {
        name: "limit-footer",
        data(){
            return{
                footerNav:{
                    limitTabs:[
                        {
                            name:"限时购",//limit-limit
                            normalPic:require('../assets/images/limit-limit.png'),
                            activePic:require('../assets/images/limit-limit-active.png'),
                            lurl:'#/main/limit/limited'
                        },
                        {
                            name:"品牌闪购",//limit-shop
                            normalPic:require('../assets/images/limit-shop.png'),
                            activePic:require('../assets/images/limit-shop-active.png'),
                            lurl:'#/main/limit/limitShop'
                        },
                        {
                            name:"超值量贩",//limit-volume
                            normalPic:require('../assets/images/limit-volume.png'),
                            activePic:require('../assets/images/limit-volume-active.png'),
                            lurl:'#/main/limit/limitVolume'
                        },
                        {
                            name:"9.9秒杀",//limit-seckil
                            normalPic:require('../assets/images/limit-seckil.png'),
                            activePic:require('../assets/images/limit-seckil-active.png'),
                            lurl:'#/main/limit/limitSeckil'
                        }
                    ]
                },
                lcurrent:0
            }
        },
        methods:{
            handleClick(index){
                this.lcurrent=index;
            }
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