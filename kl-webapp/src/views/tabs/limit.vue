<template>
    <router-view></router-view>
    <limit-footer></limit-footer>
</template>

<script>
    import limitFooter from './limits/limit-footer'
    export default {
        name: "limit",
        components:{
            limitFooter:limitFooter
        }
    }
</script>

<style scoped>

</style>