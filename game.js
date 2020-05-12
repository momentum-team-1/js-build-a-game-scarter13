


const canvas = document.getElementById('canvas');
const screen = canvas.getContext("2d");
const gameSize = {x: canvas.width, y: canvas.height}

let x = 10;
let y = 20

screen.fillStyle="blue";
screen.fillRect(x, y, 20, 20)




let self = this;
function tick(){
    self.update ()
    self.draw (screen, gameSize)
    requestAnimationFrame (tick)
}

tick ()


function update (){
    console.log("hi")
this.keyboarder = new Keyboarder();
if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
    X -=2
} else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
    X +=2
} else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
    X -=2
} else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
    X +=2
}
}


function draw (){
    screen.fillStyle="blue";
    screen.fillRect(x, y, 20, 20)
}



