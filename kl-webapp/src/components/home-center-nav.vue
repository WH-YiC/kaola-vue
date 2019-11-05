<template>
    <div class="home-center-nav-div">
        <a :key="index" href="#" v-for="(h,index) in footerNav.homeNav" class="home-center-nav-a"><img :src="h" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "home-center-nav",
        data () {
            return {
                footerNav:{
                    homeNav:[require('../assets/images/home-center-nav1.png'),require('../assets/images/home-center-nav2.png'),require('../assets/images/home-center-nav3.png'),require('../assets/images/home-center-nav4.png'),require('../assets/images/home-center-nav5.png'),require('../assets/images/home-center-nav6.png'),require('../assets/images/home-center-nav7.png'),require('../assets/images/home-center-nav8.png'),require('../assets/images/home-center-nav9.png'),require('../assets/images/home-center-nav10.png')]
                }
            }
        }
    }
</script>

<style scoped>
    .home-center-nav-div{
        display: flex;
        flex-wrap: wrap;
    }
    .home-center-nav-a{
        width: 0.75rem;
    }
    .home-center-nav-a img{
    display: block;
    width: 100%;
}
</style>