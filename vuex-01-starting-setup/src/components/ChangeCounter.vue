<template>
    <!-- <button @click="addOne">Add 2</button> -->
    <!-- <button @click="inc">Add 2</button> -->
    <button @click="increment">Add 2</button>
    <button @click="increase({value: 12})">Add 12</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // }
        ...mapActions('numbers', ['increment', 'increase'])
        // gives you an object that merges in to the component methods, listing all the actions names you want (as string) as methods in this component
        // ...mapActions({
        //     inc: 'increment',
        //     increase: 'increase'
        // }) another way of call in it (same goes for mapGetters)
    }
}
</script>