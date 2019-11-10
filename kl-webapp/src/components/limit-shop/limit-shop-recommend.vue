<template>
    <div>
        <header>
            <img src="https://haitao.nos.netease.com/b59f3ed8-ce22-472f-b0eb-680a42498e14T1911071125_960_420.jpg?imageView&thumbnail=750x0&quality=80&type=webp"/>
        </header>
        <main>
            <div class="recommend-like">
                <p>猜你喜欢<span>大牌好货 限时抢购</span></p>
                <shop-recommend-like :data="data.shopList"></shop-recommend-like>
            </div>
            <div class="recommend-selection">
                <p>甄选大牌<span>每日0点开抢</span></p>
                <shop-recommend-selection :shopRecommend="data.shopRecommend"></shop-recommend-selection>
            </div>
        </main>
    </div>
</template>

<script>
    import shopRecommendLike from './limit-shop-recommend/shop-recommend-like'
    import shopRecommendSelection from './limit-shop-recommend/shop-recommend-selection'
    export default {
        name: "limit-shop-recommend",
        props:["data"],
        components:{
            shopRecommendLike,
            shopRecommendSelection
        },
        data(){
            return{
                // shopList:[
                //     {
                //         img:'https://pop.nosdn.127.net/55d1c36d-6581-4ed8-843d-bbe92ed734af?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'LANCÔME 兰蔻',
                //         title:'兰蔻粉水低至269'
                //     },
                //     {
                //         img:'https://pop.nosdn.127.net/b66638fccb07464bbafab6de55272acb_0_0.null?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'UNNY秀出彩',
                //         title:'全场同价双十一起'
                //     },
                //     {
                //         img:'https://pop.nosdn.127.net/c6ef067da2c741418f0288b3571a8b96_0_0.null?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'Dior 迪奥',
                //         title:'迪奥蓝金低至173'
                //     },
                //     {
                //         img:'https://haitao.nos.netease.com/de12ce0374164d1e819e92946dd7b50a1572400311929k2cmjplx12316.jpg?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'LΛNEIGE 兰芝',
                //         title:'油皮两件套248'
                //     },
                //     {
                //         img:'https://pop.nosdn.127.net/55d1c36d-6581-4ed8-843d-bbe92ed734af?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'LANCÔME 兰蔻',
                //         title:'兰蔻粉水低至269'
                //     },
                //     {
                //         img:'https://haitao.nosdn2.127.net/1c1ul8rbe49_300_300.jpg?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'Irmas',
                //         title:'低至99-50起'
                //     },
                //     {
                //         img:'https://pop.nosdn.127.net/1c87f1d3-d2cd-40c0-9388-e193c5a3969e?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'植观',
                //         title:'爆款满2件享8折'
                //     },
                //     {
                //         img:'https://haitao.nos.netease.com/1bl7vi7vh3_300_300.jpg?imageView&thumbnail=163x0&quality=80&type=webp',
                //         name:'Dior 迪奥',
                //         title:'迪奥蓝金低至173'
                //     }
                // ],
                // shopRecommend:[
                //     {
                //         bgimg:'background-image:url(https://haitao.nos.netease.com/1572493531758%E5%85%B0%E8%8A%9D.jpg?imageView&thumbnail=710x0&quality=80&type=webp)',
                //         logo:'https://haitao.nosdn1.127.net/ii01qihl5_300_300.jpg?imageView&thumbnail=0x70&quality=80&type=webp',
                //         name:'LΛNEIGE 兰芝',
                //         title:'油皮两件套248',
                //         time:'28',
                //         product:[
                //             {
                //                 img:'https://haitao.nos.netease.com/de12ce0374164d1e819e92946dd7b50a1572400311929k2cmjplx12316.jpg?imageView&thumbnail=215x215&quality=80&type=webp',
                //                 title:'包税',
                //                 price:'￥248',
                //                 delprice:'￥439'
                //             },
                //             {
                //                 img:'https://haitao.nos.netease.com/75d5dd81a47646deb5f68d751e3aee8d1569207644125k0vtpr7f10930.jpg?imageView&thumbnail=215x215&quality=80&type=webp',
                //                 title:'满2件减30',
                //                 price:'￥149',
                //                 delprice:'￥270'
                //             },
                //             {
                //                 img:'https://haitao.nosdn1.127.net/270137740233451e99a27ef4ab98e6c91521683385319jf1uzyky11784.jpg?imageView&thumbnail=215x215&quality=80&type=webp',
                //                 title:'满2件减30',
                //                 price:'￥149',
                //                 delprice:'￥198'
                //             }
                //         ]
                //
                //     }
                //     // ,
                //     // {
                //     //     bgimg:'',
                //     //     logo:'',
                //     //     name:'',
                //     //     title:'',
                //     //     time:'',
                //     //     product:[
                //     //         {
                //     //             img:'',
                //     //             title:'',
                //     //             price:'',
                //     //             delprice:''
                //     //         },
                //     //         {
                //     //             img:'',
                //     //             title:'',
                //     //             price:'',
                //     //             delprice:''
                //     //         },
                //     //         {
                //     //             img:'',
                //     //             title:'',
                //     //             price:'',
                //     //             delprice:''
                //     //         }
                //     //     ]
                //     //
                //     // },
                //     // {
                //     //     bgimg:'',
                //     //     logo:'',
                //     //     name:'',
                //     //     title:'',
                //     //     time:'',
                //     //     product:[
                //     //         {
                //     //             img:'',
                //     //             title:'',
                //     //             price:'',
                //     //             delprice:''
                //     //         },
                //     //         {
                //     //             img:'',
                //     //             title:'',
                //     //             price:'',
                //     //             delprice:''
                //     //         },
                //     //         {
                //     //             img:'',
                //     //             title:'',
                //     //             price:'',
                //     //             delprice:''
                //     //         }
                //     //     ]
                //     //
                //     // }
                // ]
            }
        }
    }
</script>

<style scoped>
    header>img{
        width: 3.55rem;
        margin: 0 auto;
        border-radius: 0.03rem;
    }
    header{
        padding: 0.0461rem 0;
    }
    main{
        background-color: #f0f0f0;
    }
    .recommend-like{
        padding-left: 0.1rem;
    }
    .recommend-like>p{
        font-size: 0.18rem;
        color: #1e1e1e;
        padding: 0.18rem 0 0.09rem;
    }
    .recommend-like>p>span,.recommend-selection>p>span{
        font-size: 0.14rem;
        color: #666666;
        margin-left: 0.09rem;
    }
    .recommend-selection>p{
        font-size: 0.18rem;
        color: #1e1e1e;
        padding: 0.18rem 0 0.04rem 0.1rem;
    }
</style>