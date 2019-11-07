<template>
    <div>
        <h1>{{data.name}}</h1>
        <div class="volume-list">
            <div :key="index" v-for="(s,index) in data.products">
                <div class="volume-list-img">
                    <img :src="s.img" />
                    <span>{{s.title}}</span>
                </div>
                <div class="volume-list-name">
                    <p>{{s.name}}</p>
                </div>
                <div class="volume-list-price">
                    <p>￥{{s.price}}<del>{{s.delprice}}</del></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "volume-free",
        props:["data"]
    }
</script>

<style scoped>
    h1{
        height: 0.5rem;
        line-height: 0.5rem;
        color: white;
        font-size: 0.19rem;
        font-weight: bold;
        text-align: center;
        background-image: url("../assets/images/volume-bg.png");
    }
    .volume-list{
        display: flex;
        padding: 0.1rem 0;
        overflow: auto;
    }
    .volume-list>div{
        background-color: white;
        margin-left: 0.09rem;
    }
    img{
        width: 0.99rem;
        height: 0.99rem;
    }
    .volume-list-img{
        position: relative;
    }
    .volume-list-img span{
        background-color: rgb(255, 30, 50);
        padding: 0 0.04rem;
        border: 0.5px solid #FF0000;
        border-radius: 0 0.15rem 0.15rem 0;
        color: #fff;
        white-space: nowrap;
        position: absolute;
        bottom: 0.08rem;
        left: 0;
    }
    .volume-list-name{
        margin-top: 0.08rem;
        margin-bottom: 0.06rem;
        padding: 0 0.08rem;
    }
    .volume-list-price{
        position: relative;
        padding-bottom: 0.1rem;
        padding: 0 0.08rem 0.08rem;
        font-size: 0.16rem;
    }
    .volume-list-price p{
        font-weight: bold;
        color: #ff0000;
        font-size: 0.16rem;
    }
    .volume-list-price del{
        color: #999999;
        font-size: 0.12rem;
    }
</style>