export default function constants() {
    const size = {
        width: 600,
        height: 600,
    }
    const EMPTY = 'empty'
    const X = 'X'
    const O = 'O'
    const BOARD = [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
    ]
    const TURNS = []
    const SCORE = [0, 0]
    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')
    const buttonNewGame = document.querySelector('#newGame')
    const buttonResetScore = document.querySelector('#resetScore')
    return {
        size,
        X,
        O,
        BOARD,
        TURNS,
        SCORE,
        canvas,
        context,
        buttonNewGame,
        buttonResetScore
    }
}