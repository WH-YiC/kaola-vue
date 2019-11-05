<template>
    <div>
        <router-view class="home"></router-view>
        <kl-footer></kl-footer>
    </div>

</template>

<script>
    import footer from '../components/footer'
    export default {
        name: "kmain",
        components: {
            'kl-footer':footer
        }
    }
</script>

<style scoped>
.home{
    margin-bottom: 0.5rem;
}
</style>