<template>
    <!-- <h3>"TheCounter" component: {{ counter }}</h3> -->
    <h3>"TheCounter" component: {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters('numbers', ['finalCounter']) // namespace first argument, second arg array of getters
    // gives you an object that merges in to the computed properties, listing all the getters names you want (as string) for this computed 
  }
};
</script>