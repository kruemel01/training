import Vue from "vue";

export default {
  getStoredToken() {
    // TODO: check if localstorage is usable
    // TODO: write unit test
    if (localStorage.Token) {
      return localStorage.Token;
    } else {
      return null;
    }
  },

  refreshToken(token) {
    // TODO: write unit test
    return Vue.http.post("/", {}, {
      Authorization: token
    }).then((response) => {
      var res = response.json();
      if (res.success && res.payload && res.payload.token) {
        return res.payload.token;
      } else {
        return Promise.reject("Invalid token");
      }
    });
  }
}
