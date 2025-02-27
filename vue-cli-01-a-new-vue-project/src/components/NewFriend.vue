<template>
    <form @submit.prevent="newFriend">
        <div>
            <label>Name: </label>
            <input type="text" v-model="enteredName" />
        </div>

        <div>
            <label>Phone: </label>
            <input type="text" v-model="enteredPhone" />
        </div>

        <div>
            <label>Email: </label>
            <input type="text" v-model="enteredEmail" />
        </div>

        <div>
            <button>Create</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['new-friend'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    }, 
    methods: {
        newFriend() {
            this.$emit('new-friend', this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
};
</script>
