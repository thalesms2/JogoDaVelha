import Game from './Game.js'
import { TURNS } from './constants.js'

const game = new Game
document.querySelector('#newGame').addEventListener('click', () => { game.reset() })
document.querySelector('#resetScore').addEventListener('click', () => { game.resetScore() })

game.canvas.addEventListener('click', (event) => {
    if(TURNS.length > 8) {
        game.end = true
    }
    if(event.offsetX <= 200) {
        if(event.offsetY <= 200) {
            (TURNS.length % 2) ? game.addX(0, 0) : game.addO(0, 0)
        } else if (event.offsetY <= 400) {
            (TURNS.length % 2) ? game.addX(0, 1) : game.addO(0, 1)
        } else if (event.offsetY <= 600) {
            (TURNS.length % 2) ? game.addX(0, 2) : game.addO(0, 2)
        }
    } else if (event.offsetX <= 400) {
        if(event.offsetY <= 200) {
            (TURNS.length % 2) ? game.addX(1, 0) : game.addO(1, 0)
        } else if (event.offsetY <= 400) {
            (TURNS.length % 2) ? game.addX(1, 1) : game.addO(1, 1)
        } else if (event.offsetY <= 600) {
            (TURNS.length % 2) ? game.addX(1, 2) : game.addO(1, 2)
        }
    } else if (event.offsetX <= 600) {
        if(event.offsetY <= 200) {
            (TURNS.length % 2) ? game.addX(2, 0) : game.addO(2, 0)
        } else if (event.offsetY <= 400) {
            (TURNS.length % 2) ? game.addX(2, 1) : game.addO(2, 1)
        } else if (event.offsetY <= 600) {
            (TURNS.length % 2) ? game.addX(2, 2) : game.addO(2, 2)
        }
    }
    game.testWin()
})
