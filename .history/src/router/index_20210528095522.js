import Vue from 'vue'
import Router from 'vue-router'

// 模板框架
const Main = resolve => require(['@/views/menu/main'],resolve)

// 登录页面
const login = resolve => require(['@/views/login/login'],resolve);

// 首页
const homePage = resolve => require(['@/views/homePage/homePage'],resolve);













Vue.use(Router)

// import {routerBreadcrumb} from '@/utils/pageData.js'
// import store from '@/store'

const router = new Router({
  // mode: 'history',
  routes: [
    { path: '/login',name: 'login',component: login},

    {

      path: '/',
      meta: { requiresAuth: true },
      component: Main,

      children: [

        {path: 'homePage',name: 'homePage',component: homePage},



      ]

  },

  ]
})


/*****
 * 路由跳转的时候 对cookie存储的值进行校验 如果找不到或者丢失
 * 强制跳转到登陆页  进行重新登陆
 * ****/
import {getCookie} from '@/config/cookie'
router.beforeEach((to, from, next) => {


  const token = getCookie("tokenM");
  // && (!token || token === null || token == '' )
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // window.location.href = '/';
    console.log('233232')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
  } else {

    console.log('dsad')
    /****路由面包屑注入路由数据***/
    // if (to.meta.list) {
    //   let list = to.meta.list;
    //   store.commit('changeBreadcumb', { list })
    // }

    next()
  }
  // next()
})

export default router
