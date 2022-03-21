import Game from './Game.js'
const game = new Game
game.canvas.addEventListener('click', (event) => {
    if(event.offsetX <= 200) {
        if(event.offsetY <= 200) {
            //movimento
        } else if (event.offsetY <= 400) {
            //movimento
        } else if (event.offsetY <= 600) {
            //movimento
        }
    } else if (event.offsetX <= 400) {
        if(event.offsetY <= 200) {
            //movimento
        } else if (event.offsetY <= 400) {
            //movimento
        } else if (event.offsetY <= 600) {
            //movimento
        }
    } else if (event.offsetX <= 600) {
        if(event.offsetY <= 200) {
            //movimento
        } else if (event.offsetY <= 400) {
            //movimento
        } else if (event.offsetY <= 600) {
            //movimento
        }
    }
    console.log(`X: ${event.offsetX}, Y: ${event.offsetY}`)
})
