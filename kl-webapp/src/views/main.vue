<template>
    <div>
        <router-view></router-view>
        <kl-footer></kl-footer>
    </div>

</template>

<script>
    import footer from '../views/tabs/footer'
    export default {
        name: "kmain",
        components: {
            'kl-footer':footer
        }
    }
</script>

<style scoped>

</style>