<style>
  .message {
    color: red;
  }
</style>

<template>
  <div class="message">{{ msg }}</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: "Hello."
      }
    }
  }
</script>
