import constants from "./constants.js"
import baseGame from "./baseGame.js"

const {
    handleClick,
    reset,
    resetScore
} = baseGame()
const {
    canvas,
    buttonNewGame,
    buttonResetScore
} = constants()

buttonNewGame.addEventListener('click', () => reset())
buttonResetScore.addEventListener('click', () => resetScore())
canvas.addEventListener('click', (event) => handleClick(event))