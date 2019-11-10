<template>
    <div>
        <router-view class="home"></router-view>
        <kl-footer :data="data"></kl-footer>
    </div>

</template>

<script>
    import dataApi from "../api/dataApi";
    import footer from '../components/footer'
    export default {
        name: "kmain",
        components: {
            'kl-footer':footer
        },
        data(){
          return{
              data:[]
          }
        },
        methods:{
           async _initData(){
               let a = await dataApi.getData();
               this.data = a.footerNav;
           }
        },
        beforeMount() {
            this._initData()
        }
    }
</script>

<style scoped>
.home{
    margin-bottom: 0.5rem;
}
</style>