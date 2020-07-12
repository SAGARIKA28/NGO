import Vue from "vue";
import VueRouter from "vue-router";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import Home from "../views/Home.vue";
import WhatWeDo from "../views/WhatWeDo.vue";
import WhoAreWe from "../views/WhoAreWe.vue";
import BlogPage from "../components/BlogComponents/BlogDisplay";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/WhatWeDo",
    name: "WhatWeDo",
    component: WhatWeDo,
  },
  {
    path: "/WhoAreWe",
    name: "WhoAreWe",
    component: WhoAreWe,
  },
  {
    path: "/Blog/:id",
    name: "BlogPage",
    component: BlogPage,
  }

  //{
  // path: "/about",
  // name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () =>
  //  import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
