const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{ detailsVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `, // avoid writing templates like this (a string)
    data() {
        return {
            detailsVisible: false,
            friend: {
                id: 'julie',
                name: 'Julie Jones',
                phone: '09876 543 221',
                email: 'julie@localhost.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.mount('#app');