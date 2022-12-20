<template>
  <transition name="fade" mode="out-in">
    <router-view :blog = "blog" />
</transition>
</template>

<script>

import Blog from './data/data.js'; 

export default {
  name: 'App',
  data() {
    return {
      blog : Blog,
    }
  },
  components: {}
}
</script>

<style>
fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
