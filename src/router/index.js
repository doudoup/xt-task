import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Create from '@/components/Create'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
