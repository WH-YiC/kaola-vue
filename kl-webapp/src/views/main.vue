<template>
    <div>
        <router-view class="home"></router-view>
        <kl-footer></kl-footer>
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
               this.data = a;
               // // eslint-disable-next-line no-console
               // console.log(this.data)
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