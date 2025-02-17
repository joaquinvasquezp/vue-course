const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h1>Finish the course and learn Vue!</h1>',
            courseGoalB: '<i>Master Vue and build amazing apps!</i>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');