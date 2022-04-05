import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ExercisesPage from '../pages/ExercisesPage.vue'
import ProfilePage from '../pages/ProfilePage'
import PaymentsPage from '../pages/PaymentsPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import AttentionPage from '../pages/AttentionPage.vue'
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
    path: "/exercises/attention",
    name: "AttentionPage",
    component:AttentionPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component:RegisterPage
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
