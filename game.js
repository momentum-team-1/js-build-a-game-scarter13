// Need a game function that defines the board and sets the start positions.  All of the game logic happens here

class Game {
    constructor () {
        let canvas = document.querySelector('#gameboard')
        let screen = canvas.getContext('2d')
        let gameSize = { x: canvas.width, y: canvas.height}
        this.player = new Player (gameSize)
        this.coin = new Coin (gameSize)
        this.enemy = new Enemy
        let animate = () => {
            this.update()
            this.drawPlayer(screen, gameSize)
            this.drawCoin(screen)
            this.drawEnemy(screen)
            requestAnimationFrame(animate)
        }
        animate ()
    }


    drawPlayer (screen, gameSize) {
        screen.clearRect(0, 0, gameSize.x, gameSize.y)
        screen.beginPath()
        screen.rect(145,145,160,160)
        screen.stroke()
        screen.fillStyle= "blue"
        let startingXPosition = this.player.center.x - this.player.size.x / 2
        let startingYPosition = this.player.center.y - this.player.size.y / 2
        let playerWidth = this.player.size.x
        let playerHeight = this.player.size.y
        screen.fillRect (startingXPosition, startingYPosition, playerWidth, playerHeight)
    }

    drawCoin(screen) {
        // console.log ("drawing coin")
        screen.fillStyle= "gold"
        let coinXPosition = this.coin.center.x - this.coin.size.x / 2
        let coinYPosition = this.coin.center.y - this.coin.size.y / 2
        let coinWidth = this.coin.size.x
        let coinHeight = this.coin.size.y
        screen.fillRect (coinXPosition, coinYPosition, coinWidth, coinHeight)
    }
    drawEnemy(screen) {
        console.log ("drawing enemy")
        screen.fillStyle="black"
        let enemyXPosition = this.enemy.center.x - this.enemy.size.x / 2
        let enemyYPosition = this.enemy.center.y - this.enemy.size.y / 2
        let enemyWidth = this.enemy.size.x
        let enemyHeight = this.enemy.size.y
        screen.fillRect (enemyXPosition, enemyYPosition, enemyWidth, enemyHeight)
    }
    update () {
        this.enemy.update()
        this.player.update()
        this.player.limit()
        if (this.player.center.x + this.player.size.x/2 < this.coin.center.x - this.coin.size.x/2 ||
            this.player.center.x - this.player.size.x/2 > this.coin.center.x + this.coin.size.x/2 ||
            this.player.center.y + this.player.size.x/2 < this.coin.center.y - this.coin.size.x/2 ||
            this.player.center.y - this.player.size.x/2 > this.coin.center.y + this.coin.size.x/2){
                // console.log("no collision")
            }  else {
                this.coin = new Coin 
            }
        }


    

}

class Player {
    constructor (gameSize) {
        this.size = {x: 40, y: 40}
        this.center = { x: gameSize.x / 2, y: gameSize.y / 2}
        this.keyboarder = Keyboarder
    }

    update () { 
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.center.x += 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.center.x -= 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)){
            this.center.y -= 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)){
            this.center.y += 2
        } 
    }

    limit() {
        if (this.center.x > 275) {this.center.x = 275}
        else if (this.center.x < 175) {this.center.x = 175}
        else if (this.center.y < 175) {this.center.y = 175}
        else if (this.center.y > 275) {this.center.y = 275}
    }

    getCoin() {
        if (this.player.center.x + this.player.size.x/2 > this.coin.center.x - this.coin.size.x) {console.log ("Hit, left side")}
    }

}

class Coin {
    constructor () {
        this.size = {x: 30, y: 30}
        this.center = {x: 275, y: 175}
        let ranX = (Math.floor(Math.random() * 3))
        console.log(ranX)
            if (ranX === 0) {this.center.x = 175}
            else if (ranX === 1) {this.center.x = 225}
            else if (ranX === 2) {this.center.x = 275}
            // console.log (this.center.x)
        let ranY = (Math.floor(Math.random() * 3))
            if (ranY === 0) {this.center.y = 175}
            else if (ranY === 1) {this.center.y = 225}
            else if (ranY === 2) {this.center.y = 275}
    }
}

class Enemy {
    constructor (){
    this.size = {x: 30, y: 30}
    this.center = {x: 175, y: 0}
    }

    update() {
        this.center.y += 1
    }
}

new Game ()


