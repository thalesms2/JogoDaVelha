import { size, X, O, BOARD, EMPTY, TURNS } from './constants.js'
import { generateGameBoard } from './utils.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.canvas.width = size.width
        this.canvas.height = size.height
        this.context = this.canvas.getContext('2d')
        this.drawDesk()
        this.board = generateGameBoard(BOARD)
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
        this.context.strokeStyle = '#000060'
        this.context.moveTo(50 + (x * 200), 50 + (y * 200))
        this.context.lineTo(150 + (x * 200), 150 + (y * 200))
        this.context.moveTo(150 + (x * 200), 50 + (y * 200))
        this.context.lineTo(50 + (x * 200), 150 + (y * 200))
        this.context.stroke()
    }

    drawO(x, y) {
        this.context.beginPath()
        this.context.strokeStyle = '#000060'
        this.context.moveTo(150 + (x * 200), 100 + (y * 200))
        this.context.arc(100 + (x * 200), 100 + (y * 200), 50, 0, 2 * Math.PI)
        this.context.stroke()
        this.context.closePath()
    }

    addX(x, y) {
        if(this.board[x][y] === 'empty') {
            this.board[x][y] = X
            this.drawX(x, y)
            TURNS.push({ X: x, Y: y })
        }
    }

    addO(x, y) {
        if(this.board[x][y] === 'empty') {
            this.board[x][y] = O
            this.drawO(x, y)
            TURNS.push({ X: x, Y: y })
        }
    }

    reset() {
        this.board = generateGameBoard(BOARD)
        this.drawDesk(this.context)
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
            result.push({ x: 0, y: 2 })
            result.push({ x: 1, y: 1 })
            result.push({ x: 2, y: 0 })
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
            result.push({ x: 0, y: 2 })
            result.push({ x: 1, y: 1 })
            result.push({ x: 2, y: 0 })
        }
        return result
    }

    testWin() {
        const teste = []
        var o = []
        teste.push(this.checkIFXWin(this.board))
        o = this.checkIFOWin(this.board)
        console.log(teste.length)
        console.log(teste)
        console.log(o.lenght)
        if(teste.lenght > 1) {
            console.log('X ganhou')
        }
        if(o.lenght > 0) {
            console.log('O ganhou')
        }
        // FIXME Não funciona refazer...
    }
}
export default Game