import Game from './Game.js'

const game = new Game
let turn = 0
document.querySelector('#newGame').addEventListener('click', () => { game.reset() })

game.canvas.addEventListener('click', (event) => {
    if(event.offsetX <= 200) {
        if(event.offsetY <= 200) {
            (turn % 2) ? game.addX(0, 0) : game.addO(0, 0)
            turn++
        } else if (event.offsetY <= 400) {
            (turn % 2) ? game.addX(0, 1) : game.addO(0, 1)
            turn++
        } else if (event.offsetY <= 600) {
            (turn % 2) ? game.addX(0, 2) : game.addO(0, 2)
            turn++
        }
    } else if (event.offsetX <= 400) {
        if(event.offsetY <= 200) {
            (turn % 2) ? game.addX(1, 0) : game.addO(1, 0)
            turn++
        } else if (event.offsetY <= 400) {
            (turn % 2) ? game.addX(1, 1) : game.addO(1, 1)
            turn++
        } else if (event.offsetY <= 600) {
            (turn % 2) ? game.addX(1, 2) : game.addO(1, 2)
            turn++
        }
    } else if (event.offsetX <= 600) {
        if(event.offsetY <= 200) {
            (turn % 2) ? game.addX(2, 0) : game.addO(2, 0)
            turn++
        } else if (event.offsetY <= 400) {
            (turn % 2) ? game.addX(2, 1) : game.addO(2, 1)
            turn++
        } else if (event.offsetY <= 600) {
            (turn % 2) ? game.addX(2, 2) : game.addO(2, 2)
            turn++
        }
    }
})
