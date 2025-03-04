<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['userIsAuthenticated'])
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10}); // mutation with a payload (arguments)}
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // }); Another way to call the mutation, same results

      // this.$store.dispatch('numbers/increase', {value: 10}); // actions (namespace)
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    }
  }
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