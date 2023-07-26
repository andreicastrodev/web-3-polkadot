import { createRouter, createWebHistory } from "vue-router";
import Landing from "./pages/Landing.vue";
import Dashboard from "./pages/user/UserDashboard.vue";
// there is also createWebHashHistory and createMemoryHistory

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Dashboard }],
});



export default router;