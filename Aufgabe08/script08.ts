function playSample(button: string): void { 
    if(recording == true) {
        beatArray.push(button);
    }

    var sound: HTMLAudioElement = new Audio(button);
    sound.play();
  }

document.querySelector("#button1").addEventListener("click", function(): void {
    playSample("hihat.mp3"); } );
document.querySelector("#button2").addEventListener("click", function(): void {
    playSample("kick.mp3"); } );
document.querySelector("#button3").addEventListener("click", function(): void {
    playSample("snare"); } );
document.querySelector("#button4").addEventListener("click", function(): void {
    playSample("A.mp3"); } );
document.querySelector("#button5").addEventListener("click", function(): void {
    playSample("C.mp3"); } );
document.querySelector("#button6").addEventListener("click", function(): void {
    playSample("F.mp3"); } );
document.querySelector("#button7").addEventListener("click", function(): void {
    playSample("G.mp3"); } );
document.querySelector("#button8").addEventListener("click", function(): void {
    playSample("laugh-1.mp3"); } );
document.querySelector("#button9").addEventListener("click", function(): void {
    playSample("laugh-2.mp3"); } );



var beatArray: string [] = ["kick.mp3", "snare.mp3", "hihat.mp3"];

//funktion für den Playbutton
var buttonPlay: HTMLElement = document.querySelector("#play");

buttonPlay.addEventListener("click", function(){
    playBeat();
});
var loop: number;
function playBeat(): void {

    var index: number = 0;

    function startBeat(): void {
        var sound: HTMLAudioElement = new Audio (beatArray[index]);
        sound.play();
        index += 1;

        if (index > beatArray.length) {
            index = 0;
        }
    }

    if (buttonPlay.getAttribute("class") == "fas fa-play-circle") {
        buttonPlay.setAttribute("class", "fas fa-pause-circle");
        loop = setInterval(startBeat, 500);

    } else {
        buttonPlay.setAttribute("class", "fas fa-play-circle");
        clearInterval(loop);
    }
}



//Funktion zum aufnehmen:
var recording: boolean = false;
var buttonRec: HTMLElement = document.querySelector("#record");
buttonRec.addEventListener("click", function() {
    recordBeat();
});

function recordBeat(): void {
    if(recording == false){
        recording = true;
        buttonRec.setAttribute("class", "fas fa-stop-circle");
    } else {
        recording = false;
        buttonRec.setAttribute("class", "fas fa-record-vinyl");
    }
}


//beatArray löschen:
document.querySelector("#delete").addEventListener("click", function (){
    beatArray = [];
})