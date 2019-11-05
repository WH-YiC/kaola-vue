<template>
    <div>
    <router-view></router-view>
    <limit-footer></limit-footer>
    </div>
</template>

<script>
    import limitFooter from '../../components/limit-footer'
    export default {
        name: "limit",
        components:{
            limitFooter:limitFooter
        }
    }
</script>

<style scoped>

</style>