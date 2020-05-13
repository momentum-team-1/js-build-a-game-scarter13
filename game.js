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

    drawPlayer (screen, gameSize) {
        screen.clearRect(0, 0, gameSize.x, gameSize.y)
        console.log ("drawing")
        screen.fillStyle= "blue"
        let startingXPosition = this.player.center.x - this.player.size.x / 2
        let startingYPosition = this.player.center.y - this.player.size.y / 2
        let playerWidth = this.player.size.x
        let playerHeight = this.player.size.y
        screen.fillRect (startingXPosition, startingYPosition, playerWidth, playerHeight)
    }
    
    update () {
        this.player.update()
    }

}

class Player {
    constructor (gameSize) {
        this.size = {x: 30, y: 30}
        this.center = { x: gameSize.x / 2, y: gameSize.y / 2}
        this.keyboarder = Keyboarder
    }

    update () { 
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.center.x += 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            console.log("left")
            this.center.x -= 2
        } 
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)){
            this.center.y -= 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)){
            this.center.y += 2
        } 
    }

}

new Game ()


