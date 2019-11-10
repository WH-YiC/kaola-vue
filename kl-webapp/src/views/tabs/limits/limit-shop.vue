<template>
    <div class="limit-shop">
        <header>
            <limit-shop-nav @lsnindex="lsnindex"></limit-shop-nav>
        </header>
        <main>
            <limit-shop-recommend :data="data" v-if="num===1"></limit-shop-recommend>
            <limit-shop-beauty v-else-if="num===2"></limit-shop-beauty>
            <limit-shop-movement v-else-if="num===3"></limit-shop-movement>
            <limit-shop-bag v-else-if="num===4"></limit-shop-bag>
            <limit-shop-infant v-else-if="num===5"></limit-shop-infant>
            <limit-shop-food v-else-if="num===6"></limit-shop-food>
            <limit-shop-digital v-else-if="num===7"></limit-shop-digital>
        </main>
    </div>
</template>

<script>
    import dataApi from "../../../api/dataApi";
    import limitShopNav from '../../../components/limit-shop/limit-shop-nav'
    import limitShopRecommend from '../../../components/limit-shop/limit-shop-recommend'
    import limitShopBeauty from '../../../components/limit-shop/limit-shop-beauty'
    import limitShopMovement from '../../../components/limit-shop/limit-shop-movement'
    import limitShopBag from '../../../components/limit-shop/limit-shop-bag'
    import limitShopInfant from '../../../components/limit-shop/limit-shop-infant'
    import limitShopFood from '../../../components/limit-shop/limit-shop-food'
    import limitShopDigital from '../../../components/limit-shop/limit-shop-digital'
    export default {
        name: "limit-shop",
        data(){
            return{
                num:1,
                data:{}
            }
        },
        methods:{
            lsnindex(i){
                this.num = i;
            },
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.limit.limitShop;
            }
        },
        beforeMount() {
            this._initData()
        },
        components:{
            limitShopNav,
            limitShopRecommend,
            limitShopBeauty,
            limitShopMovement,
            limitShopBag,
            limitShopInfant,
            limitShopFood,
            limitShopDigital
        }
    }
</script>

<style scoped>
    .limit-shop{
        background: url("../../../assets/images/limit-shop-header-bg.png") no-repeat;
        background-size: 100%;
    }
</style>