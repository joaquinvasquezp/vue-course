const app = Vue.createApp({
    data() {
        return {
            name: '',
            name2: '',
            confirmedName: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello World!');
        },
        setName(event) {
            this.name = event.target.value;
        },
        setName2(event) {
            this.name2 = event.target.value;
        },
        updateName() {
            this.confirmedName = this.name2;
        }
    }
});

app.mount('#assignment');