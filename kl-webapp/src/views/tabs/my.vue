<template>
    <div class="my">
        <header>
            <h2>我的考拉</h2>
            <img src="../../assets/images/my-bg.png" />
            <div>
                <p><img src="../../assets/images/userimg.png" /></p>
                <h1>手机用户3856</h1>
            </div>
        </header>
        <main>
            <my-list class="list list-one" :data="myList.list1"></my-list>
            <my-list class="list list-two" :data="myList.list2"></my-list>
            <my-list class="list list-three" :data="myList.list3"></my-list>
        </main>
    </div>
</template>

<script>
    import myList from '../../components/my-list'
    export default {
        name: "my",
        data(){
            return{
                myList:{
                    list1:[
                        {
                            img:'./images/my-list1-1.png',
                            title:'待付款'
                        },
                        {
                            img:'./images/my-list1-2.png',
                            title:'待发货'
                        },
                        {
                            img:'./images/my-list1-3.png',
                            title:'待收货'
                        },
                        {
                            img:'./images/my-list1-4.png',
                            title:'退款退货'
                        },
                        {
                            img:'./images/my-list1-5.png',
                            title:'全部订单'
                        }
                    ],
                    list2:[
                        {
                            img:'./images/my-list2-1.png',
                            title:'优惠券'
                        },
                        {
                            img:'./images/my-list2-2.png',
                            title:'红包'
                        },
                        {
                            img:'./images/my-list2-3.png',
                            title:'考拉豆'
                        }
                    ],
                    list3:[
                        {
                            img:'./images/my-list3-1.png',
                            title:'收藏'
                        },
                        {
                            img:'./images/my-list3-2.png',
                            title:'领券中心'
                        },
                        {
                            img:'./images/my-list3-3.png',
                            title:'会员中心'
                        },
                        {
                            img:'./images/my-list3-4.png',
                            title:'APP下载'
                        }
                    ]
                }
            }
        },
        components:{
            myList
        }
    }
</script>

<style scoped>
    header{
        padding-top: 0.105rem;
    }
    header:after{
        width: 100%;
        height: 170px;
        position: absolute;
        top: 0;
        z-index: -2;
        content: "";
        border-bottom-left-radius: 100% 10%;
        border-bottom-right-radius: 100% 10%;
        background: -webkit-gradient(linear,left top,left bottom,color-stop(60%,#fd424d),to(#fa1921));
        background: -webkit-linear-gradient(top,#fd424d 60%,#fa1921);
        background: linear-gradient(180deg,#fd424d 60%,#fa1921);
    }
    header>h2{
        height: 0.27rem;
        line-height: 0.27rem;
        color: white;
        text-align: center;
    }
    header>img{
        width: 0.39rem;
        height: 0.39rem;
    }
    header>div{
        margin-top: -0.19rem;
        display: flex;
        padding-left: 0.11rem;
    }
    header>div>p>img{
        width: 0.41rem;
        height: 0.41rem;
        border-radius: 50%;
        overflow: hidden;
        background: #d39292;
        border: 0.02rem solid #fff;
    }
    header>div>h1{
        font-size: 0.2rem;
        color: #fff;
        line-height: 0.45rem;
        font-weight: 700;
        padding-left: 0.04rem;
    }
    /*main{*/
    /*    height: 5rem;*/
    /*    background-color: #f0f0f0;*/
    /*}*/

    .list{
        width: 3.53rem;
        height: 0.8rem;
        margin: 0 auto;
        background-color: bisque;
        margin: 0.125rem;
    }
</style>