const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            paragraphVisibility: true,
            inputBackgroundColor: ''
        }
    },
    computed: {
        userInputClass() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.paragraphVisibility,
                hidden: !this.paragraphVisibility
            }
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphVisibility = !this.paragraphVisibility;
        }
    }
});

app.mount('#assignment');