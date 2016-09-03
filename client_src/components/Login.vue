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
    input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid rgba(100,100,100,0.2);
      font-family: Raleway, sans-serif;
      font-size: 1.2em;
      font-weight: 400;
      padding: 3%;
      margin: 1%;
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
      margin-top: 2%;
      padding: 3%;
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
    }
  }
</style>

<template>
  <div class="wrap">
    <h1 class="welcome">Manage your trainings.</h1>
    <div class="form">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <a v-link="'/'">Don't have an account yet?</a>
      <button type="button" v-on:click="">Login</button>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
  export default {
  }
</script>
