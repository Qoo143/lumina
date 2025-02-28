import { createRouter, createWebHistory } from "vue-router";
//----------------------------------------------------------
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //帳戶組件
    {
      name: 'Account',
      path: '/account',
      component: () => import('@/pages/Account.vue'),
      children: [
        //預設帳戶導航為登陸子組件
        {
          path: '/',
          redirect: "/account/login"
        },
        //帳戶-登陸
        {
          name: 'login',
          path: "login",
          component: () => import('@/components/Account/Login.vue')
        },
        //帳戶-註冊
        {
          name: 'register',
          path: "register",
          component: () => import('@/components/Account/Register.vue')
        },
      ]
    },
    //渲染照片主頁
    {
      name: 'index',
      path: '/index',
      component: () => import('@/pages/Index.vue')
    },
    //上傳
    {
      name: 'upload',
      path: '/upload',
      component: () => import('@/pages/UploadPage.vue')
    },
    //我的最愛
    {
      name: 'favorites',
      path: '/favorites',
      component: () => import('@/pages/FavoritesPage.vue')
    },
    //購物車
    {
      name: 'shopping',
      path: '/shopping',
      component: () => import('@/pages/ShoppingCart.vue')
    }
  ]
})

export default router