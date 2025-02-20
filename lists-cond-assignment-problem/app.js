const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: [],
            showList: true,
            buttonCaption: 'Hide'
        }
    },
    computed: {
        /* OTRA SOLUCIÓN, CON UNA COMPUTED PROPERTY */
        // buttonCaption() {
        //     return this.showList ? 'Hide' : 'Show';
        // }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskValue);
        },
        toggleListVisibility() {
            this.showList = !this.showList;
            this.buttonCaption = this.showList ? 'Hide' : 'Show';
        }
    }
});

app.mount('#assignment');