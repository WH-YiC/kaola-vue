<template>
    <div class="limit-footer">
        <a :href="url" :key="index" v-for="(t,index) in footerNav.limitTabs" @click="handleClick(index)">
            <img :src="current===index?t.activePic:t.normalPic">
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
                            normalPic:require('../../../assets/images/limit-limit.png'),
                            activePic:require('../../../assets/images/limit-limit-active.png'),
                            url:'#/limited'
                        },
                        {
                            name:"品牌闪购",//limit-shop
                            normalPic:require('../../../assets/images/limit-shop.png'),
                            activePic:require('../../../assets/images/limit-shop-active.png'),
                            url:'#/limitShop'
                        },
                        {
                            name:"超值量贩",//limit-volume
                            normalPic:require('../../../assets/images/limit-volume.png'),
                            activePic:require('../../../assets/images/limit-volume-active.png'),
                            url:'#/limitVolume'
                        },
                        {
                            name:"9.9秒杀",//limit-seckil
                            normalPic:require('../../../assets/images/limit-seckil.png'),
                            activePic:require('../../../assets/images/limit-seckil-active.png'),
                            url:'#/limitSeckil'
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
.limit-footer{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
}
.limit-footer>a{
    flex: 1;
    text-align: center;
}
</style>