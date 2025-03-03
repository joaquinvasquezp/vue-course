<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMember(teamId) {
      // this.$route.path // example: /teams/t1
      // const teamId = route.params.teamId;

      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];

      for (const member of members) {
        const selectUsser = this.users.find(user => user.id === member);
        selectedMembers.push(selectUsser);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMember(this.teamId);
    console.log(this.$route.query); // query parameters are not accessible as props
  },
  beforeRouteUpdate(to, _from, next) { // Routes solution, more flexible (alternative to watch, who uses props, not that flexible)
    this.loadTeamMember(to.params.teamId); 
    next();
  },
  watch: {
    teamId(newId) {
      // when ever the $route changes this executes
      this.loadTeamMember(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>