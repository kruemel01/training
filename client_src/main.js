import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  history: true
});

router.map({
  "/": {
    component: App
  }
});

router.start(Login, "#app");
