<template>
    <div class="sort">
        <sort-nav class="sort-nav"></sort-nav>
        <router-view class="sort-router"></router-view>
    </div>
</template>

<script>
    import sortNav from '../../components/sort-nav'
    export default {
        name: "sort",
        components:{
            sortNav
        }
    }
</script>

<style scoped>
    .sort{
        height: 6.17rem;
        display: flex;
    }
    .sort-nav{
        width: 1rem;
        height: 6.17rem;
        overflow: auto;
        box-shadow: inset -0.01rem 0 0 0 #ddd;
    }
    /*.sort-nav::-webkit-scrollbar {display:none}*/
    .sort-router{
        width: 2.75rem;
        height: 6.17rem;
        overflow: auto;
        padding-top: 0.1rem;
        padding-right: 0.1rem;
        padding-left: 0.12rem;
    }
</style>