document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio();
    function myAudioFunction(letter) {
       audio.pause()
       audio = new Audio('sounds/'+letter+'.mp3');
        audio.play();
    }
});