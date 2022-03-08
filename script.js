let turn = 0
let desk = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let win = 0
let x = 0
let o = 0

const reset = () => {
    for(var j = 0; j < 3; j++) {
        for(var i = 0; i < 3; i++){
            desk[j][i] = 0
            const spot = document.querySelector(`div[data-key="${j}${i}"]`)
            spot.innerHTML = ""
        }
    }
}

const resetScore = () => {
    x = 0
    o = 0
}

const check = (sum) => {
    switch(sum) {
        case 3:
            o++
            reset()
            break
        case 12:
            x++
            reset()
            break
    }
}

const checkWin = () => {
    let sum3 = 0
    let sum4 = 0
    let cont = 2
    for(var j = 0; j < 3; j++) {
        let sum1 = 0
        let sum2 = 0
        sum3 += desk[j][j]
        sum4 += desk[cont][j]
        cont--
        for(var i = 0; i < 3; i++){
            sum1 += desk[i][j]
            sum2 += desk[j][i]
        }
        check(sum1)
        check(sum2)
        console.log(sum3, sum4)
        check(sum3)
        check(sum4)
    }
}

const play = (event) => {
    if(turn % 2) {
        // O
        let localClick = event.target.dataset.key.split("")
        if(!desk[localClick[0]][localClick[1]]) {
            desk[localClick[0]][localClick[1]] = 1
            const spot = document.querySelector(`div[data-key="${localClick[0]}${localClick[1]}"]`)
            spot.innerHTML = "O"
            turn++
        }
        console.log("O")
    } else {
        // X
        let localClick = event.target.dataset.key.split("")
        if(!desk[localClick[0]][localClick[1]]) {
            desk[localClick[0]][localClick[1]] = 4
            const spot = document.querySelector(`div[data-key="${localClick[0]}${localClick[1]}"]`)
            spot.innerHTML = "X"
            turn++
        }
        console.log("X")
    }
    checkWin()
}

const slots = document.querySelectorAll("div")

document.querySelectorAll("div").forEach((div) => {
    div.addEventListener("click", play)
})