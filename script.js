import constants from "./constants"
import game from "./game"

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

buttonNewGame.querySelector('#newGame').addEventListener('click', () => reset())
buttonResetScore.addEventListener('click', () => resetScore())
canvas.addEventListener('click', (event) => handleClick(event))