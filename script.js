import Game from './Game.js'
const game = new Game
game.canvas.addEventListener('click', (event) => {
    if(event.offsetX <= 200) {
        if(event.offsetY <= 200) {
            game.addX(0, 0)
        } else if (event.offsetY <= 400) {
            game.addX(0, 1)
        } else if (event.offsetY <= 600) {
            game.addX(0, 2)
        }
    } else if (event.offsetX <= 400) {
        if(event.offsetY <= 200) {
            game.addX(1, 0)
        } else if (event.offsetY <= 400) {
            game.addX(1, 1)
        } else if (event.offsetY <= 600) {
            game.addX(1, 2)
        }
    } else if (event.offsetX <= 600) {
        if(event.offsetY <= 200) {
            game.addX(2, 0)
        } else if (event.offsetY <= 400) {
            game.addX(2, 1)
        } else if (event.offsetY <= 600) {
            game.addX(2, 2)
        }
    }
    console.log(`X: ${event.offsetX}, Y: ${event.offsetY}`)
})
