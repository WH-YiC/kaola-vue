<template>
    <div>
        <header>
            <img src="../../assets/images/login-header.png" />
            手机号登录
        </header>
        <main>
            <input class="tele" type="text" v-model="telephone" placeholder="请输入手机号" @blur="reg"/><br/>
            <div class="code" v-if="flag">
                <input class="code-input" type="text" v-model="code" placeholder="请输入短信验证码"/>
                <div>获取验证码</div>
            </div>
            <input class="code-input" v-else type="password" v-model="pass" placeholder="请输入密码"/>
            <p class="title">
                <img src="../../assets/images/error.png" v-show="this.title" />
                {{title}}
            </p>
            <p class="proto">登录即代表同意 <a href="#">服务条款</a></p>
            <input class="btn" type="button" value="登 录" @click="submit"/>
            <div class="problem" v-if="flag">
                <p><a href="#">遇到问题</a></p>
                <p @click="flag=!flag">使用密码验证登录</p>
            </div>
            <div class="problem" v-else>
                <p><a href="#">忘记密码</a></p>
                <p @click="flag=!flag">短信快捷登录</p>
            </div>
            <div class="other" @click="flag1=!flag1">
                其他登录方式
                <img :src="flag1?'./images/login-three2.png':'./images/login-three.png'"/>
            </div>
            <div class="other-login" v-show="flag1">
                <img src="../../assets/images/login-weibo.png" />
                <img src="../../assets/images/login-qq.png" />
                <img src="../../assets/images/login-zhifubao.png" />
                <img src="../../assets/images/login-email.png" />
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                telephone:"",
                pass:"",
                code:"",
                title:"",
                flag:true,
                flag1:false,
                flagTel:false
            }
        },
        methods: {
            reg() {
                this.title = "";
                let reg = /^1[358]\d{9}$/;
                if (reg.test(this.telephone)) {
                    this.flagTel = true;
                } else {
                    this.title = "手机号格式错误";
                    this.flagTel = false;
                }
            },
            submit() {
                if (this.flagTel) {
                    if (this.flag1) {//密码登录
                        if (this.pass === "") {
                            this.title = "请输入密码";
                        } else {
                            localStorage.setItem("token", this.telephone);
                            this.$router.push('/main/my')
                        }

                    } else {
                        if (this.code === "") {
                            this.title = "请输入短信验证码";
                        } else {
                            localStorage.token = this.telephone;
                            this.$router.push('/main/my')
                        }
                    }
                }else{
                    this.title = "请输入手机号";
                }
            }
        }
    }
</script>

<style scoped>
    header{
        width: 3.51rem;
        height: 0.67rem;
        line-height: 0.67rem;
        margin: 0 auto;
        text-align: center;
        font-size: 0.18rem;
        position: relative;
    }
    header>img{
        width: 0.27rem;
        position: absolute;
        top: 0.2rem;
    }
    main{
        width: 3.45rem;
        margin: 0 auto;
    }
    input{
        width: 3.45rem;
        height: 0.42rem;
        margin-bottom: 0.12rem;
        border: none;
        border-radius: 0.2rem;
        outline: none;
    }
    .tele,.code-input{
        background-color: #f5f5f5;
        padding: 0.12rem 0.4rem 0.12rem 0.1rem;
    }
    .code{
        position: relative;
    }
    .code>div{
        width: 1.23rem;
        height: 0.18rem;
        font-size: 0.14rem;
        color: #ff0000;
        text-align: center;
        border-left: 1px solid #CCCCCC;
        position: absolute;
        top: 0.12rem;
        right: 0;
    }
    .btn{
        font-size: 0.16rem;
        color: #ffffff;
        background-image: linear-gradient(-90deg, #ff0000 0%, #ff3264 100%);
    }
    .title{
        margin: 0.01rem 0 0.05rem;
        color: #ff0000;
    }
    .title>img{
        display: inline-block;
        width: 0.15rem;
        margin-right: 0.03rem;
    }
    .proto,.proto>a,.problem,.problem a{
        color: #999999;
    }
    .proto{
        margin: 0.02rem 0 0.15rem;
    }
    .proto>a{
        text-decoration: underline;
    }
    .problem{
        display: flex;
        justify-content: space-between;
    }
    .other{
        width: 1.1rem;
        margin: 0 auto;
        font-size: 0.14rem;
        margin-top: 0.73rem;
        color: #666666;
    }
    .other>img{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
    }
    .other-login{
        width: 2.2rem;
        margin: 0 auto;
        margin-top: 0.18rem;
        display: flex;
        justify-content: space-between;
    }
    .other-login>img{
        width: 0.36rem;
        height: 0.36rem;
    }
</style>