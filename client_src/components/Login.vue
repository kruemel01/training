<style scoped>
  h1 {
    color: #9C27B0;
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
</style>

<template>
  <div class="wrap">
    <h1 class="welcome">Manage your trainings.</h1>
    <form class="" action="index.html" method="post">
      <input type="text" name="username" value="">
    </form>
    <div class="loader"></div>
  </div>
</template>

<script>
  export default {
  }
</script>
