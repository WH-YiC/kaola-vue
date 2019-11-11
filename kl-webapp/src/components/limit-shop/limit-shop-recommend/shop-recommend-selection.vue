<template>
    <div class="selection">
        <div :style="s.bgimg" :key="index" v-for="(s,index) in shopRecommend">
            <div class="information">
                <img :src="s.logo"/>
                <span>{{s.name}}</span>
                <h2>{{s.title}} <img src="../../../assets/images/selection.png" /></h2>
                <p>仅剩<span>{{s.time}}</span>小时</p>
            </div>
            <recommend-selection-list :data="s.product"></recommend-selection-list>
        </div>
    </div>
</template>

<script>
    import recommendSelectionList from './recommend-selection-list'
    export default {
        name: "shop-recommend-selection",
        props:["shopRecommend"],
        components:{
            recommendSelectionList
        }
    }
</script>

<style scoped>
    .selection{
        width: 3.55rem;
        margin: 0 auto;
    }
    .selection>div{
        background-size: 100%;
        padding-top: 0.12rem;
        border-radius: 0.05rem;
    }
    .information{
        width: 1.85rem;
        height: 0.99rem;
        margin: 0 1.6rem 0.12rem 0.1rem;
        border-radius: 0.04rem;
        background-color: hsla(0,0%,100%,.88);
        box-shadow: 0 0.04rem 0.1067rem 0 rgba(0,0,0,.13);
        position: relative;
    }
    .selection>div>div>img{
        display: inline-block;
        width: 0.68rem;
        height: 0.35rem;
        margin-top: 0.05rem;
        border-top-right-radius: 1.3333rem;
        border-bottom-right-radius: 1.3333rem;
        border: .003rem solid hsla(0,0%,63%,.17);
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 0.0667rem 0.0667rem 0 rgba(0,0,0,.09);
    }
    .selection>div>div>span{
        font-size: 0.14rem;
        font-weight: 600;
        position: absolute;
        top: 0.08rem;
        left: 0.75rem;
    }
    .selection>div>div>h2{
        padding-bottom: 0.06rem;
        padding-left: 0.06rem;
    }
    .selection>div>div>h2>img{
        display: inline-block;
        width: 0.13rem;
    }
    .selection>div>div>p{
        padding-left: 0.06rem;
    }
    .selection>div>div>p>span{
        padding: 0 0.02rem;
        margin: 0 0.02rem;
        font-weight: 500;
        background-color: rgba(30, 30, 30, 0.9);
        color: rgb(255, 255, 255);
    }
</style>