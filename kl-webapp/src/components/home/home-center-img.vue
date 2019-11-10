<template>
    <div class="home-center-img">
        <a :key="index" href="#" v-for="(h2,index) in data" class="home-center-img-a"><img :src="h2" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "home-center-nav",
        props:["data"],
        // data () {
        //     return {
        //         footerNav:{
        //             homeNav2:['./images/home2-1.png','./images/home2-2.png','./images/home2-3.png']
        //         }
        //     }
        // }
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