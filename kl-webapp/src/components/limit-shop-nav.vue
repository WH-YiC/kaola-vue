<template>
    <div class="limit-shop-nav">
        <div @click="change(1)">品牌推荐</div><!--limit-shop-recommend-->
        <div @click="change(2)">美妆个护</div><!--limit-shop-beauty-->
        <div @click="change(3)">服装运动</div><!--limit-shop-movement-->
        <div @click="change(4)">箱包配饰</div><!--limit-shop-bag-->
        <div @click="change(5)">母婴儿童</div><!--limit-shop-infant-->
        <div @click="change(6)">保健美食</div><!--limit-shop-food-->
        <div @click="change(7)">数码家居</div><!--limit-shop-digital-->
    </div>
</template>

<script>
    export default {
        name: "limit-shop-nav",
        methods:{
            change(i){
                this.$emit("lsnindex",i);
            }
        }
    }
</script>

<style scoped>
    .limit-shop-nav{
        display: flex;
        overflow: auto;
    }
    .limit-shop-nav>div{
        height: 0.35rem;
        line-height: 0.35rem;
        color: rgb(255, 255, 255);
        /*justify-content: center;*/
        white-space: nowrap;
        font-size: 0.14rem;
        padding: 0 0.135rem;
        font-weight: initial;
    }
</style>