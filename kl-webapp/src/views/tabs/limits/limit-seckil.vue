<template>
    <div>
        <header>
            <p>限时购—9块9秒杀</p>
            <div class="home-login">
                <a class="home" href="#/">
                    <img src="../../../assets/images/homeicon.png"/>
                </a>
                <a class="login" href="#/main/my">
                    <img v-if="name" src="../../../assets/images/userimg.png"/>
                    <p v-else>登录</p>
                </a>
            </div>
        </header>
        <main>
            <div>
                <h1>今日必抢</h1>
                <day-shopping :data="data.dayshopping"></day-shopping>
            </div>
            <div>
                <h1>9.9秒杀</h1>
                <div class="seckil wid">
                    <div class="seckil-time">
                        <div class="seckil-time-today">
                            <p>11-04 00:00</p>
                            <h3>抢购中</h3>
                        </div>
                        <div>
                            <p>11-05 00:00</p>
                            <h3>未开始</h3>
                        </div>
                    </div>
                    <p>好货疯抢中</p>
                    <div class="seckil-list">
                        <seckil-list :data="data.seckilList"></seckil-list>
                    </div>
                </div>
            </div>
            <div class="seckil-coupon">
                <img src="https://haitao.nosdn1.127.net/1edccf8a-df6b-48c0-a06e-5dc64e2f617b--t_1563782500477_960_177.png?imageView&thumbnail=750x138&quality=80"/>
            </div>
        </main>
        <limit-footer :current="number"></limit-footer>
    </div>
</template>

<script>
    import dataApi from "../../../api/dataApi";
    import dayShopping from '../../../components/limit-seckil/day-shopping'
    import seckilList from '../../../components/limit-seckil/seckil-list'
    import limitFooter from '../../../components/limit-footer'
    export default {
        name: "limit-seckil",
        components:{
            dayShopping,
            seckilList,
            limitFooter
        },
        data(){
            return{
                num:0,
                number:3,
                name:localStorage.getItem('token'),
                data:{}
            }
        },
        methods:{
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.limit.limitSeckil;
            }
        },
        beforeMount() {
            this._initData()
        }
    }
</script>

<style scoped>
    header p{
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        font-size: 0.18rem;
    }
    .home-login{
        display: flex;
        position: absolute;
        top: 0.1rem;
        right: 0.15rem;
    }
    .home-login img{
        width: 0.24rem;
        margin-right: 0.10rem;
    }
    .login{
        margin-top: 1px;
        width: 0.36rem;
        height: 0.2rem;
        text-align: center;
        border-radius: 3px;
    }
    .login>p{
        width: 0.36rem;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.10rem;
        color: #e31436;
        border: 1px solid #e31436;
    }
    main{
        background-color: #FF2852;
    }
    h1{
        height: 0.5rem;
        line-height: 0.5rem;
        color: white;
        font-size: 0.19rem;
        font-weight: bold;
        text-align: center;
        background-image: url("../../../assets/images/seckil-bg.png");
    }
    .wid{
        width: 3.55rem;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.05rem;
    }
    .seckil-time{
        display: flex;
        padding: 0.06rem 0;
        color: #666666;
    }
    .seckil-time>div{
        flex: 1;
        text-align: center;
    }
    .seckil-time-today{
        border-right: 1px solid rgb(230,230,230);
        color: #e30202;
    }
    .seckil-time-today h3{
        color: white;
        background-color: rgb(227, 2, 2);
        width: 0.55rem;
        height: 0.18rem;
        line-height: 0.18rem;
        border-radius: 0.24rem;
        margin: 0 auto;
    }
    .seckil>p{
        width: 3.45rem;
        height: 0.25rem;
        line-height: 0.25rem;
        padding-left: 0.12rem;
        border: 0.005rem solid #E6E6E6;
        border-left-width: 0;
        border-radius: 0 0.36rem 0.36rem 0;
        background-color: #fafafa;
    }
    .seckil-list{
        overflow: auto;
        padding-top: 0.1rem;
        padding-left: 0.06rem;
    }
    /*.seckil-list::-webkit-scrollbar {display:none}*/
    main>div>img{
        width: 100%;
        margin-top: 0.08rem;
    }
</style>