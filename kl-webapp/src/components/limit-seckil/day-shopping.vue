<template>
    <div>
        <div class="day-shopping" :key="index" v-for="(d,index) in data">
            <div>
                <img :src="d.img"/>
            </div>
            <div class="day-shopping-list">
                <h2>{{d.title}}</h2>
                <div>
                    <p>{{d.text}}</p>
                </div>
                <p class="limitshopping">限时购</p>
                <p class="price">￥<span>{{d.price}}</span><del>{{d.delprice}}</del><input type="button" value="立即购买"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "day-shopping",
        props:["data"]
        // data(){
        //     return{
        //         footerNav:{
        //             dayshopping:[
        //                 {
        //                     title:'超韧湿水不易破',
        //                     text:'【限时特卖|27卷整箱维达经典卷筒纸】维达蓝色经典卫卷4层140克×27卷',
        //                     price:'54.90',
        //                     delprice:'￥84.00',
        //                     img:'https://pop.nosdn.127.net/78e7949c-ded2-4c21-af48-8fef64a24344?imageView&thumbnail=260x260&quality=80&type=webp'
        //                 },
        //                 {
        //                     title:'四层加厚，湿水不破',
        //                     text:'【四层6包】Tempo得宝 抽纸 无味软抽4层90抽*6包抽纸（单提） 德宝抽纸餐巾纸卫生纸面巾纸 天然纸巾',
        //                     price:'25.90',
        //                     delprice:'￥70',
        //                     img:'https://pop.nosdn.127.net/3c5d4d2d-ce0d-44e2-9189-6b71e8614ff4?imageView&thumbnail=260x260&quality=80&type=webp'
        //                 }
        //             ]
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .day-shopping{
        display: flex;
        width: 3.55rem;
        height: 1.3rem;
        margin: 0 auto;
        background-color: white;
        margin-top: 0.03rem;
    }
    .day-shopping img{
        width: 1.3rem;
        height: 1.3rem;
        margin-top: 0;
    }
    .day-shopping-list{
        width: 2.05rem;
        margin-left: 0.1rem;
    }
    .day-shopping-list h2{
        margin-top: 0.08rem;
        font-size: 0.15rem;
        font-weight: bold;
    }
    .day-shopping-list>div{
        margin-top: 0.07rem;
        margin-bottom: 0.05rem;
    }
    .day-shopping-list>div>p{
        font-size: 0.137rem;
        height: 0.34rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-flex: 1;
        -webkit-line-clamp: 2;
        -webkit-flex: 1;
    }
    .limitshopping{
        display: inline-block;
        background-color: rgb(255, 30, 50);
        padding-left: 0.04rem;
        padding-right: 0.04rem;
        height: 0.15rem;
        line-height: 0.15rem;
        font-size: 0.12rem;
        color: white;
        margin-top: 0.05rem;
    }
    .price{
        color: rgb(255, 30, 50);
        margin-top: 0.1rem;
        position: relative;
    }
    .price span{
        font-size: 0.18rem;
        margin-top: 0.1rem;
        font-weight: bold;
    }
    del{
        color: #999999;
    }
    .day-shopping-list input{
        position: absolute;
        right: 0;
        bottom: 0;
        padding-left: 0.16rem;
        padding-right: 0.16rem;
        color: #fff;
        font-size: 0.13rem;
        line-height: 0.28rem;
        border: none;
        border-radius: 1.3333rem;
        background-color: rgb(255, 30, 50);
    }
</style>