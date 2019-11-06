<template>
    <div>
        <header>
            <p>限时购—9块9秒杀</p>
            <div class="home-login">
                <a class="home" href="#/"><img src="../../../assets/images/homeicon.png"/>
                </a>
                <a class="login" href="#/main/my">登录</a>
            </div>
        </header>
        <main>
            <div>
                <h1>今日必抢</h1>
                <div class="day-shopping">
                    <div>
                        <img src="https://pop.nosdn.127.net/78e7949c-ded2-4c21-af48-8fef64a24344?imageView&thumbnail=260x260&quality=80&type=webp" alt="">
                    </div>
                    <div class="day-shopping-list">
                        <h2>超韧湿水不易破</h2>
                        <div>
                            <p>【限时特卖|27卷整箱维达经典卷筒纸】维达蓝色经典卫卷4层140克×27卷</p>
                        </div>
                        <p class="limitshopping">限时购</p>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "limit-seckil"
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
    .home img{
        margin-top: -0.05rem;
        width: 0.19rem;
        height: 0.22rem;
    }
    .login{
        margin-left: 10px;
        font-size: 0.10rem;
        margin-top: 1px;
        width: 0.36rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        color: #e31436;
        border: 1px solid #e31436;
        border-radius: 3px;
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
    .day-shopping{
        display: flex;
        width: 3.55rem;
        height: 1.3rem;
        margin: 0 auto;
        background-color: white;
    }
    .day-shopping img{
        width: 1.3rem;
        height: 1.3rem;
    }
    .day-shopping-list{
        width: 2.05rem;
        margin-left: 0.1rem;
    }
    .day-shopping-list h2{
        margin-top: 0.08rem;
        font-size: 0.15rem;
        font-weight: bold;
    }
    .day-shopping-list>div{
        margin-top: 0.07rem;
        margin-bottom: 0.05rem;
    }
    .day-shopping-list>div>p{
        font-size: 0.14rem;
    }
</style>