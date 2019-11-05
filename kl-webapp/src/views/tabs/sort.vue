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
        display: flex;
    }
    .sort-nav{
        box-shadow: inset -0.01rem 0 0 0 #ddd;
    }
    .sort-router{
        padding-top: 0.1rem;
        padding-right: 0.1rem;
    }
</style>