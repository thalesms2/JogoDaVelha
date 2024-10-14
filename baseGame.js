import constants from './constants.js'

export default function baseGame() {
    const {
        size,
        X,
        O,
        BOARD,
        TURNS,
        SCORE,
        canvas,
        context
    } = constants()
    let end = false
    let board = generateGameBoard(BOARD)
    
    canvas.width = size.width
    canvas.height = size.height
    drawBoard(context)
    function drawBoard() {
        context.beginPath()
        context.fillStyle = '#dcdcdc'
        context.strokeStyle = '#fff'
        context.fillRect(0, 0, size.width, size.height)
        context.closePath()
        drawBoardLines(context)
    }
    function drawBoardLines() {
        context.beginPath()
        context.lineWidth = 4
        context.moveTo(198, 0)
        context.lineTo(200, 600)
        context.moveTo(398, 0)
        context.lineTo(400, 600)
    
        context.moveTo(0, 198)
        context.lineTo(600, 200)
        context.moveTo(0, 398)
        context.lineTo(600, 400)
        context.stroke()
        context.closePath()
    }
    function generateGameBoard (BOARD) {
        return JSON.parse(JSON.stringify(BOARD)) // clone hack
    }
    function playX(coordX, coordY) {
        context.beginPath()
        context.lineWidth = 15
        context.strokeStyle = '#000078'
        context.moveTo(50 + (coordX * 200), 50 + (coordY * 200))
        context.lineTo(150 + (coordX * 200), 150 + (coordY * 200))
        context.moveTo(150 + (coordX * 200), 50 + (coordY * 200))
        context.lineTo(50 + (coordX * 200), 150 + (coordY * 200))
        context.stroke()
        context.closePath()
    }
    function playO(coordX, coordY) {
        context.beginPath()
        context.lineWidth = 15
        context.strokeStyle = '#000078'
        context.moveTo(150 + (coordX * 200), 100 + (coordY * 200))
        context.arc(100 + (coordX * 200), 100 + (coordY * 200), 50, 0, 2 * Math.PI)
        context.stroke()
        context.closePath()
    }
    function addXonBoard(coordX, coordY) {
        if(board[coordX][coordY] === 'empty' && end === false) {
            board[coordX][coordY] = X
            playX(coordX, coordY)
            TURNS.push({ X: coordX, Y: coordY })
        } else if (end) {
            end = false
            reset()
        }
    }
    function addOonBoard(coordX, coordY) {
        if(board[coordX][coordY] === 'empty' && end === false) {
            board[coordX][coordY] = O
            playO(coordX, coordY)
            TURNS.push({ X: coordX, Y: coordY })
        } else if (end) {
            end = false
            reset()
        }
    }
    function reset() {
        board = generateGameBoard(BOARD)
        drawBoard(context)
        TURNS.splice(0, TURNS.length)
    }
    function updateScore() {
        document.querySelector('#score').innerHTML = `X|${SCORE[0]} - ${SCORE[1]}|O`
    }
    function registerScore(id) {
        SCORE[id] += 1 
        updateScore()
    }
    function resetScore() {
        SCORE[0] = 0
        SCORE[1] = 0
        updateScore()
        reset()
    }
    function checkIFXWin(check) {
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
    function checkIFOWin(check) {
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
    function drawLineWinner(position) {
        context.beginPath()
        context.lineWidth = 4
        context.strokeStyle = '#fd2000'
        if (position[0].x === 0 && position[0].y === 0) {
            if (position[1].x === 0 && position[1].y === 1) {
                // p/ baixo
                context.moveTo(98, 5)
                context.lineTo(98, 595)
            } else if (position[1].x === 1 && position[1].y === 0){
                // p/ direita
                context.moveTo(5, 98)
                context.lineTo(595, 98)
            } else if (position[1].x === 1 && position[1].y === 1) {
                // diagonal principal
                context.moveTo(5, 5)
                context.lineTo(595, 595)
            }
        } else if (position[0].x === 2 && position[0].y === 0) {
            if (position[1].x === 2 && position[1].y === 1) {
                // p/ baixo
                context.moveTo(498, 5)
                context.lineTo(498, 595)
            } else if (position[1].x === 1 && position[1].y === 1){
                // p/ diagonal segundaria
                context.moveTo(595, 5)
                context.lineTo(5, 595)
            }
        } else if (position[0].x === 1 && position[0].y === 0) {
            if (position[1].x === 1 && position[1].y === 1) {
                context.moveTo(298, 5)
                context.lineTo(298, 595)
            }
        } else if (position[0].x === 0 && position[0].y === 1) {
            context.moveTo(5, 298)
            context.lineTo(595, 298)
        } else if (position[0].x === 0 && position[0].y === 2) {
            context.moveTo(5, 498)
            context.lineTo(595, 498)
        }
        context.stroke()
        context.closePath()
    }
    function testWin() {
        const teste = []
        teste.push(checkIFXWin(board))
        teste.push(checkIFOWin(board))
        if(teste[0].length > 1) {
            drawLineWinner(teste[0])
            registerScore(0)
            end = true
            console.log(`first ${end}`)
        }
        if(teste[1].length > 1) {
            drawLineWinner(teste[1])
            registerScore(1)
            end = true
            console.log(`second ${end}`)
        }
    }
    function handleClick(event) {
        if(TURNS.length > 8) {
            end = true
        }
        if(event.offsetX <= 200) {
            if(event.offsetY <= 200) {
                (TURNS.length % 2) ? addXonBoard(0, 0) : addOonBoard(0, 0)
            } else if (event.offsetY <= 400) {
                (TURNS.length % 2) ? addXonBoard(0, 1) : addOonBoard(0, 1)
            } else if (event.offsetY <= 600) {
                (TURNS.length % 2) ? addXonBoard(0, 2) : addOonBoard(0, 2)
            }
        } else if (event.offsetX <= 400) {
            if(event.offsetY <= 200) {
                (TURNS.length % 2) ? addXonBoard(1, 0) : addOonBoard(1, 0)
            } else if (event.offsetY <= 400) {
                (TURNS.length % 2) ? addXonBoard(1, 1) : addOonBoard(1, 1)
            } else if (event.offsetY <= 600) {
                (TURNS.length % 2) ? addXonBoard(1, 2) : addOonBoard(1, 2)
            }
        } else if (event.offsetX <= 600) {
            if(event.offsetY <= 200) {
                (TURNS.length % 2) ? addXonBoard(2, 0) : addOonBoard(2, 0)
            } else if (event.offsetY <= 400) {
                (TURNS.length % 2) ? addXonBoard(2, 1) : addOonBoard(2, 1)
            } else if (event.offsetY <= 600) {
                (TURNS.length % 2) ? addXonBoard(2, 2) : addOonBoard(2, 2)
            }
        }
        testWin()
    }


    return {
        handleClick,
        resetScore,
        reset,
    }
}