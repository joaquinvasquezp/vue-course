const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num = 1) {
      this.counter = this.counter + num;
    },
    reduce() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      // event.preventDefault(); vanilla JavaScript
      // v-on:submit  ".prevent" -> Vue.js method
      alert('Submitted!');
    },
    confirmName() {
      // v-on:keyup ".enter" -> when enter key is pressed this method is called
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
