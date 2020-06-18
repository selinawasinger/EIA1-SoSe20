window.addEventListener("load", function () {
    var soundA: HTMLAudioElement = new Audio("A.mp3");
    var soundC: HTMLAudioElement = new Audio("C.mp3");
    var soundF: HTMLAudioElement = new Audio("F.mp3");
    var soundG: HTMLAudioElement = new Audio("G.mp3");
    var soundHihat: HTMLAudioElement = new Audio("hihat.mp3");
    var soundKick: HTMLAudioElement = new Audio("kick.mp3");
    var soundLaugh1: HTMLAudioElement = new Audio("laugh-1.mp3");
    var soundLaugh2: HTMLAudioElement = new Audio("laugh-2.mp3");
    var soundSnare: HTMLAudioElement = new Audio("snare.mp3");
    var sounds: HTMLAudioElement = [soundA, soundC, soundF, soundG, soundHihat, soundKick, soundLaugh1, soundLaugh2, soundSnare];
    
    function playSample(sounds:number): void {
        sounds.play();
    }

    document.querySelector("#button1").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(sounds[8]); });
    

    var beat: any = [soundA, soundC, soundF];
    function playBeat1() {
        beat[0].play();
    }
    function playBeat2() {
        beat[1].play();
    }
    function playBeat3() {
        beat[2].play();
    }
    function playBeat() {
        setTimeout(function () { playBeat1(); }, 1);
        setTimeout(function () { playBeat2(); }, 500);
        setTimeout(function () { playBeat3(); }, 1000);
    }
    document.querySelector("#play").addEventListener("click", playBeat);
});
