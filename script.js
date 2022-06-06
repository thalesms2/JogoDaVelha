import constants from "./constants.js"
import game from "./game.js"

const {
    handleClick,
    reset,
    resetScore
} = game()
const {
    canvas,
    buttonNewGame,
    buttonResetScore
} = constants()

buttonNewGame.addEventListener('click', () => reset())
buttonResetScore.addEventListener('click', () => resetScore())
canvas.addEventListener('click', (event) => handleClick(event))