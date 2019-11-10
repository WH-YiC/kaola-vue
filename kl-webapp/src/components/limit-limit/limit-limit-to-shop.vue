<template>
    <div class="shop">
        <div class="head">
            <p>即将开抢 先下单先得</p>
        </div>
        <div class="list" :key="index" v-for="(w,index) in data">
            <img :src="w.img" />
            <div>
                <h3><span v-if="w.comm">{{w.comm}}</span> {{w.name}}</h3>
                <p class="title">{{w.title}}</p>
                <p class="com">{{w.com}}</p>
                <div class="precent">限量{{w.num}}件</div>
                <p class="price">￥<span>{{w.price}}</span> <del>{{w.delprice}}</del></p>
                <div class="btn">
                    提醒我
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "limit-limit-to-shop",
        props:["data"]
    }
</script>

<style scoped>
    .shop{
        width: 3.51rem;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.05rem;
    }
    .head{
        height: 0.36rem;
        line-height: 0.36rem;
        color: #999999;
    }
    .head>p{
        margin-left: 0.02rem;
        margin-right: 0.02rem;
        padding-left: 0.1rem;
        border-bottom: 1px solid #FFADB8;
    }
    .list{
        padding: 0.09rem;
        display: flex;
    }
    .list>img{
        width: 1.11rem;
        height: 1.11rem;
    }
    .list>div{
        width: 2.13rem;
        margin-left: 0.09rem;
        position: relative;
    }
    h3{
        font-size: 0.13rem;
        font-weight: 600;
    }
    h3>span{
        font-size: 0.12rem;
        font-weight: initial;
        color: #ffffff;
        padding: 0 0.06rem;
        margin-right: 0.06rem;
        background-image: linear-gradient(90deg,#ec63e9,#633bdf);
        border-radius: 0.12rem;
    }
    .title{
        color: #666666;
        margin-bottom: 0.065rem;
    }
    .com{
        height: 0.15rem;
        margin-bottom: 0.06rem;
        color: #ff0000;
    }
    .precent{
        width: 1rem;
        height: 0.13rem;
        line-height: 0.13rem;
        padding-left: 0.05rem;
        color: #279cff;
        background-color: #eaf7ff;
        border-radius: 0.12rem;
        margin-bottom: 0.09rem;
        /*white-space: nowrap;*/
    }
    .price{
        color: #ff1e34;
    }
    .price>span{
        font-size: 0.18rem;
        font-weight: 600;
    }
    del{
        color: #999999;
    }
    .btn{
        width: 0.7rem;
        height: 0.24rem;
        line-height: 0.24rem;
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 0.13rem;
        background-color: #279cff;
        border-radius: 0.12rem;
        text-align: center;
        color: white;
    }
</style>