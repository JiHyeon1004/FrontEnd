import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import UserView from '../views/UserView'
import BoardView from '../views/BoardView'
import BoardList from '../components/BoardList.vue'
import BoardWrite from '../components/BoardWrite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
  {
    path: '/user/:username',
    name: 'user',
    component: UserView
  },
  {
    path: '/board',
    name: 'board',
    component: BoardView,
    children: [
      {
        path: 'list',
        component: BoardList,
      },
      {
        path: 'write',
        component: BoardWrite,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
