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

catImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/catSound.mp3');
    currentAudio.play();
    console.log('cat');
  });
 
  chickenImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/chickenSound.mp3');
    currentAudio.play();
    console.log('chicken');
  });

  cowImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/cowSound.mp3');
    currentAudio.play();
    console.log('cow');
  });

  dogImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/dogSound.mp3');
    currentAudio.play();
    console.log('dog');
  });

  duckImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/duckSound.mp3');
    currentAudio.play();
    console.log('duck');
  });

  goatImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/goatSound.mp3');
    currentAudio.play();
    console.log('goat');
  });

  gooseImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/gooseSound.mp3');
    currentAudio.play();
    console.log('goose');
  });

  horseImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/horseSound.mp3');
    currentAudio.play();
    console.log('horse');
  });

  pigImg.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('sounds/pigSound.mp3');
    currentAudio.play();
    console.log('pig');
  });
  
  roosterImg.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    currentAudio = new Audio('sounds/roosterSound.mp3');
    currentAudio.play();
    console.log('rooster');
  });
  
  sheepImg.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    currentAudio = new Audio('sounds/sheepSound.mp3');
    currentAudio.play();
    console.log('sheep');
  });
  
  turkeyImg.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    currentAudio = new Audio('sounds/turkeySound.mp3');
    currentAudio.play();
    console.log('turkey');
  });
});  