import { size, X, O, BOARD, EMPTY} from './constants.js'
import { generateGameBoard } from './utils.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.canvas.width = size.width
        this.canvas.height = size.height
        this.context = this.canvas.getContext('2d')
        this.drawDesk(this.context)
        this.board = generateGameBoard(BOARD)
    }
    
    drawDesk(context) {
        this.context.beginPath()
        this.context.fillStyle = '#dcdcdc'
        this.context.strokeStyle = '#fff'
        this.context.fillRect(0, 0, size.width, size.height)
        this.context.closePath()
        this.drawLines(this.context)
    }
    drawLines(context) {
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
        }
        this.drawX(x, y)
        console.log(`X: ${x} | Y: ${y}`)
        console.log(this.board)
    }
}
export default Game