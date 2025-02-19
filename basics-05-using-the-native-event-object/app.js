const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  watch: {
    /* watch properties are used to watch for changes in the data object */
    /* They are particularly useful when you need to perform asynchronous operations or when you need to perform complex
    logic that cannot be easily handled by computed properties */
  },
  computed: {
    /* computed properties are cached and only re-evaluated when dependencies change */
    fullName() {
      return this.name === '' ? '' : this.name + ' ' + 'Doe';
    }
  },
  methods: {
    /* ONLY USE METHODS SECTION WHEN YOU NEED TO RE-EXECUTE A VALUE WHEN ANYTHING CHANGES */
    /* EVENTS -> METHODS SECTION */
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
