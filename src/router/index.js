import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RepoDetails from '@/views/RepoDetails.vue'
// import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/repo/:id',
    name: 'Repo',
    component: RepoDetails
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: NotFound
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
