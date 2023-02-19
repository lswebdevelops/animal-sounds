document.addEventListener("DOMContentLoaded", function() {
    let correctAnimal = 'animal' + (Math.floor(Math.random() * 2) + 1);
    let correctAnswer = false;

    document.getElementById('playButton').addEventListener('click', function() {
        playSound(correctAnimal);
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        resetGame();
    });

    document.getElementById('animal1').addEventListener('click', function() {
        checkAnswer('animal1');
    });

    document.getElementById('animal2').addEventListener('click', function() {
        checkAnswer('animal2');
    });

    function playSound(animal) {
        let audio = document.getElementById('audio' + animal.substr(-1));
        audio.play();
        audio.addEventListener('ended', function() {
            // do nothing here, wait for user to click on correct image
        });
    }

    function checkAnswer(animal) {
        if (animal === correctAnimal && !correctAnswer) {
            document.getElementById('result').innerHTML = '<img src="images/smile.png">';
            setTimeout(function() {
                resetGame();
            }, 3000);
            correctAnswer = true;
        } else {
            document.getElementById('result').innerHTML = '<img src="images/cry.jpg">';
            setTimeout(function() {
                document.getElementById('result').innerHTML = '';
            }, 2000);
        }
    }

    function resetGame() {
        correctAnswer = false;
        document.getElementById('result').innerHTML = '';
        document.getElementById('animal1').src = 'images/dog.jpg';
        document.getElementById('animal2').src = 'images/cat.jpg';
        document.getElementById('audio1').src = 'sounds/dogSound.mp3';
        document.getElementById('audio2').src = 'sounds/catSound.mp3';
        let randomNum = Math.floor(Math.random() * 2) + 1;
        correctAnimal = 'animal' + randomNum;
        document.getElementById('audio1').pause();
        document.getElementById('audio2').pause();
        document.getElementById('audio3').pause();
        document.getElementById('audio4').pause();
        playSound(correctAnimal);
    }
});
function restartPage() {
    location.reload();
  }