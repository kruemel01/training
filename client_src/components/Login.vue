<style lang="sass" scoped>
  h1 {
    color: rgba(156,39,176,1);
    font-weight: 300;
    text-align: center;
  }
  .wrap {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 50%;
    transform: translate(0%, -50%);
  }
  .form {
    position: relative;
    max-width: 300px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0%);
    span {
      display: none;
      font-size: 0.8em;
      font-weight: 600;
      color: rgba(216,27,96,1);
      text-align: center;
      margin-top: 10px;
      width: 100%;
      &.visible {
        display: block;
      }
    }
    input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid rgba(100,100,100,0.2);
      font-family: Raleway, sans-serif;
      font-size: 1.2em;
      font-weight: 400;
      padding: 3%;
      margin: 1% 0%;
      transition: all 0.2s;
      &:focus {
        outline: none;
        border-color: rgba(100,100,100,0.4);
      }
    }
    a {
      display: inline-block;
      width: 70%;
      font-size: 0.7em;
      text-align: center;
      font-weight: 600;
      float: left;
      text-decoration: none;
      padding: 5px 0%;
    }
    button {
      width: 30%;
      height: 43px;
      padding: 3%;
      margin: 1% 0%;
      border: 1px solid rgba(100,100,100,0.2);
      background-color: rgba(255,255,255,0);
      text-transform: uppercase;
      color: rgba(156,39,176,1);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        border-width: 5px;
        border-color: rgba(100,100,100,0.4);
      }
      &:focus {
        outline: none;
      }
      &:active {
        border-color: rgba(156,39,176,1);
      }
      &.disabled {
        color: rgba(200,200,200,1);
        cursor: default;
        &:hover {
          border-width: 1px;
          border-color: rgba(100,100,100,0.2);
        }
      }
    }
  }
</style>

<template>
  <div class="wrap">
    <h1 class="welcome">Manage your trainings.</h1>
    <div class="form">
      <input type="text" v-model="username" placeholder="Username" v-bind:class="{ 'err': errUsername }">
      <input type="password" v-model="password" placeholder="Password" v-bind:class="{ 'err': errPassword }">
      <a v-link="'/'">Don't have an account yet?</a>
      <button type="button" v-bind:class="{ 'disabled': submitted }" v-on:click="login(username, password)">Login</button>
      <span v-bind:class="{ 'visible': errmsg }">{{ errmsg }}</span>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
  import nprogress from "nprogress-npm";
  import actions from "../actions";
  export default {
    data () {
      return {
        username: null,
        password: null,
        errUsername: false,
        errPassword: false,
        errInvalidCred: false,
        submitted: false
      }
    },
    computed: {
      errmsg() {
        if (this.errUsername && this.errPassword) {
          return "Please fill out the username and password fields.";
        } else if (this.errUsername) {
          return "Please fill out the username field.";
        } else if (this.errPassword) {
          return "Please fill out the password field.";
        } else if (this.errInvalidCred) {
          return "Invalid username or password.";
        } else {
          return false;
        }
      }
    },
    vuex: {
      actions: {
        login(store) {
          if (!this.submitted && this.username && this.password) {
            this.submitted = true;
            this.errInvalidCred = false;
            this.errUsername = false;
            this.errPassword = false;
            nprogress.start();
            actions.login(store, this.username, this.password).then(
              (token) => {
                nprogress.done();
                this.$router.go("/dash");
              }
            ).catch((err) => {
              this.errInvalidCred = true;
              this.password = "";
              this.submitted = false;
              nprogress.done();
            });
          } else if (!this.submitted) {
            this.errUsername = !this.username;
            this.errPassword = !this.password
          }
        }
      }
    }
  }
</script>
