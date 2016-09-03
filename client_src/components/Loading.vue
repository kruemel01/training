<style lang="sass" scoped>

  $loader-color: rgba(156,39,176,1);
  $loader-size: 40px;
  $loader-animation-duration: 1.15s;

  .loader, .loader__figure {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .loader {
    overflow: visible;
    padding-top: $loader-size;
    width: $loader-size;
    height: $loader-size;
  }
  .loader__figure {
    width: $loader-size;
    height: $loader-size;
    box-sizing: border-box;
    border: 0 solid $loader-color;
    border-radius: 50%;
    animation-name: loader__figure;
    animation-duration: $loader-animation-duration;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  .loader__label {
    float: left;
    margin-left: 50%;
    transform: translateX(-50%);
    margin: 30px 0 0 50%;

    font-size: 1.5em;
    white-space: nowrap;
    color: rgba(100,100,100,0.8);
    font-weight: 300;
  }

  @keyframes loader__figure {
    0% {
      width: 0;
      height: 0;
    }
    30% {
      width: $loader-size;
      height: $loader-size;
      border-width: $loader-size/2;
      opacity: 1;
    }
    100% {
      width: $loader-size;
      height: $loader-size;
      border-width: 0;
      opacity: 0;
    }
  }
</style>

<template>
  <div class="loader">
    <div class="loader__figure"></div>
    <p class="loader__label">Loading</p>
  </div>
</template>

<script>
  export default {

  }
</script>
