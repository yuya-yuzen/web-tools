import Vue from "vue";
import VueRouter from "vue-router";

import Top from "@/views/Top.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/grouping",
    name: "Grouping",
    component: () => import("@/views/Grouping.vue"),
  },
  {
    path: "/roulette",
    name: "Roulette",
    component: () => import("@/views/Roulette.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
