import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ExercisesPage from '../pages/ExercisesPage.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: "/exercises",
    name: "ExercisesPage",
    component:ExercisesPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
