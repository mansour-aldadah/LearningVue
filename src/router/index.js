import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import about from "../views/AboutView.vue";
import Help from "../views/HelpView.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
