let turn = 0;
let desk = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];

const update = () => {
    for(var j = 0; j < 3; j++) {
        for(var i = 0; i < 3; i++){
            const spot = document.querySelector(`div[data-key="${j}${i}"]`);
            switch(desk[j][i]) {
                case 0:
                    spot.innerHTML = '';
                    break;
                case 1: 
                    spot.innerHTML = 'O';
                    break;
                case 4: 
                    spot.innerHTML = 'X';
                    break;

            }
        }
    }
}

const check = (sum) => {
    var result;
    sum.forEach((x) => {
        switch(x) {
            case 3:
                result = 1;
            case 12:
                result = 2;
        }
    })
    return result;
}

const reset = () => {
    desk = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]];
    update();
}

const checkWin = () => {
    let sum = [0, 0, 0, 0];
    let contDec = 2;
    for(var j = 0; j < 3; j++) {
        sum[0] += desk[j][j];
        sum[1] += desk[contDec][j];
        contDec--;
        for(var i = 0; i < 3; i++){
            sum[2] += desk[i][j];
            sum[3] += desk[j][i];
        }
    }
    console.log(check(sum))
    return check(sum);
}

const makeMove = (event) => {
    var player = turn % 2;
    var [x, y] = event.target.dataset.key.split("");
    if(!desk[x][y] ) {
        player ?  desk[x][y] = 1 : desk[x][y] = 4;
        turn++;
    }
}

// Main Exec
const play = (event) => {
    checkWin() ? reset() : makeMove(event);
    update();
    switch(checkWin()) {
        case 1:
            document.querySelector('#msg').innerHTML = "'O' Win";
            break;
        case 2:
            document.querySelector('#msg').innerHTML = "'X' Win";
            break;
    }
}

const slots = document.querySelectorAll("div");
slots.forEach((div) => {
    div.addEventListener("click", play);
})