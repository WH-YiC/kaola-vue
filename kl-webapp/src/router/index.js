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
                {path:'my',component:my}
            ]
        }
    ]
})

// // 全局路由guard     前置guard user->main->login
// router.beforeEach((to,from,next)=>{
//     // to from $route
//     let token = localStorage.getItem('token')
//     next()
//     if(token){
//         next('/main')
//     }else {
//         next('/login')
//     }
// })
//
// // eslint-disable-next-line no-unused-vars
// router.afterEach((to,from)=>{
//     window.confirm('您真的需要退出吗？')
//     // eslint-disable-next-line no-console
//     console.log('afterEach')
// })

export default router