import Vue from "vue";

export default {
  getStoredToken ({ dispatch }) {
    // TODO: check if localstorage is usable
    // TODO: write unit test
    if (localStorage.Token) {
      dispatch("SET_TOKEN", localStorage.Token);
      return localStorage.Token;
    } else {
      return null;
    }
  },

  refreshToken({ dispatch }, token) {
    // TODO: write unit test
    return Vue.http.post("/", {}, {
      Authorization: token
    }).then((response) => {
      var res = response.json();
      if (res.success && res.payload && res.payload.token) {
        dispatch("SET_TOKEN", res.payload.token);
        return res.payload.token;
      } else {
        return Promise.reject("Invalid token");
      }
    });
  },

  login({ dispatch }, user, pass) {
    console.log("Credentials: " + user + ", " + pass);
  }
}
