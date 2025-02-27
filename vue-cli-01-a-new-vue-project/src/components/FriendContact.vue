<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)': '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: false,
            default: 'default@localhost.com'
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value) {
            //     return value === '1' || value === '0';
            // }
        }
    },
    emits: ['toggle-favorite', 'delete-friend'],
    //{
        // 'toggle-favorite': function(id) { NOT REQUIRED, BUT RECOMMENDED
        //     if (id) {
        //         return true;
        //     } else {
        //         console.warn('ID is missing!');
        //         return false;
        //     }
        // }
    //},
    data() {
        return {
            detailsVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id); // custom event (listen from inside the parent), always use camel-case
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id);
        }
    }
}
</script>