<template>
    <div class="home-center-img">
        <a :key="index" href="#" v-for="(h2,index) in footerNav.homeNav2" class="home-center-img-a"><img :src="h2" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "home-center-nav",
        data () {
            return {
                footerNav:{
                    homeNav2:[require('../assets/images/home2-1.png'),require('../assets/images/home2-2.png'),require('../assets/images/home2-3.png')]
                }
            }
        }
    }
</script>

<style scoped>
    .home-center-img{
        display: flex;
        flex-wrap: wrap;
    }
    .home-center-img-a{
        flex: 1;
    }
    .home-center-img-a img{
    display: block;
    width: 100%;
}
</style>