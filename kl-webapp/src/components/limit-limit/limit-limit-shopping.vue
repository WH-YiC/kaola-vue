<template>
    <div>
        <div class="realTime">
            <h3>实时热卖</h3>
            <div>
                <div :key="index" v-for="(e,index) in data[0]">
                    <img :src="e.img" />
                    <p>{{e.price}}</p>
                    <del>{{e.delprice}}</del>
                </div>
            </div>
        </div>
        <limit-limit-shopped :data="data[1]"></limit-limit-shopped>
    </div>
</template>

<script>
    import limitLimitShopped from '../../components/limit-limit/limit-limit-shopped'
    export default {
        name: "limit-limit-shopping",
        props:["data"],
        components:{
            limitLimitShopped
        }
    }
</script>

<style scoped>
    .realTime{
        width: 3.51rem;
        margin: 0 auto;
        padding: 0.09rem;
        margin-bottom: 0.09rem;
        background-color: white;
        border-radius: 0.05rem;
    }
    h3{
        height: 0.22rem;
        line-height: 0.22rem;
        font-size: 0.16rem;
        color: #1e1e1e;
        font-weight: 600;
        margin-bottom: 0.06rem;
    }
    img{
        width: 0.79rem;
        height: 0.79rem;
    }
    .realTime>div{
        display: flex;
        justify-content: space-between;
        padding: 0 0.03rem;
    }
    p{
        height: 0.1398rem;
        line-height: 0.1398rem;
        margin-top: 0.06rem;
        font-size: 0.13rem;
        font-weight: 600;
        color: #FF1E32;
    }
    del{
        display: inline-block;
        height: 0.1398rem;
        line-height: 0.1398rem;
        color: #999999;
    }
</style>