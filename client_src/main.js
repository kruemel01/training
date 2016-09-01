import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  history: true
});

router.map({
  "/": {
    component: App
  }
});

router.start(App, "body");
