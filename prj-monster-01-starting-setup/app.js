function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + max;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHP: 100,
            playerHP: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    watch: {
        playerHP(value) {
            if (value <= 0 && this.monsterHP <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }

        },
        monsterHP(value) {
            if (value <= 0 && this.playerHP <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHP < 0) return {width: '0%'};

            return {width: this.monsterHP + '%'}
        },
        playerHealthBar() {
            if (this.playerHP < 0) return {width: '0%'};

            return {width: this.playerHP + '%'}
        },
        specialAttackCondition() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12); // random number between 5 a 12
            this.monsterHP -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15); // random number between 8 a 15
            this.playerHP -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25); // random number between 5 a 12
            this.monsterHP -= attackValue;
            this.addLogMessage('player', 'special_attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healthValue = getRandomValue(8, 20); // random number between 8 a 20
            if (this.playerHP + healthValue > 100) {
                this.playerHP = 100;
            } else {
                this.playerHP += healthValue;
            }
            this.addLogMessage('player', 'heal', healthValue);
            this.attackPlayer();
        },
        restartGame() {
            this.monsterHP = 100;
            this.playerHP = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');