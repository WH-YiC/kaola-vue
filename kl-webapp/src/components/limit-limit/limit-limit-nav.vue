<template>
    <div class="limit-limit-nav">
        <div @click="change(1)" :class="num===1?'changeStyle':''">
            <p class="time">00:00</p>
            <p class="common">已开抢</p>
        </div>
        <div @click="change(2)" :class="num===2?'changeStyle':''">
            <p class="time">10:00</p>
            <p class="common">已开抢</p>
        </div>
        <div @click="change(3)" :class="num===3?'changeStyle':''">
            <img src="https://haitao.nos.netease.com/c8fc0d29-9609-4ce3-b82a-aa2f304e83bcT1911081802_138_96.png" />
        </div>
        <div @click="change(4)" :class="num===4?'changeStyle':''">
            <p class="time">13:00</p>
            <p class="common">抢购进行中</p>
        </div>
        <div @click="change(5)" :class="num===5?'changeStyle':''">
            <p class="time">17:00</p>
            <p class="common">即将开抢</p>
        </div>
        <div @click="change(6)" :class="num===6?'changeStyle':''">
            <p class="time">21:00</p>
            <p class="common">即将开抢</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "limit-limit-nav",
        data(){
            return{
                num:1
            }
        },
        methods:{
            change(i){
                this.num = i;
                this.$emit("llnindex",i);
            }
        }
    }
</script>

<style scoped>
    .limit-limit-nav{
        display: flex;
        overflow: auto;
        margin-bottom: 0.09rem;
        padding-left: 0.12rem;
    }
    .limit-limit-nav>div{
        height: 0.48rem;
        color: rgb(255, 255, 255);
        white-space: nowrap;
        text-align: center;
        margin-right: 0.09rem;
        font-weight: initial;
        opacity: 0.7;
    }
    .time{
        width: 0.6rem;
        padding-top: 0.07rem;
        font-size: 0.18rem;
        font-weight: 700;
    }
    .common{
        font-weight: lighter;
    }
    img{
        width: 0.6rem;
        padding-top: 0.02rem;
    }
    .limit-limit-nav>.changeStyle{
        opacity: 1;
    }
    .limit-limit-nav>.changeStyle>.time{
        width: 0.74rem;
        padding-top: 0;
        font-size: 0.24rem;
    }
    .limit-limit-nav>.changeStyle>.common{
        background-color: white;
        color: red;
        border-radius: 12px;
    }
    .limit-limit-nav>.changeStyle>img{
        width: 0.69rem;
        padding-top: 0;
    }
</style>