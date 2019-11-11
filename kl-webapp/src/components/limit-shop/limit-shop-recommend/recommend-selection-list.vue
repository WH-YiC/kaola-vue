<template>
    <div class="selection-list">
        <div :key="index" v-for="(q,index) in data">
            <img :src="q.img"/>
            <span>{{q.title}}</span>
            <p>{{q.price}}<del>{{q.delprice}}</del></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommend-selection-list",
        props:["data"]
    }
</script>

<style scoped>
    .selection-list{
        width: 100%;
        margin: 0 auto;
        padding: 0.09rem 0.09rem 0;
        margin-bottom: 0.09rem;
        display: flex;
        justify-content: space-between;
        background-color: white;
        border-radius: 0 0 0.05rem 0.05rem;
    }
    .selection-list>div{
        margin-bottom: 0.1rem;
        position: relative;
    }
    .selection-list>div>img{
        width: 1.075rem;
    }
    .selection-list>div>span{
        display: inline-block;
        position: absolute;
        bottom: 0.28rem;
        height: 0.15rem;
        line-height: 0.15rem;
        background-color: #ff4159;
        padding: .0133rem .2rem;
        justify-content: center;
        align-items: center;
        border-top-right-radius: .4rem;
        border-bottom-right-radius: .4rem;
    }
    .selection-list>div>p{
        height: 0.2rem;
        line-height: 0.2rem;
        margin-top: 0.05rem;
        font-size: 0.15rem;
        color: #ff1e32;
        font-weight: 700;
        text-align: center;
    }
    del{
        color: #aaa;
        text-decoration: line-through;
        font-size: 0.12rem;
        font-weight: lighter;
    }
</style>