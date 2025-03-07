<template>
    <div>
        <section>
            <base-card>
                <h2>Register as a coach now!</h2>
                <coach-form @save-data="saveData"></coach-form>
            </base-card>
        </section>
    </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data); // <namespace> / <action>
            // this.$router.push('/coaches'); // redirect
            this.$router.replace('/coaches'); // same as commented one (push), but in this case you can't go back
        }
    }
}
</script>