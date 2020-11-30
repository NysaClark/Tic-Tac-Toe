"use strict"

let turn = 1;
let xTurn = true;
let xPlays = [];
let circlePlays = [];
let xWins = 0;
let circleWins = 0;
let win = false;

//game starts with x
document.getElementById("playerText").textContent = 'Turn: X';

function winner() {
    //functoin that checks if a win condition has been met
    checkWin();

    //say who won and update wins
    if (xTurn == true && win == true) {
        xWins++;
        document.getElementById("playerText").textContent = "Winner: X!";
        document.getElementById("xWins").textContent = `X - ${xWins}`;
    }
    if (xTurn == false && win == true) {
        circleWins++;
        document.getElementById("playerText").textContent = "Winner: O!";
        document.getElementById("circleWins").textContent = `O - ${circleWins}`;
    }

    //continue game if theres no win or give reset option if theres a win
    if (win == true) {
        document.getElementById('resetButton').classList.add('show');
    } else {
        return;
    }
}

function checkWin() {
    //check xPLays for win
    if (xPlays.includes(0) && xPlays.includes(1) && xPlays.includes(2)) {
        win = true;
        document.getElementById(0).classList.add(`win`);
        document.getElementById(1).classList.add(`win`);
        document.getElementById(2).classList.add(`win`);
    }
    if (xPlays.includes(3) && xPlays.includes(4) && xPlays.includes(5)) {
        win = true;
        document.getElementById(3).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(5).classList.add(`win`);
    }
    if (xPlays.includes(6) && xPlays.includes(7) && xPlays.includes(8)) {
        win = true;
        document.getElementById(6).classList.add(`win`);
        document.getElementById(7).classList.add(`win`);
        document.getElementById(8).classList.add(`win`);
    }
    if (xPlays.includes(0) && xPlays.includes(3) && xPlays.includes(6)) {
        win = true;
        document.getElementById(0).classList.add(`win`);
        document.getElementById(3).classList.add(`win`);
        document.getElementById(6).classList.add(`win`);
    }
    if (xPlays.includes(1) && xPlays.includes(4) && xPlays.includes(7)) {
        win = true;
        document.getElementById(1).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(7).classList.add(`win`);
    }
    if (xPlays.includes(2) && xPlays.includes(5) && xPlays.includes(8)) {
        win = true;
        document.getElementById(2).classList.add(`win`);
        document.getElementById(5).classList.add(`win`);
        document.getElementById(8).classList.add(`win`);
    }
    if (xPlays.includes(0) && xPlays.includes(4) && xPlays.includes(8)) {
        win = true;
        document.getElementById(0).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(8).classList.add(`win`);
    }
    if (xPlays.includes(2) && xPlays.includes(4) && xPlays.includes(6)) {
        win = true;
        document.getElementById(2).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(6).classList.add(`win`);
    }

    //check circlePlays for win
    if (circlePlays.includes(0) && circlePlays.includes(1) && circlePlays.includes(2)) {
        win = true;
        document.getElementById(0).classList.add(`win`);
        document.getElementById(1).classList.add(`win`);
        document.getElementById(2).classList.add(`win`);
    }
    if (circlePlays.includes(3) && circlePlays.includes(4) && circlePlays.includes(5)) {
        win = true;
        document.getElementById(3).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(5).classList.add(`win`);
    }
    if (circlePlays.includes(6) && circlePlays.includes(7) && circlePlays.includes(8)) {
        win = true;
        document.getElementById(6).classList.add(`win`);
        document.getElementById(7).classList.add(`win`);
        document.getElementById(8).classList.add(`win`);
    }
    if (circlePlays.includes(0) && circlePlays.includes(3) && circlePlays.includes(6)) {
        win = true;
        document.getElementById(0).classList.add(`win`);
        document.getElementById(3).classList.add(`win`);
        document.getElementById(6).classList.add(`win`);
    }
    if (circlePlays.includes(1) && circlePlays.includes(4) && circlePlays.includes(7)) {
        win = true;
        document.getElementById(1).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(7).classList.add(`win`);
    }
    if (circlePlays.includes(2) && circlePlays.includes(5) && circlePlays.includes(8)) {
        win = true;
        document.getElementById(2).classList.add(`win`);
        document.getElementById(5).classList.add(`win`);
        document.getElementById(8).classList.add(`win`);
    }
    if (circlePlays.includes(0) && circlePlays.includes(4) && circlePlays.includes(8)) {
        win = true;
        document.getElementById(0).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(8).classList.add(`win`);
    }
    if (circlePlays.includes(2) && circlePlays.includes(4) && circlePlays.includes(6)) {
        win = true;
        document.getElementById(2).classList.add(`win`);
        document.getElementById(4).classList.add(`win`);
        document.getElementById(6).classList.add(`win`);
    }
}


function startGame(position) {
    //does nothing if there is already a symbol in the box
    let elemList = document.getElementById(position).classList;
    if (elemList.contains('x') || elemList.contains('circle')) {
        return;
    }

    //keeps track of whose turn it is
    if (turn % 2 == 0) {
        xTurn = false;
    } else {
        xTurn = true;
    }

    //adds x or o based on whose turn it is & keeps track of plays
    if (xTurn == true) {
        document.getElementById(position).classList.add(`x`);
        xPlays.push(position);
        turn++;
    } else {
        document.getElementById(position).classList.add(`circle`);
        circlePlays.push(position);
        turn++;
    }

    //update text fields
    if (turn % 2 == 0) {
        document.getElementById("playerText").textContent = 'Turn: O';
    } else {
        document.getElementById("playerText").textContent = 'Turn: X';
    }

    //run the winner function
    winner();

    //there's a tie if the turns get greater than 9
    if (turn > 9 && win == false) {
        lose();
    }
}


function resetGame() {
    turn = 1;
    xTurn = true;
    xPlays = [];
    circlePlays = [];
    win = false;

    let elemList = document.getElementsByClassName('box');
    
    for(let i = 0; i < elemList.length; i++){
        if(elemList[i].classList.contains('x')){
            elemList[i].classList.remove('x');
        }
        if(elemList[i].classList.contains('circle')){
            elemList[i].classList.remove('circle');
        }
        if(elemList[i].classList.contains('win')){
            elemList[i].classList.remove('win');
        }
    }

    document.getElementById('resetButton').classList.remove('show');

    document.getElementById("playerText").textContent = 'Turn: X';
}


function lose() {
    document.getElementById("playerText").textContent = "Draw!";
    document.getElementById('resetButton').classList.add('show');
}

