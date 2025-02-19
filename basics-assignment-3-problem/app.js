const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    computed: {
        checkResult() {
            if (this.result < 37) {
                return 'Not there yet';
            } else if (this.result === 37) {
                return this.result;
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        result() {
            /* only triggers if result changes */
            const that = this;
            console.log(that.result);
            setTimeout(function() {
                that.result = 0;
            }, 5000);
        }
    },
    methods: {
        addNumber(number) {
            this.result += number;
        },
    }
});

app.mount('#assignment');