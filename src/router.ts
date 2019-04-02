import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Pages/Home.vue";
import Login from "./views/Pages/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Pages/About.vue")
    }
  ]
});
