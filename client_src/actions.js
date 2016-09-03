import Vue from "vue";

export default {
  getStoredToken ({ dispatch }) {
    // TODO: check if localstorage is usable
    // TODO: write unit test
    if (localStorage.Token) {
      dispatch("SET_TOKEN", localStorage.Token);
      Vue.http.headers.common["Authorization"] = localStorage.Token;
      return localStorage.Token;
    } else {
      return null;
    }
  },

  refreshToken({ dispatch }, token) {
    // TODO: write unit test
    return Vue.http.post("auth/token", {}, {
      Authorization: token
    }).then((response) => {
      var res = response.json();
      if (res.success && res.payload && res.payload.token) {
        dispatch("SET_TOKEN", res.payload.token);
        localStorage.Token = res.payload.token;
        Vue.http.headers.common["Authorization"] = res.payload.token;
        return res.payload.token;
      } else {
        return Promise.reject("Invalid token");
      }
    });
  },

  login({ dispatch }, username, password) {
    return Vue.http.post("auth", {
      username,
      password
    }).then((response) => {
      var res = response.json();
      if (res.success && res.payload && res.payload.token) {
        dispatch("SET_TOKEN", res.payload.token);
        localStorage.Token = res.payload.token;
        Vue.http.headers.common["Authorization"] = res.payload.token;
        return res.payload.token;
      } else {
        return Promise.reject("Invalid credentials.");
      }
    });
  }
}
