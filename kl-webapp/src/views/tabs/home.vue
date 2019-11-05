<template>
    <div class="home">
        <header>
            <div class="search">
                <p>象印保温杯</p></div>
            <div class="login"><a href="#/main/my">登录/注册</a></div>
        </header>
        <kl-banner></kl-banner>
        <img class="home-center-img" src="../../assets/images/home-center-nav.png"/>
        <home-center-nav></home-center-nav>
        <img class="home-center-img" src="../../assets/images/home1.gif" alt="">
        <home-center-img></home-center-img>
    </div>
</template>

<script>
    import banner from '../../components/banner'
    import homeCenterNav from '../../components/home-center-nav'
    import homeCenterImg from '../../components/home-center-img'
    export default {
        name: "home",
        components: {
            'klBanner':banner,
            homeCenterNav,
            homeCenterImg
        }
    }
</script>

<style scoped>
    header{
        /*height: 0.45rem;*/
        display: flex;
        padding: 0.08rem 0;
        background-color: white;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .search{
        width: 2.68rem;
        margin-left: 0.10rem;
        line-height: 0.27rem;
        height: 0.30rem;
        color: #727273;
        cursor: text;
        background-color: #fff;
        border: 0.02rem solid #f00;
        border-radius: 0.30rem;
    }
    .search p{
        padding-left: 0.3rem;
        font-size: 0.1rem;
    }
    .login{
        width: 0.97rem;
        text-align: center;
    }
    .login>a{
        display: inline-block;
        margin-top: 1px;
        line-height: 0.2rem;
        padding: 0.04rem;
        text-align: center;
        color: #e31436;
        border: 1px solid;
        border-radius: 0.03rem;
        vertical-align: top;
        font-size: 10px;
    }
    .home-center-img{
        width: 100%;
    }
</style>