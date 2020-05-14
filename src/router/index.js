import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import List from '../views/List.vue'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"list",
        name:"List",
        component:List
      },
      {
        path:"user",
        name: 'User',
        component: User,
      }
    ]
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
]

const router = new VueRouter({
  routes
})

export default router
