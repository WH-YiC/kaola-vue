<template>
    <div class="home">
        <header>
            <div class="search">
                <p>象印保温杯</p>
            </div>
            <div class="login">
                <a href="#/main/my" v-if="name">
                    <img src="../../assets/images/userimg.png" style="width: 0.24rem;margin: 0 auto;"/>
                </a>
                <a v-else href="#/main/my" class="login-a">登录/注册</a>
            </div>
        </header>
        <kl-banner></kl-banner>
        <img class="home-center-img" src="../../assets/images/home-center-nav.png"/>
        <home-center-nav :data="data.homeNav"></home-center-nav>
        <img class="home-center-img" src="../../assets/images/home1.gif"/>
        <img class="home-center-img" src="../../assets/images/homeimg.png"/>
        <home-center-img :data="data.homeNav2"></home-center-img>
        <div class="home-list">
            <a href="#"><img src="../../assets/images/home-list1-1.png"/></a>
            <a href="#"><img src="../../assets/images/home-list1-2.png"/></a>
            <a href="#"><img src="../../assets/images/home-list1-3.png"/></a>
        </div>
        <div class="home-list">
            <a href="#"><img src="../../assets/images/home-list2-1.png"/></a>
            <a href="#"><img src="../../assets/images/home-list2-2.png"/></a>
            <a href="#"><img src="../../assets/images/home-list2-3.png"/></a>
            <a href="#"><img src="../../assets/images/home-list2-4.png"/></a>
        </div>

        <kl-footer :number="number"></kl-footer>
    </div>
</template>

<script>
    import dataApi from "../../api/dataApi";
    import footer from '../../components/footer';
    import banner from '../../components/home/banner'
    import homeCenterNav from '../../components/home/home-center-nav'
    import homeCenterImg from '../../components/home/home-center-img'
    export default {
        name: "home",
        components: {
            'klBanner':banner,
            homeCenterNav,
            homeCenterImg,
            'kl-footer':footer
        },
        data(){
            return{
                name:localStorage.getItem('token'),
                number:0,
                data:{}
            }
        },
        methods:{
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.home;
            }
        },
        beforeMount() {
            this._initData()
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
        vertical-align: top;
        font-size: 10px;
    }
    .login-a{
        border: 1px solid;
        border-radius: 0.03rem;
    }
    .home-center-img{
        width: 100%;
    }
    .home-list{
        display: flex;
    }
    .home-list>a{
        flex: 1;
    }
    .home-list>img,.home-list img{
        width: 100%;
    }
</style>