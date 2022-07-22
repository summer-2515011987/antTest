import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/components/layout'
// import login from './login'
// import page from './page'
// import shop from './shop'
Vue.use(VueRouter)


const routes = [{
    path: "/",
    redirect: "/login"

  },
  // 登录

  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login')
  },
  // 首页
  {
    path: "/index",
    name: "Index",
    component: layout,
    children: [{
      path: "",
      component: () => import('@/views/page')
    }]
  },
  // 商品管理
  {
    path: "/shop",
    name: "Shop",
    component: layout,
    children: [{
        path: "add",
        name: "ShopAdd",
        component: () => import('@/views/shoppingGoods/goodsAdd')
      },
      {
        path: "list",
        name: "ShopList",
        component: () => import('@/views/shoppingGoods/goodsList')
      },
      {
        path: "publish",
        name: "ShopPublish",
        component: () => import('@/views/shoppingGoods/goodsPublish')
      }
    ]
  }
  // 测试页面
]
 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router