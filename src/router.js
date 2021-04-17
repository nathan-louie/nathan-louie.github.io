import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home | Nathan Louie",
      bodyClass: "page-home",
    },
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("@/views/Work.vue"),
    meta: {
      title: "Work | Nathan Louie",
      bodyClass: "page-work",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About | Nathan Louie",
      bodyClass: "page-about",
    },
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "404 Not Found | Nathan Louie",
      bodyClass: "page-404",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT_TITLE = "Some Default Title";
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = (to.meta && to.meta.title) || DEFAULT_TITLE;
  });
});

export default router;
