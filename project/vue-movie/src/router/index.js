import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../vies/BoardView'
import BoardList from '@/components/board/BoardList.vue'
import BoardCreate from '@/components/board/BoardCreate.vue'
import BoardUpdate from '@/components/board/BoardUpdate.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board',
    name: 'board',
    component: BoardView,
    children: [
      {
        path: "",
        name: "boardList",
        component: BoardList
      },
      {
        path: "create",
        name: "boardCreate",
        component: BoardCreate
      },
      {
        path: "update",
        name: "boardUpdate",
        component: BoardUpdate
      },
      {
        path: ":id",
        name: "boardDetil",
        component: BoardDetail
      },


    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
