<template>
    <div>
    <router-view></router-view>
    <limit-footer :data="data"></limit-footer>
    </div>
</template>

<script>
    import dataApi from "../../api/dataApi";
    import limitFooter from '../../components/limit-footer'
    export default {
        name: "limit",
        components:{
            limitFooter:limitFooter
        },
        data(){
            return{
                data:{}
            }
        },
        methods:{
            async _initData(){
                let a = await dataApi.getData();
                this.data = a.limitfooter;
            }
        },
        beforeMount() {
            this._initData()
        }
    }
</script>

<style scoped>

</style>