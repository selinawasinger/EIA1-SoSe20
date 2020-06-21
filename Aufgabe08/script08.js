"use strict";
function playSample(button) {
    if (recording == true) {
        beatArray.push(button);
    }
    var sound = new Audio(button);
    sound.play();
}
document.querySelector("#button1").addEventListener("click", function () {
    playSample("hihat.mp3");
});
document.querySelector("#button2").addEventListener("click", function () {
    playSample("kick.mp3");
});
document.querySelector("#button3").addEventListener("click", function () {
    playSample("snare");
});
document.querySelector("#button4").addEventListener("click", function () {
    playSample("A.mp3");
});
document.querySelector("#button5").addEventListener("click", function () {
    playSample("C.mp3");
});
document.querySelector("#button6").addEventListener("click", function () {
    playSample("F.mp3");
});
document.querySelector("#button7").addEventListener("click", function () {
    playSample("G.mp3");
});
document.querySelector("#button8").addEventListener("click", function () {
    playSample("laugh-1.mp3");
});
document.querySelector("#button9").addEventListener("click", function () {
    playSample("laugh-2.mp3");
});
var beatArray = ["kick.mp3", "snare.mp3", "hihat.mp3"];
//funktion für den Playbutton
var buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", function () {
    playBeat();
});
function playBeat() {
    var index = 0;
    function startBeat() {
        var sound = new Audio(beatArray[index]);
        sound.play();
        index += 1;
        if (index > beatArray.length) {
            index = 0;
        }
    }
    if (buttonPlay.getAttribute("class") == "fas fa-play-circle") {
        var loop;
        buttonPlay.setAttribute("class", "fas fa-pause-circle");
        loop = setInterval(startBeat, 500);
    }
    else {
        buttonPlay.setAttribute("class", "fas fa-play-circle");
        clearInterval(loop);
    }
}
//Funktion zum aufnehmen:
var recording = false;
var buttonRec = document.querySelector("#record");
buttonRec.addEventListener("click", function () {
    recordBeat();
});
function recordBeat() {
    if (recording == false) {
        recording = true;
        buttonRec.setAttribute("class", "fas fa-stop-circle");
    }
    else {
        recording = false;
        buttonRec.setAttribute("class", "fas fa-record-vinyl");
    }
}
//beatArray löschen:
document.querySelector("#delete").addEventListener("click", function () {
    beat = [];
});
//# sourceMappingURL=script08.js.map