<template>
    <div>
        <div class="sort-home-product" :key="index" v-for="(s,index) in data">
            <h3>{{s.name}}</h3>
            <sort-home-item :data="s.products"></sort-home-item>
        </div>
    </div>
</template>

<script>
    import sortHomeItem from './sort-home-item'
    export default {
        name: "sort-home",
        components:{
            sortHomeItem
        },
        props:["data"]
    }
</script>

<style scoped>
    h3{
        font-size: 0.14rem;
        line-height: 0.30rem;
        height: 0.30rem;
        margin-bottom: 0.08rem;
        font-family: PingFangSC-Semibold;
        color: #333;
        letter-spacing: 0;
        font-weight: 700;
        padding-left: 0.03rem;
    }
    .sort-home-product{
        padding-bottom: 0.07rem;
        border-bottom: 0.005rem solid #f0f0f0;
    }
</style>