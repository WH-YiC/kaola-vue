<template>
    <div class="limit-limit">
        <header>
            <limit-limit-nav @llnindex="llnindex"></limit-limit-nav>
        </header>
        <main>
            <limit-limit-shopped :data="data[num]" v-if="num<3"></limit-limit-shopped><!--已开抢-->
            <limit-limit-shopping :data="data[num]" v-else-if="num===3"></limit-limit-shopping><!--抢购进行中-->
            <limit-limit-to-shop :data="data[num]" v-else-if="num>3"></limit-limit-to-shop><!--即将开抢-->
        </main>
    </div>
</template>

<script>
    import dataApi from "../../../api/dataApi";
    import limitLimitNav from '../../../components/limit-limit/limit-limit-nav'
    import limitLimitShopped from '../../../components/limit-limit/limit-limit-shopped'
    import limitLimitShopping from '../../../components/limit-limit/limit-limit-shopping'
    import limitLimitToShop from '../../../components/limit-limit/limit-limit-to-shop'
    export default {
        name: "limit-limit",
        components:{
            limitLimitNav,
            limitLimitShopped,
            limitLimitShopping,
            limitLimitToShop
        },
        data(){
            return{
                num:0,
                data:{}
                // limitLimit: [
                //         [
                //             {
                //                 img:'https://haitao.nosdn1.127.net/4bbffead4948460895acf6e1442092241536735852619jlysukoj10475.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'铆钉时尚，随性风格',
                //                 title:'MCM Patricia系列 女士 时尚铆钉装饰...',
                //                 com:'',
                //                 num:'已抢78%',
                //                 style:'width:78%;',
                //                 price:'1499',
                //                 delprice:'￥3700'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/58fb363988a24ade8c00b65e0ab696ce_0_0.null?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'滋养紧致 补水保湿',
                //                 title:'【孕妇护肤品】Aocilenda 澳兰黛 凝...',
                //                 com:'',
                //                 num:'已抢49%',
                //                 style:'width:49%;',
                //                 price:'68',
                //                 delprice:'￥399'
                //             },
                //             {
                //                 img:'https://haitao.nosdn2.127.net/e2d3279de7ec4762980138e78ed518271557307169195jvf0ha5410586.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'拒绝假面真正素颜',
                //                 title:'【肌肤调色盘】LΛNEIGE兰芝妆前雪...',
                //                 com:'满2件减30 | 包税',
                //                 num:'已抢53%',
                //                 style:'width:53%;',
                //                 price:'199起',
                //                 delprice:'￥280'
                //             },
                //             {
                //                 img:'https://haitao.nosdn2.127.net/7b821e81dd834f8b87209947547f93991519873126012je7x7th019395.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'时刻准备 闪耀登场',
                //                 title:'FENDI 芬迪 女士小牛皮拉链长款钱包',
                //                 com:'',
                //                 num:'已抢90%',
                //                 style:'width:90%;',
                //                 price:'1499',
                //                 delprice:'￥4999'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/d5c77f4f-8e83-4be0-9a4d-f4332c8cbebf?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'清新谷香，对抗湿气',
                //                 title:'喜善花房红豆薏米去湿茶赤小豆养生...',
                //                 com:'',
                //                 num:'已抢70%',
                //                 style:'width:70%;',
                //                 price:'19.9',
                //                 delprice:'￥49.9'
                //             }
                //         ],
                //         [
                //             {
                //                 img:'https://pop.nosdn.127.net/0416f3ab-0680-4c5c-af84-ea40ccaa30f8?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'超级单品',
                //                 name:'色泽剔透 甜蜜诱人',
                //                 title:'【破损包赔】食间飞行四川爱媛38号...',
                //                 com:'',
                //                 num:'已抢62%',
                //                 style:'width:62%;',
                //                 price:'29',
                //                 delprice:'￥79'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/f57ce8ea-1848-4e9d-a512-99b62a34e7f1?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'上妆告别左右手',
                //                 title:'【包邮】【张嘉倪同款】AMORTALS...',
                //                 com:'',
                //                 num:'已抢52%',
                //                 style:'width:52%;',
                //                 price:'39',
                //                 delprice:'￥102.3'
                //             },
                //             {
                //                 img:'https://haitao.nos.netease.com/52af19ee8b92476ca910da09ba1d31df1539240459157jn480zgh10977.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'低头也能看见星星',
                //                 title:'UGG Classic Charm Boot系列 女士时...',
                //                 com:'包税',
                //                 num:'已抢88%',
                //                 style:'width:88%;',
                //                 price:'499',
                //                 delprice:'￥2480'
                //             },
                //             {
                //                 img:'https://haitao.nosdn1.127.net/3e2ebda33d684db8aca4b4e5c962d5cd1559127901407jw94hw3x10259.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'植物配方 卸妆养肤',
                //                 title:'【李佳琦同款】UNNY 悠宜 深层清洁...',
                //                 com:'满2件减30 | 包税',
                //                 num:'已抢44%',
                //                 style:'width:44%;',
                //                 price:'65',
                //                 delprice:'￥95'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/a4518080-40ce-487e-8233-fc1f0fec44ee?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'湿水不易烂 可作洗脸巾',
                //                 title:'【前5分钟第2件半价】C&S 洁柔 Fac...',
                //                 com:'',
                //                 num:'已抢56%',
                //                 style:'width:56%;',
                //                 price:'49.9',
                //                 delprice:'￥89'
                //             }
                //         ],
                //         [
                //             {
                //                 img:'https://haitao.nosdn1.127.net/5483f6e932894b10b089efad36d4d7ec1567412047380k024nw1s10050.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'肌肤定制水 重现少女感',
                //                 title:'LΛNEIGE 兰芝 水衡轻盈三件套装',
                //                 com:'包税',
                //                 num:'已抢46%',
                //                 style:'width:46%;',
                //                 price:'328',
                //                 delprice:'￥569'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/f27ff219535746ec988f5e9bdaeec40b_0_0.null?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'一瓶透亮全身，层层焕亮',
                //                 title:'【双11狂欢价】【半亩花田/Little Dre...',
                //                 com:'',
                //                 num:'已抢53%',
                //                 style:'width:53%;',
                //                 price:'59',
                //                 delprice:'￥199'
                //             },
                //             {
                //                 img:'https://haitao.nosdn1.127.net/41015ee6d8a54488b6d49c569f5507071558609302152jw0jqi6810688.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'1分钟洗出水光透亮',
                //                 title:'【平价香奈儿】vidivici 净透美肌洁面...',
                //                 com:'包税',
                //                 num:'已抢55%',
                //                 style:'width:55%;',
                //                 price:'115',
                //                 delprice:'￥200'
                //             },
                //             {
                //                 img:'https://haitao.nos.netease.com/2f49f616bfb146d58527ad398e186c421553691039679jtr7j2oh11824.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'弹润淡纹明眸',
                //                 title:'【淡化皱纹眼霜】怡丽丝尔ELIXIR W...',
                //                 com:'包税',
                //                 num:'已抢49%',
                //                 style:'width:49%;',
                //                 price:'499起',
                //                 delprice:'￥480'
                //             },
                //             {
                //                 img:'https://haitao.nosdn2.127.net/1bel1j7q167_800_800.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'理想映衬每一种肤色的唇膏',
                //                 title:'Dior 迪奥 粉漾魅惑变色润唇膏套装 #...',
                //                 com:'包税',
                //                 num:'已抢51%',
                //                 style:'width:51%;',
                //                 price:'419',
                //                 delprice:'￥580'
                //             }
                //         ],
                //
                //         [
                //                 [
                //                     {
                //                         img:'https://pop.nosdn.127.net/00973af4-c5e2-4be3-9a94-21c44fdd8009?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         price:'￥149',
                //                         delprice:'￥298'
                //                     },
                //                     {
                //                         img:'https://pop.nosdn.127.net/97e17740-90ef-4310-9b6a-82943cd5fc8e?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         price:'￥149',
                //                         delprice:'￥241'
                //                     },
                //                     {
                //                         img:'https://pop.nosdn.127.net/f69d7fed-58ab-419b-b84b-21002c778d56?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         price:'￥288',
                //                         delprice:'￥2318'
                //                     },
                //                     {
                //                         img:'https://pop.nosdn.127.net/baf30cac10cb4065acc59f1842073c2b_0_0.null?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         price:'￥108',
                //                         delprice:'￥138'
                //                     }
                //                 ],
                //                 [
                //                     {
                //                         img:'https://pop.nosdn.127.net/d565be483b664749b4e4d5d2e5c89699_0_0.null?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         comm:'',
                //                         name:'柔软保暖，穿着舒适',
                //                         title:'Costoso羽绒服女2019冬季新款金丝...',
                //                         com:'',
                //                         num:'已抢44%',
                //                         style:'width:44%;',
                //                         price:'579',
                //                         delprice:'￥2199'
                //                     },
                //                     {
                //                         img:'https://haitao.nosdn2.127.net/669e61182b4f4f5ca49debd5f6a2f39b1554103707822jty17zih12751.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         comm:'',
                //                         name:'驱蚊水，夏日',
                //                         title:'ukiwi纽西小精灵 天然植物成分健康温...',
                //                         com:'满2件减20',
                //                         num:'已抢49%',
                //                         style:'width:49%;',
                //                         price:'149',
                //                         delprice:'￥225'
                //                     },
                //                     {
                //                         img:'https://pop.nosdn.127.net/fd8bf677-d5f9-44e3-8dba-7f1bf1e1e087?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         comm:'',
                //                         name:'解决面子问题醒肤补水',
                //                         title:'A.H.C 男士水乳洁面3件套 水120ml+...',
                //                         com:'包税',
                //                         num:'已抢50%',
                //                         style:'width:50%;',
                //                         price:'199',
                //                         delprice:'￥399'
                //                     },
                //                     {
                //                         img:'https://pop.nosdn.127.net/8b88ef4c2d294abd872fc64f5857b5c6_0_0.null?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         comm:'',
                //                         name:'双餐盘设计，一椅四用 ',
                //                         title:'Pouch 欧式可折叠便携式宝宝餐桌椅 K05 多色可选',
                //                         com:'满499减100 | 赠',
                //                         num:'已抢56%',
                //                         style:'width:56%;',
                //                         price:'569',
                //                         delprice:'￥3899'
                //                     },
                //                     {
                //                         img:'https://haitao.nos.netease.com/1blpnmg9a26_800_800.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                         comm:'',
                //                         name:'AHC24k黄金玻尿酸保湿眼霜',
                //                         title:'A.H.C 金箔水溶黄金蜗牛玻尿酸爽肤...',
                //                         com:'满2件减30 | 包税',
                //                         num:'已抢50%',
                //                         style:'width:50%;',
                //                         price:'129',
                //                         delprice:'￥199'
                //                     }
                //                 ],
                //
                //         ],
                //         [
                //             {
                //                 img:'https://pop.nosdn.127.net/b8705a18cdd341b680bf200a10d8688b_0_0.null?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'环保亲肤 静音舒睡',
                //                 title:'【11日0点抢低至2？99】雅兰床垫全...',
                //                 com:'',
                //                 num:'300',
                //                 price:'2599',
                //                 delprice:'￥11664'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/a6686fac-2540-4cb8-ab2e-b159f38be6aa?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'有效减少口腔问题',
                //                 title:'【2支】【包邮包税】REGENERATE ...',
                //                 com:'',
                //                 num:'10',
                //                 price:'142',
                //                 delprice:'￥298'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/ead35fbe-3fc9-4b17-9a72-8d5ac00fc26a?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'颜值与实力并存的好用平价',
                //                 title:'2支装 | Za 姬芮 新能真皙美白隔离霜 ...',
                //                 com:'',
                //                 num:'300',
                //                 price:'102',
                //                 delprice:'￥156'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/2972d070-8106-4e9f-8b9c-222776d55a5a?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'防臭保暖，柔软舒适',
                //                 title:'【李佳琦推荐】朴西 棉拖鞋 女士拖鞋...',
                //                 com:'',
                //                 num:'1878',
                //                 price:'39.9',
                //                 delprice:'￥129'
                //             },
                //             {
                //                 img:'https://haitao.nosdn2.127.net/fe73aff438e9468db28850c5f65cbe7c1512612033304javu5ekf11764.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'德国小洋甘菊经典护手霜',
                //                 title:'Kamill 康蜜儿 德国小洋甘菊经典护手...',
                //                 com:'',
                //                 num:'300',
                //                 price:'65',
                //                 delprice:'￥158'
                //             }
                //         ],
                //         [
                //             {
                //                 img:'https://haitao.nos.netease.com/a1eeeb8f9cd14dfaa04e5131e34418e51557817510377jvngbnx210953.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'有效修护 强韧肌肤',
                //                 title:'【舒淇同款安心霜】LA ROCHE-POS...',
                //                 com:'',
                //                 num:'200',
                //                 price:'139',
                //                 delprice:'￥279'
                //             },
                //             {
                //                 img:'https://haitao.nosdn2.127.net/1bmgtamma68_800_800.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'干燥敏感肌必备',
                //                 title:'Curel 珂润 保湿护体 嫩白身体乳液 22...',
                //                 com:'',
                //                 num:'11',
                //                 price:'138',
                //                 delprice:'￥329'
                //             },
                //             {
                //                 img:'https://pop.nosdn.127.net/7b03ac4c-9eb0-4eb7-95fe-71247c099e3a?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'分外洁净 衣物如新',
                //                 title:'【全瓶装16斤】蓝月亮洗衣液套装16...',
                //                 com:'',
                //                 num:'300',
                //                 price:'109',
                //                 delprice:'￥330'
                //             },
                //             {
                //                 img:'https://haitao.nosdn1.127.net/8f1139bdc1ae4dc2813ebec0d9420a5b1551768080408jsvendvl12187.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'强健发根，为发根注入营养',
                //                 title:'【法国明星产品】Klorane康如 奎宁金...',
                //                 com:'',
                //                 num:'108',
                //                 price:'149',
                //                 delprice:'￥249'
                //             },
                //             {
                //                 img:'https://haitao.nos.netease.com/609e8d5eff694bb3af393034e03452601559701070546jwilqw8r10352.jpg?imageView&thumbnail=222x222&quality=80&type=webp',
                //                 comm:'',
                //                 name:'争做美眸小天使',
                //                 title:'SHANGPREE 香蒲丽 人参果修复眼...',
                //                 com:'',
                //                 num:'800',
                //                 price:'129',
                //                 delprice:'￥179'
                //             }
                //         ]
                //     ]
            }
        },
        methods:{
            llnindex(i){
                this.num = i-1;
            },
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.limit.limitLimit;
            }
        },
        beforeMount() {
            this._initData()
        }

    }
</script>

<style scoped>
    .limit-limit{
        background-color: #f0f0f0;
    }
    header{
        height: 2.18rem;
        background: url("../../../assets/images/limit-limit-header-bg.png") no-repeat;
        background-size: 100%;
    }
    main{
        margin-top: -1.61rem;
    }
</style>