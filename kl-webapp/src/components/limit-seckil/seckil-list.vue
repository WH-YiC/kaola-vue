<template>
    <div class="seckil-list">
        <div :key="index" v-for="(s,index) in data">
            <div class="seckil-list-img">
                <img :src="s.img" />
                <span>限量{{s.num}}件</span>
            </div>
            <div class="seckil-list-name">
                <p>{{s.name}}</p>
            </div>
            <div class="seckil-list-price">
                <p>￥<span style="font-size: 0.13rem">{{s.price}}</span></p>
                <del>{{s.delprice}}</del>
                <input type="button" value="抢">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seckil-list",
        props:["data"]
        // data(){
        //     return{
        //         footerNav:{
        //             seckilList:[
        //                 {
        //                     img:'https://pop.nosdn.127.net/5b8c6a38-939b-433f-8a0a-a75ac692d59d?imageView&thumbnail=198x0&quality=80&type=webp',
        //                     num:'500',
        //                     name: 'ms【柔软细腻】Beauty Artis...',
        //                     price:'19.9',
        //                     delprice:'￥49'
        //                 },
        //                 {
        //                     img:'https://pop.nosdn.127.net/4a0c4a6f-5c73-4396-a108-789a50e0903d?imageView&thumbnail=198x0&quality=80&type=webp',
        //                     num:'400',
        //                     name: '【深层清洁 控制水油】COSME...',
        //                     price:'19.9',
        //                     delprice:'￥99'
        //                 },
        //                 {
        //                     img:'https://pop.nosdn.127.net/c42d0fd6ce414107b40fa847587577ef_0_0.null?imageView&thumbnail=198x0&quality=80&type=webp',
        //                     num:'500',
        //                     name: 'AMORTALS尔木萄 美颜气垫粉...',
        //                     price:'19.9',
        //                     delprice:'￥55'
        //                 },
        //                 {
        //                     img:'https://pop.nosdn.127.net/98be6dd2-136a-467d-b53c-826d062633e0?imageView&thumbnail=198x0&quality=80&type=webp',
        //                     num:'500',
        //                     name: '高夫竹炭净透控油泡沫洁面乳100g...',
        //                     price:'19.9',
        //                     delprice:'￥58'
        //                 },
        //                 {
        //                     img:'https://pop.nosdn.127.net/032f806a-8cf9-492f-9128-f9258c73acfc?imageView&thumbnail=198x0&quality=80&type=webp',
        //                     num:'2000',
        //                     name:'MISSHAMISSHA谜尚舒缓补水芦...',
        //                     price:'19.9',
        //                     delprice:'￥50'
        //                 }
        //             ]
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .seckil-list{
        display: flex;
    }
    .seckil-list>div{
        padding-right: 0.09rem;
    }
    img{
        width: 0.99rem;
        height: 0.99rem;
    }
    .seckil-list-img{
        position: relative;
    }
    .seckil-list-img span{
        padding: 0 0.05rem;
        border: 0.5px solid #FF0000;
        border-radius: 0.2rem;
        color: #FF0000;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .seckil-list-name{
        margin-top: 0.08rem;
        margin-bottom: 0.06rem;
    }
    .seckil-list-price{
        position: relative;
        padding-bottom: 0.1rem;
    }
    .seckil-list-price p{
        font-weight: bold;
        color: #E30202;
        padding-left: 0.05rem;
    }
    .seckil-list-price del{
        color: #A2A2A2;
    }
    .seckil-list-price input{
        width: 0.24rem;
        height: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        border: none;
        border-radius: 50%;
        background-color: #FF1E32;
        position: absolute;
        bottom: 0.11rem;
        right: 0.02rem;
        font-weight: bold;
        color: #fff;
    }
</style>