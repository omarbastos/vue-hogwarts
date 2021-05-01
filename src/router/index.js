import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/house-profile",
    name: "HouseProfile",
    beforeEnter: (to, from, next) => {
      if (from.name === "Home") {
        next();
      } else {
        next({ name: "Home" });
      }
    },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HouseProfile.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
