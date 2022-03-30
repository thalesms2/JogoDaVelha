import { size, X, O, BOARD, TURNS , SCORE} from './constants.js'
import { generateGameBoard } from './utils.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.canvas.width = size.width
        this.canvas.height = size.height
        this.context = this.canvas.getContext('2d')
        this.drawDesk()
        this.board = generateGameBoard(BOARD)
        this.end = false
    }
    
    drawDesk() {
        this.context.beginPath()
        this.context.fillStyle = '#dcdcdc'
        this.context.strokeStyle = '#fff'
        this.context.fillRect(0, 0, size.width, size.height)
        this.context.closePath()
        this.drawLines(this.context)
    }
    
    drawLines() {
        this.context.beginPath()
        this.context.lineWidth = 4
        this.context.moveTo(198, 0)
        this.context.lineTo(200, 600)
        this.context.moveTo(398, 0)
        this.context.lineTo(400, 600)
    
        this.context.moveTo(0, 198)
        this.context.lineTo(600, 200)
        this.context.moveTo(0, 398)
        this.context.lineTo(600, 400)
        this.context.stroke()
        this.context.closePath()
    }
    
    drawX(x, y) {
        this.context.beginPath()
        this.context.lineWidth = 15
        this.context.strokeStyle = '#000078'
        this.context.moveTo(50 + (x * 200), 50 + (y * 200))
        this.context.lineTo(150 + (x * 200), 150 + (y * 200))
        this.context.moveTo(150 + (x * 200), 50 + (y * 200))
        this.context.lineTo(50 + (x * 200), 150 + (y * 200))
        this.context.stroke()
        this.context.closePath()
    }

    drawO(x, y) {
        this.context.beginPath()
        this.context.lineWidth = 15
        this.context.strokeStyle = '#000078'
        this.context.moveTo(150 + (x * 200), 100 + (y * 200))
        this.context.arc(100 + (x * 200), 100 + (y * 200), 50, 0, 2 * Math.PI)
        this.context.stroke()
        this.context.closePath()
    }

    addX(x, y) {
        if(this.board[x][y] === 'empty' && this.end === false) {
            this.board[x][y] = X
            this.drawX(x, y)
            TURNS.push({ X: x, Y: y })
        } else if (this.end) {
            this.end = false
            this.reset()
        }
    }

    addO(x, y) {
        if(this.board[x][y] === 'empty' && this.end === false) {
            this.board[x][y] = O
            this.drawO(x, y)
            TURNS.push({ X: x, Y: y })
        } else if (this.end) {
            this.end = false
            this.reset()
        }
    }

    reset() {
        this.board = generateGameBoard(BOARD)
        this.drawDesk(this.context)
        TURNS.splice(0, TURNS.length)
    }
    
    updateScore() {
        document.querySelector('#msg').innerHTML = `X|${SCORE[0]} - ${SCORE[1]}|O`
    }
    
    registerScore(id) {
        SCORE[id] += 1 
        this.updateScore()
    }

    resetScore() {
        SCORE[0] = 0
        SCORE[1] = 0
        this.updateScore()
        this.reset()
    }

    checkIFXWin(check) {
        let result = []
        for(var i = 0; i < 3; i++) {
            if(check[i][0] == 'X' && check[i][1] == 'X' && check[i][2] == 'X') {
                result.push({ x: i, y: 0 })
                result.push({ x: i, y: 1 })
                result.push({ x: i, y: 2 })
            }
            if(check[0][i] == 'X' && check[1][i] == 'X' && check[2][i] == 'X') {
                result.push({ x: 0, y: i })
                result.push({ x: 1, y: i })
                result.push({ x: 2, y: i })
            }
        }
        if (check[0][0] == 'X' && check[1][1] == 'X' && check[2][2] == 'X') {
            result.push({ x: 0, y: 0 })
            result.push({ x: 1, y: 1 })
            result.push({ x: 2, y: 2 })
        }
        if (check[0][2] == 'X' && check[1][1] == 'X' && check[2][0] == 'X') {
            result.push({ x: 2, y: 0 })
            result.push({ x: 1, y: 1 })
            result.push({ x: 0, y: 2 })
        }
        return result
    }

    checkIFOWin(check) {
        let result = []
        for(var i = 0; i < 3; i++) {
            if(check[i][0] == 'O' && check[i][1] == 'O' && check[i][2] == 'O') {
                result.push({ x: i, y: 0 })
                result.push({ x: i, y: 1 })
                result.push({ x: i, y: 2 })
            }
            if(check[0][i] == 'O' && check[1][i] == 'O' && check[2][i] == 'O') {
                result.push({ x: 0, y: i })
                result.push({ x: 1, y: i })
                result.push({ x: 2, y: i })
            }
        }
        if (check[0][0] == 'O' && check[1][1] == 'O' && check[2][2] == 'O') {
            result.push({ x: 0, y: 0 })
            result.push({ x: 1, y: 1 })
            result.push({ x: 2, y: 2 })
        }
        if (check[0][2] == 'O' && check[1][1] == 'O' && check[2][0] == 'O') {
            result.push({ x: 2, y: 0 })
            result.push({ x: 1, y: 1 })
            result.push({ x: 0, y: 2 })
        }
        return result
    }

    drawLineWinner(xy) {
        this.context.beginPath()
        this.context.lineWidth = 4
        this.context.strokeStyle = '#fd2000'
        if (xy[0].x === 0 && xy[0].y === 0) {
            if (xy[1].x === 0 && xy[1].y === 1) {
                // p/ baixo
                this.context.moveTo(98, 5)
                this.context.lineTo(98, 595)
            } else if (xy[1].x === 1 && xy[1].y === 0){
                // p/ direita
                this.context.moveTo(5, 98)
                this.context.lineTo(595, 98)
            } else if (xy[1].x === 1 && xy[1].y === 1) {
                // diagonal principal
                this.context.moveTo(5, 5)
                this.context.lineTo(595, 595)
            }
        }else if (xy[0].x === 2 && xy[0].y === 0) {
            if (xy[1].x === 2 && xy[1].y === 1) {
                // p/ baixo
                this.context.moveTo(498, 5)
                this.context.lineTo(498, 595)
            } else if (xy[1].x === 1 && xy[1].y === 1){
                // p/ diagonal segundaria
                this.context.moveTo(595, 5)
                this.context.lineTo(5, 595)
            }
        }else if (xy[0].x === 1 && xy[0].y === 0) {
            if (xy[1].x === 1 && xy[1].y === 1) {
                this.context.moveTo(298, 5)
                this.context.lineTo(298, 595)
            }
        } else if (xy[0].x === 0 && xy[0].y === 1) {
            this.context.moveTo(5, 298)
            this.context.lineTo(595, 298)
        } else if (xy[0].x === 0 && xy[0].y === 2) {
            this.context.moveTo(5, 498)
            this.context.lineTo(595, 498)
        }
        this.context.stroke()
        this.context.closePath()
    }

    testWin() {
        const teste = []
        teste.push(this.checkIFXWin(this.board))
        teste.push(this.checkIFOWin(this.board))
        if(teste[0].length > 1) {
            this.drawLineWinner(teste[0])
            this.registerScore(0)
            this.end = true
        }
        if(teste[1].length > 1) {
            this.drawLineWinner(teste[1])
            this.registerScore(1)
            this.end = true
        }
    }
}

export default Game