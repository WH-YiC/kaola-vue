<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div :key="index" class="swiper-slide" v-for="(b,index) in footerNav.banner" :style="b.banner"><img :src="b"/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "banner",
        data () {
            return {
                footerNav:{
                    banner:[require('../assets/images/1.png'),require('../assets/images/2.png'),require('../assets/images/3.png'),require('../assets/images/4.png'),require('../assets/images/5.png'),require('../assets/images/6.png'),require('../assets/images/7.png'),require('../assets/images/8.png'),require('../assets/images/9.png')]
                }
            }
        },
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    type:'fraction'
                },
                autoplay:true
            })
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        margin: 0 auto;
        margin-top: 0.45rem;
    }
    .swiper-pagination{
        padding-left: 0.2rem;
        text-align: left;
        color: white;
    }
    .swiper-container img{
        width: 100%;
    }
</style>