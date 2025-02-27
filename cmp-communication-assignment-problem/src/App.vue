<template>
    <section>
        <header><h1>Communication Assignment</h1></header>
        <user-data @change-user="changeUserData"></user-data>
        <active-user
            :username="user.username"
            :age="user.age"
        ></active-user>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: 'jvasquez',
                age: 28
            }
        }
    },
    methods: {
        changeUserData(username, age) {
            this.user = {
                username: username,
                age: +age // "+" before, transforms the string to a number
            }
        }
    }
};
</script>

<style></style>