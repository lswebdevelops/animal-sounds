document.addEventListener("DOMContentLoaded", function() {

const catImg = document.querySelector('#animal1');
const chickenImg = document.querySelector('#animal2');
const cowImg = document.querySelector('#animal3');
const dogImg = document.querySelector('#animal4');
const duckImg = document.querySelector('#animal5');
const goatImg = document.querySelector('#animal6');
const gooseImg = document.querySelector('#animal7');
const horseImg = document.querySelector('#animal8');
const pigImg = document.querySelector('#animal9');
const roosterImg = document.querySelector('#animal10');
const sheepImg = document.querySelector('#animal11');
const turkeyImg = document.querySelector('#animal12');
let currentAudio = null;
let catSound;
catImg.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Play word
  currentAudio = new Audio('sounds/words/catWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
     catSound = new Audio('sounds/catSound.mp3');
    catSound.play();
  }, 1000);

  console.log('cat');
});

chickenImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/chickenWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let catSound = new Audio('sounds/chickenSound.mp3');
    catSound.play();
  }, 10);

  });

cowImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/cowWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let cowImg = new Audio('sounds/cowSound.mp3');
    cowImg.play();
  }, 1000);

  });

dogImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/dogWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let dogImg = new Audio('sounds/dogSound.mp3');
    dogImg.play();
  }, 1000);

  });
duckImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/duckWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let duckImg = new Audio('sounds/duckSound.mp3');
    duckImg.play();
  }, 1000);

  });

  goatImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/goatWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let goatImg = new Audio('sounds/goatSound.mp3');
    goatImg.play();
  }, 1000);

  });


  gooseImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/gooseWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let gooseImg = new Audio('sounds/gooseSound.mp3');
    gooseImg.play();
  }, 1000);

  });

  horseImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/horseWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let horseImg = new Audio('sounds/horseSound.mp3');
    horseImg.play();
  }, 1000);

  });

  pigImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/pigWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let pigImg = new Audio('sounds/pigSound.mp3');
    pigImg.play();
  }, 1000);

  });

  roosterImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/roosterWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let roosterImg = new Audio('sounds/roosterSound.mp3');
    roosterImg.play();
  }, 1000);

  });

  sheepImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/sheepWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let sheepImg = new Audio('sounds/sheepSound.mp3');
    sheepImg.play();
  }, 1000);

  });


  turkeyImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
     // Play word
  currentAudio = new Audio('sounds/words/turkeyWord.ogg');

  currentAudio.play();

  // Play  sound after a delay of 2 seconds
  setTimeout(() => {
   
    let turkeyImg = new Audio('sounds/turkeySound.mp3');
    turkeyImg.play();
  }, 1000);

  });

  












  // end of DOMContentLoaded
});