import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";
import App from "./components/App.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  history: true
});

router.map({
  "/": {
    component: Login
  }
});

router.start(App, "#app");
