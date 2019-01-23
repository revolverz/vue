new Vue({
    el: '#app',
    data: {
        playerHealth: 70,
        monsterHealth: 90,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calcDamage(3, 10);
            
            if (this.checkWin()) {
                return;
            }

            var damage = this.calcDamage(3, 10);
            
            this.playerHealth -= this.calcDamage(12, 5);
            this.checkWin();

        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        calcDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }

    }
});