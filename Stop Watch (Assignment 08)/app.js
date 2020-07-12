
var min = document.getElementById('min').innerText;
var sec = document.getElementById('sec').innerText;
var miliSec = document.getElementById('miliSec').innerText;

let mNum = Number(min)
let sNum = Number(sec)
let msNum = Number(miliSec)

var mainTimer = null;

function timerStart() {
    mainTimer = setInterval(timer, 10);
}

function timerStop() {
     clearInterval(mainTimer);
}

function timerReset(){

    msNum=0;
    sNum=0;
    mNum=0;
    document.getElementById('miliSec').innerText = "00";
    document.getElementById('sec').innerText = "00";
    document.getElementById('min').innerText = "00";
    clearInterval(mainTimer);
}


function timer() {

    msNum++;
    console.log(msNum)
    document.getElementById('miliSec').innerText = "0" + msNum;

    if (msNum > 9) {
        document.getElementById('miliSec').innerText = msNum;
    }
    if (msNum > 59) {
        msNum = 0;
        sNum++;
        document.getElementById('sec').innerText = "0" + sNum;
    }
    if (sNum > 9) {
        document.getElementById('sec').innerText = sNum;
    }
    if (sNum > 59) {
        msNum=0;
        sNum=0;
        mNum++;
        document.getElementById('min').innerText = "0" + mNum;
    }
    if (mNum > 9) {
        document.getElementById('min').innerText = mNum;
    }
}