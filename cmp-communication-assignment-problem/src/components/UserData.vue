<template>
    <section>
        <form @submit.prevent="changeActiveUser">
            <div>
                <label>Username: </label>
                <input type="text" v-model="insertedUsername"/>
            </div>
            <div>
                <label>Age: </label>
                <input type="number" v-model="insertedAge" />
            </div>
            <div>
                <button>Active User</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    emits: {
        'change-user': function (username, age) {
            if (username && age) {
                return true;
            } else {
                console.error('Missing username or age');
                return false;
            }
        }
    },
    data() {
        return {
            insertedUsername: '',
            insertedAge: ''
        }
    },
    methods: {
        changeActiveUser() {
            this.$emit('change-user', this.insertedUsername, this.insertedAge);
        }
    }
};
</script>

<style></style>