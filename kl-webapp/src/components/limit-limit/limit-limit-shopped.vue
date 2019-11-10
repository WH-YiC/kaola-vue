<template>
    <div class="shopped">
        <div :key="index" v-for="(w,index) in data">
            <img :src="w.img" />
            <div>
                <h3><span v-if="w.comm">{{w.comm}}</span> {{w.name}}</h3>
                <p class="title">{{w.title}}</p>
                <p class="com">{{w.com}}</p>
                <div class="precent"><p :style="w.style">{{w.num}}</p></div>
                <p class="price">￥<span>{{w.price}}</span> <del>{{w.delprice}}</del></p>
                <div class="btn">
                    去抢购>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "limit-limit-shopped",
        props:["data"]
    }
</script>

<style scoped>
    .shopped{
        width: 3.51rem;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.1rem;
    }
    .shopped>div{
        padding: 0.09rem;
        display: flex;
    }
    .shopped>div>img{
        width: 1.11rem;
        height: 1.11rem;
    }
    .shopped>div>div{
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
        background-color: #fcc;
        border-radius: 0.12rem;
        margin-bottom: 0.09rem;
    }
    .precent>p{
        line-height: 0.13rem;
        padding-left: 0.05rem;
        white-space: nowrap;
        color: #ffffff;
        font-weight: 600;
        background-color: red;
        border-radius: 0.12rem;
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
        background-image: linear-gradient(to right, rgb(255, 1, 1), rgb(255, 49, 100));
        border-radius: 0.12rem;
        text-align: center;
        color: white;
    }
</style>