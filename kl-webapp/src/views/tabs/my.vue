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
            <div class="list list-one">
                <a href="#">
                    <img src="../../assets/images/my-list1-1.png" />
                    <div>
                        待付款
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list1-2.png" />
                    <div>
                        待发货
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list1-3.png" />
                    <div>
                        待收货
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list1-4.png" />
                    <div>
                        退款退货
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list1-5.png" />
                    <div>
                        全部订单
                    </div>
                </a>
            </div>
            <div class="list list-two">
                <a href="#">
                    <img src="../../assets/images/my-list2-1.png" />
                    <div>
                        优惠券
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list2-2.png" />
                    <div>
                        红包
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list2-3.png" />
                    <div>
                        考拉豆
                    </div>
                </a>
            </div>
            <div class="list list-three">
                <a href="#">
                    <img src="../../assets/images/my-list3-1.png" />
                    <div>
                        收藏
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list3-2.png" />
                    <div>
                        领券中心
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list3-3.png" />
                    <div>
                        会员中心
                    </div>
                </a>
                <a href="#">
                    <img src="../../assets/images/my-list3-4.png" />
                    <div>
                        APP下载
                    </div>
                </a>
            </div>
            <div class="list my-promise">
                <div class="my-promise-title">
                    <h3>
                        考拉承诺 | 正品保障
                    </h3>
                    <p>
                        12项保障
                    </p>
                </div>
                <div class="my-promise-text">
                    <img src="../../assets/images/my-list4-1.png"/>
                    <span>考拉自营</span>
                    <img src="../../assets/images/my-list4-2.png"/>
                    <span>全球直采</span>
                    <img src="../../assets/images/my-list4-3.png"/>
                    <span>假一赔十</span>
                    <img src="../../assets/images/my-list4-4.png"/>
                    <span class="pos">售后无忧</span>
                </div>
                <div class="my-promise-more">
                    <a href="#">查看详情</a>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "my"
    }
</script>

<style scoped>
    .my{
        height: 6.17rem;
        background-color: #f0f0f0;
        z-index: -1;
    }
    header{
        padding-top: 0.105rem;
        width: 100%;
        height: 1.59rem;
        border-bottom-left-radius: 100% 10%;
        border-bottom-right-radius: 100% 10%;
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
    main{
        margin-top: -0.465rem;
    }
    .list{
        width: 3.53rem;
        margin: 0 auto;
        background-color: white;
        margin-bottom: 0.125rem;
        border-radius: 0.04rem;
    }
    .list{
        display: flex;
    }
    .list>a{
        flex: 1;
        text-align: center;
    }
    .list>a>img{
        margin: 0 auto;
    }
    .list-one{
        padding: 0.2rem 0 0.15rem;
    }
    .list-one img{
        width: 0.25rem;
        height: 0.25rem;
        padding-bottom: 0.065rem;
    }
    .list-two{
        padding: 0.16rem 0 0.12rem;
    }
    .list-two img{
        width: 0.2rem;
        height: 0.2rem;
        padding-bottom: 0.05rem;
    }
    .list-three{
        padding: 0.14rem 0;
    }
    .list-three img{
        width: 0.3rem;
        height: 0.3rem;
        padding-bottom: 0.06rem;
    }
    .my-promise{
        padding: 0.09rem;
        display: block;
        position: relative;
    }
    .my-promise-title{
        display: flex;
        justify-content: space-between;
    }
    .my-promise-title>h3{
        color: #ff0000;
    }
    .my-promise-title>p{
        color: #999999;
    }
    .my-promise-text{
        display: flex;
        vertical-align: middle;
        padding-top: 0.03rem;
    }
    .my-promise-text>img{
        width: 0.14rem;
        height: 0.14rem;
        padding-right: 0.03rem;
    }
    .my-promise-text>span{
        padding-right: 0.07rem;
        color: #999999;
    }
    .pos{
        position: absolute;
        bottom: -0.08rem;
        right: 0.72rem;
    }
    .my-promise-more{
        width: 60px;
        height: 18px;
        position: absolute;
        right: 9px;
        bottom: 9px;
        background-image: linear-gradient(270deg,#ff4e77,red);
        border-radius: 10px;
        font-size: 11px;
        text-align: center;
        line-height: 18px;
    }
    .my-promise-more>a{
        color: white;
    }
</style>