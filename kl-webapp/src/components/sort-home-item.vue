<template>
    <div>
        <a :key="pid" href="#" v-for="(p,pid) in data">
            <img :src="p.pic"/>
            <span>{{p.name}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "sort-home-item",
        props:["data"]
    }
</script>

<style scoped>
    a{
        display: inline-block;
        width: 0.84rem;
        height: 1.08rem;
        padding: 0 0.04rem;
        box-sizing: border-box;
        text-align: center;
    }
    img{
        width: 0.76rem;
    }

</style>