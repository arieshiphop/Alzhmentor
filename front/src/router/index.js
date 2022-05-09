import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ExercisesPage from "../pages/ExercisesPage.vue";
import ProfilePage from "../pages/ProfilePage";
import PaymentsPage from "../pages/PaymentsPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import AttentionPage from "../pages/AttentionPage.vue";
import AdminPage from "../pages/AdminPage.vue";
import LangPage from "../pages/LangPage.vue";
import MemoryPage from "../pages/MemoryPage.vue";
import { getIfIsLogged } from "@/services/state.js";

function IsLogged() {
  return getIfIsLogged();
}

const routes = [
  {
    path: "/",
    name: "HomePage",
    get component() {
      if (IsLogged()) {
        return ProfilePage;
      } else {
        return HomePage;
      }
    },
  },
  {
    path: "/exercises",
    name: "ExercisesPage",
    component: ExercisesPage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/exercises/payments",
    name: "PaymentsPage",
    component: PaymentsPage,
  },
  {
    path: "/exercises/attention",
    name: "AttentionPage",
    component: AttentionPage,
  },
  {
    path: "/exercises/language",
    name: "LangPage",
    component: LangPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/exercises/memory",
    name: "MemoryPage",
    component: MemoryPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
