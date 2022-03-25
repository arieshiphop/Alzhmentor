import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ExercisesPage from '../pages/ExercisesPage.vue'
import ProfilePage from '../pages/ProfilePage'
import PaymentsPage from '../pages/PaymentsPage.vue'
import RegLogPage from '../pages/Reg-LogPage.vue'
const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: "/exercises",
    name: "ExercisesPage",
    component:ExercisesPage
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component:ProfilePage
  },
  {
    path: "/exercises/payments",
    name: "PaymentsPage",
    component:PaymentsPage
  },
  {
    path: "/",
    name: "RegLogPage",
    component:RegLogPage
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
