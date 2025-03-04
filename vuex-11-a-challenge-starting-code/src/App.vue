<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>