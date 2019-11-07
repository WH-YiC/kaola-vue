<template>
    <div class="my-list">
        <a href="#" :key="index" v-for="(m,index) in data">
            <img :src="data.img" />
            <div>
                {{data.title}}
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "my-list",
        props:["data"]
    }
</script>

<style scoped>
    .my-list{
        display: flex;
    }
    .my-list>a{
        flex: 1;
    }
</style>