// Need a game function that defines the board and sets the start positions.  All of the game logic happens here

class Game {
    constructor () {
        let canvas = document.querySelector('#gameboard')
        let screen = canvas.getContext('2d')
        let gameSize = { x: canvas.width, y: canvas.height}
        this.player = new Player (gameSize)

        let animate = () => {
            this.update()
            this.drawPlayer(screen, gameSize)
            requestAnimationFrame(animate)
        }
        animate ()
    }
    console

    drawPlayer (screen, gameSize) {
        screen.clearRect(0, 0, gameSize.x, gameSize.y)
        console.log ("drawing")
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
    
    update () {
        this.player.update()
        this.player.limit()
    }

}

class Player {
    constructor (gameSize) {
        this.size = {x: 50, y: 50}
        this.center = { x: gameSize.x / 2, y: gameSize.y / 2}
        this.keyboarder = Keyboarder
    }

    update () { 
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.center.x += 5
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.center.x -= 5
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)){
            this.center.y -= 5
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)){
            this.center.y += 5
        } 
    }

    limit() {
        if (this.center.x > 275) {this.center.x = 275}
        else if (this.center.x < 175) {this.center.x = 175}
        else if (this.center.y < 175) {this.center.y = 175}
        else if (this.center.y > 275) {this.center.y = 275}
    }

}

new Game ()


