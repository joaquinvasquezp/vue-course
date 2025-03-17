<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert
  },
  data() {
    return {
      alertTitle: 'Delete the User?' // Vue.js merge the mixins with the options of this component (two data())
      //alertIsVisible: true - component option priority (ovewrites if there is a clash)
    };
  },
  mixins: [
    alertMixin // mixins doesn't work for components
  ],
};
</script>