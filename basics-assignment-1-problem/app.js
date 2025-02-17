const app = Vue.createApp({
    data() {
        return {
            name: 'Joaquín Vásquez',
            age: 28,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJj57nDvo5grp69CaIKGClP5IFetxtCJuqGg&s',
            placeholder: 'Input placeholder!'
        }
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');