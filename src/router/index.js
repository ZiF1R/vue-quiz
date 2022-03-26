import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";

const routes = [
  {
    path: "/",
    name: "StartView",
    component: StartView,
  },
  {
    path: "/quiz",
    name: "QuizView",
    component: () => import("../views/QuizView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
