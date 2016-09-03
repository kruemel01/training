import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import Loading from "./components/Loading.vue";
import Login from "./components/Login.vue";
import App from "./components/App.vue";
import {
  getStoredToken
} from "./actions";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "/api/v1";

var router = new VueRouter({
  history: true
});

router.map({
  "/": {
    component: Loading
  },
  "/login": {
    component: Login
  }
});

router.start(App, "#app");

var storedToken = getStoredToken();

if (storedToken) {
  refreshToken(storedToken);
} else {
  router.go("/login");
}
