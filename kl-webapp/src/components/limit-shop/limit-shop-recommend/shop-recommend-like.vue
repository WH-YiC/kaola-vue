<template>
    <div class="like">
        <div :key="index" v-for="(l,index) in data">
            <img :src="l.img" />
            <p class="name">{{l.name}}</p>
            <p class="title">{{l.title}} <img src="../../../assets/images/arrows.png" /></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shop-recommend-like",
        props:["data"]
    }
</script>

<style scoped>
    .like{
        margin-right: 0.173333rem;
        display: flex;
        overflow: auto;
        margin-bottom: 0.025rem;
    ;
    }
    .like>div{
        width: 1.06rem;
        margin-right: 0.1rem;
        border-radius: 0.2rem;
    }
    .like>div>img{
        width: 1.06rem;
        background-color: rgba(0,0,0,.02);
    }
    .name{
        color: #1e1e1e;
        font-weight: 700;
        text-align: center;
        padding-top: 0.07rem;
        background-color: white;
    }
    .title{
        color: #FF1E32;
        font-weight: 700;
        text-align: center;
        padding-bottom: 0.06rem;
        background-color: white;
    }
    .title>img{
        width: 0.04rem;
        display: inline-block;
    }
</style>