import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/user',name:'系统管理',component:()=>import('@/components/Sys/User')},
        {path:'/role',name:'角色管理',component:()=>import('@/components/Sys/Role')},
        {path:'/menu',name:'菜单管理',component:()=>import('@/components/Sys/Menu')}
    ]
    }
  ]
})
