import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import store from "./store";

import Loading from "./components/Loading.vue";
import Login from "./components/Login.vue";
import App from "./components/App.vue";
import NotFound from "./components/NotFound.vue";

import actions from "./actions";

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
  },
  "/dash": {
    component: Login
  },
  "/*": {
    component: NotFound
  }
});

router.start(App, "#app");

var storedToken = actions.getStoredToken(store);

if (storedToken) {
  actions.refreshToken(store, storedToken).then((newToken) => {
  });
} else {
  router.go("/login");
}
