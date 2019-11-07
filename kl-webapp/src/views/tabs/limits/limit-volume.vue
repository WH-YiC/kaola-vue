<template>
    <div>
        <header>
            <p>5折量贩</p>
            <div class="home-login">
                <a class="home" href="#/"><img src="../../../assets/images/homeicon.png"/>
                </a>
                <a class="login" href="#/main/my">登录</a>
            </div>
        </header>
        <main>
            <volume-free :key="index" :data="s" v-for="(s,index) in volumeList.list"></volume-free>
        </main>
    </div>
</template>

<script>
    import volumeFree from '../../../components/volume-free'
    export default {
        name: "limit-volume",
        data(){
            return{
                volumeList:{
                    list:[
                        {
                            name:'第2件不要钱',
                            products:[
                                {
                                    img:'https://pop.nosdn.127.net/99fe9a3f-3720-45af-881f-da1a2bee4a8b?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'限时购',
                                    name:'AFU 阿芙 玫瑰焕白保湿双效...',
                                    price:'109',
                                    delprice:'￥298'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/14aea8a7-3382-4244-b513-da1edd529d26?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享5折',
                                    name:'【保护咽喉健康】Wealthy...',
                                    price:'188',
                                    delprice:'￥258'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/27ac11ee-2e97-4838-a63c-0db825d4ddb7?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'券满57减5',
                                    name:'阿道夫精油香沐慕斯520g...',
                                    price:'138',
                                    delprice:'￥168'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/350541bc-479d-4846-a5e0-5d81ebf64ee9?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享5折',
                                    name:'STENDERS/施丹兰手工皂...',
                                    price:'70',
                                    delprice:''
                                },
                                {
                                    img:'https://pop.nosdn.127.net/7b278fad44884035b9cb0143763c78db_0_0.null?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享5折',
                                    name:'ciciibear齐齐熊 婴儿连体...',
                                    price:'79',
                                    delprice:'￥188'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/f8c5ac0e-1f76-49f1-9303-74d05e8f1429?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享5折',
                                    name:'【澳洲医师力荐】 1天见效...',
                                    price:'149',
                                    delprice:'￥409'
                                }
                            ]
                        },
                        {
                            name:'第2件半价',
                            products:[
                                {
                                    img:'https://pop.nosdn.127.net/33fb25bf61ff4bcc8895ce16a7032805_0_0.null?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享7.5折',
                                    name:'【第2件半价】Perfect Diary...',
                                    price:'79.9',
                                    delprice:'￥169'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/3e59e0d8-66cc-4b5c-a13f-d038517bf647?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享7.5折',
                                    name:'【第2套半价】好伙伴家纺 ...',
                                    price:'179',
                                    delprice:'￥798'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/a5df8bbbfc5f4f62aa693219c342ae68_0_0.null?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享7.5折',
                                    name:'AMORTALS尔木萄 氨基酸...',
                                    price:'19.9',
                                    delprice:'￥43.78'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/d03543c0851e4e9997f4903eaa91aae7_0_0.null?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享7.5折',
                                    name:'滴露超浓缩衣物除菌液1.5L...',
                                    price:'83.9',
                                    delprice:'￥89.9'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/38f8b686-d152-4fdb-9286-47567f5594a5?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享7.5折',
                                    name:'【2019年新款】确美同 ...',
                                    price:'47',
                                    delprice:'￥109'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/99debd7d-dfe5-4028-928d-9be7a87a3863?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'满2件享7.5折',
                                    name:'【2盒73.5元包邮】婚纱芦荟...',
                                    price:'49',
                                    delprice:'￥130'
                                }
                            ]
                        },
                        {
                            name:'99元买这些',
                            products:[
                                {
                                    img:'https://pop.nosdn.127.net/059971af-d933-41f6-8eff-d820cc072877?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'99选2件',
                                    name:'【品牌方授权 包邮】【李...',
                                    price:'55',
                                    delprice:'￥99'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/39e3938273dc4af2b6bd517f8e3373d0_0_0.null?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'99选3件',
                                    name:'【唇部小熨斗】美国Bli...',
                                    price:'36',
                                    delprice:'￥108'
                                },
                                {
                                    img:'https://haitao.nos.netease.com/82cddecbe21c408f900c238f4ee8efa11550666547855jsd6tpx710375.jpg?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'99选7件',
                                    name:'【新西兰原产-主食猫罐】...',
                                    price:'16',
                                    delprice:'￥20'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/c259aa4e-1bb5-4b36-b8c0-44223a2bf301?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'99选3件',
                                    name:'【植物配方不伤手】pige...',
                                    price:'39',
                                    delprice:'￥46'
                                },
                                {
                                    img:'https://haitao.nosdn1.127.net/j0i37v6s64_800_800.jpg?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'99选3件',
                                    name:'2款颜色随机发】德国Hap...',
                                    price:'47',
                                    delprice:'￥89'
                                },
                                {
                                    img:'https://pop.nosdn.127.net/474d6e64d0a24a6cb3cedcea6f7b66b2_0_0.null?imageView&thumbnail=200x200&quality=80&type=webp',
                                    title:'99选5件',
                                    name:'东北农嫂当季新货头茬黄...',
                                    price:'23.9',
                                    delprice:'￥45'
                                }
                            ]
                        }
                    ]
                }
            }
        },
        components:{
            volumeFree
        }
    }
</script>

<style scoped>
    header p{
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        font-size: 0.18rem;
    }
    .home-login{
        display: flex;
        position: absolute;
        top: 0.1rem;
        right: 0.15rem;
    }
    .home>img{
        margin-top: -0.05rem;
        width: 0.19rem;
        height: 0.22rem;
    }
    .login{
        margin-left: 0.10rem;
        font-size: 0.10rem;
        margin-top: 1px;
        width: 0.36rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        color: #e31436;
        border: 1px solid #e31436;
        border-radius: 3px;
    }

    main{
        background-color: #F9C4C2;
    }

</style>