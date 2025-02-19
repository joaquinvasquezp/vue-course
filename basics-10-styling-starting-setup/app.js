const app = Vue.createApp({
    data() {
        return  {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false
        }
    },
    computed: {
        boxBClasses() {
            return { active_color: this.boxBSelected }; /* active_color is a class name (check .css) */
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            } else if (box === 'D') {
                this.boxDSelected = !this.boxDSelected;
            }
        }
    }
});

app.mount('#styling');