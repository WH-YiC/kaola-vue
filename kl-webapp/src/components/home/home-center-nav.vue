<template>
    <div class="home-center-nav-div">
        <a :key="index" href="#" v-for="(h,index) in data" class="home-center-nav-a"><img :src="h" /></a>
    </div>
</template>

<script>
    export default {
        name: "home-center-nav",
        props:["data"],
        data () {
            return {
                footerNav:{
                    homeNav:['./images/home-center-nav1.png','./images/home-center-nav2.png','./images/home-center-nav3.png','./images/home-center-nav4.png','./images/home-center-nav5.png','./images/home-center-nav6.png','./images/home-center-nav7.png','./images/home-center-nav8.png','./images/home-center-nav9.png','./images/home-center-nav10.png']
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