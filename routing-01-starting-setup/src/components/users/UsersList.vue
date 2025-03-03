<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      // trigger navigation (router)
      this.$router.push('/teams');
      // there are more $router built-in methods (check documentation)
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList component beforeRouteLeave')
    console.log(to, from);
    console.log("SISISI");
    
    if (this.changesSaved) {
      next();
    } else {
      const userWantToLeave = confirm('Are you sure? You got unsaved changes!');
      next(userWantToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>