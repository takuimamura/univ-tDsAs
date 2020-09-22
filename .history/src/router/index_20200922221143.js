import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";

Vue.use(VueRouter);

// Amplify
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";

Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/header",
    name: "Header",
    meta: { title: "header" },
    component: Header,
  },
  {
    path: "/body",
    name: "Body",
    meta: { title: "body" },
    component: Body,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
