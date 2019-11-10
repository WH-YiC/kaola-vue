<template>
        <ul>
            <li :key="index" v-for="(s,index) in data" @click="handleclick(index)">
                <a :class="current===index?'click':''">
                    {{s}}
                </a>
            </li>
        </ul>
</template>

<script>
    export default {
        name: "sort-nav",
        props:["data"],
        data(){
            return{
                current:0
            }
        },
        methods:{
            handleclick(index){
                this.current=index;
                this.$emit("sn",index)
            }
        }
    }
</script>

<style scoped>

    ul{
        width: 1rem;
        text-align: center;
    }
    li{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.14rem;
    }
    .click{
        background-image: -webkit-gradient(linear,right top,left top,from(red),to(#ff3264));
        background-image: -webkit-linear-gradient(right,red,#ff3264);
        background-image: linear-gradient(-90deg,red,#ff3264);
        border-radius: 25px;
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        padding: 2.5px 7px;
    }
</style>