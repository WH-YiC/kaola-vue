import Vue from 'vue'
import main from '../views/main'
import home from '../views/tabs/home'
import sort from '../views/tabs/sort'
import limit from '../views/tabs/limit'
import cart from '../views/tabs/cart'
import my from '../views/tabs/my'

import limited from '../views/tabs/limits/limit-limit'
import limitShop from '../views/tabs/limits/limit-shop'
import limitVolume from '../views/tabs/limits/limit-volume'
import limitSeckil from '../views/tabs/limits/limit-seckil'

import login from '../views/tabs/login'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/main'
        },
        {
            path: '/main',
            component: main,
            //子路由
            children:[
                {path:'',component:home},
                {path:'sort',component:sort},
                {path:'limit',component:limit,
                    children:[
                        {path:'limited',component:limited},
                        {path:'limitShop',component:limitShop},
                        {path:'limitVolume',component:limitVolume},
                        {path:'limitSeckil',component:limitSeckil}
                    ]
                },
                {path:'cart',component:cart},
                {path:'my',component:my,meta: {requireAuth: true,}},
                {path:'login',component:login}
            ]
        }
    ]
})

router.beforeEach((to,from,next)=>{

    let token = localStorage.getItem('token')
    next()

    if (to.meta.requireAuth) {//如果需要跳转 ，往下走（1）
        if (token) {//判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
            if (to.path === '/my') {//判断下一个路由是否为要验证的路由（3）
                next();// 如果是直接跳到首页，
            } else {//如果该路由不需要验证，那么直接往后走
                next();
            }
        } else {
            // eslint-disable-next-line no-console
            // alert('请登录');//如果没有登陆过，或者token 过期， 那么跳转到登录页
            next('/main/login');
        }
    } else {                           //不需要跳转，直接往下走
        next();
    }

})


export default router