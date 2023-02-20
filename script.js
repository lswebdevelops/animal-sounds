document.addEventListener("DOMContentLoaded", function() {

  const animalSounds = {
    cat: new Audio('sounds/catSound.mp3'),
    chicken: new Audio('sounds/chickenSound.mp3'),
    cow: new Audio('sounds/cowSound.mp3'),
    dog: new Audio('sounds/dogSound.mp3'),
    duck: new Audio('sounds/duckSound.mp3'),
    goat: new Audio('sounds/goatSound.mp3'),
    goose: new Audio('sounds/gooseSound.mp3'),
    horse: new Audio('sounds/horseSound.mp3'),
    pig: new Audio('sounds/pigSound.mp3'),
    rooster: new Audio('sounds/roosterSound.mp3'),
    sheep: new Audio('sounds/sheepSound.mp3'),
    turkey: new Audio('sounds/turkeySound.mp3')
  };

  let currentWordAudio = null;
  let currentAnimalAudio = null;

  function playAnimalSound(animal) {
    if (currentWordAudio) {
      currentWordAudio.pause();
      currentWordAudio.currentTime = 0;
    }
    if (currentAnimalAudio) {
      currentAnimalAudio.pause();
      currentAnimalAudio.currentTime = 0;
    }
    currentWordAudio = new Audio(`sounds/words/${animal}Word.ogg`);
    currentWordAudio.play();
    setTimeout(() => {
      currentAnimalAudio = animalSounds[animal];
      currentAnimalAudio.play();
    }, 1000);
  }

  const catImg = document.querySelector('#animal1');
  catImg.addEventListener('click', () => {
    playAnimalSound('cat');
  });

  const chickenImg = document.querySelector('#animal2');
  chickenImg.addEventListener('click', () => {
    playAnimalSound('chicken');
  });

  // Add event listeners for other animal images in a similar way
  const cowImg = document.querySelector('#animal3');
  cowImg.addEventListener('click', () => {
    playAnimalSound('cow');
  }
  );
  const dogImg = document.querySelector('#animal4');
  dogImg.addEventListener('click', () => {
    playAnimalSound('dog');
  });
  const duckImg = document.querySelector('#animal5');
  duckImg.addEventListener('click', () => {
    playAnimalSound('duck');
  });

  const goatImg = document.querySelector("#animal6");
  goatImg.addEventListener('click', ()=> {
    playAnimalSound('goat');
  });

  const gooseImg =document.querySelector('#animal7');
  gooseImg.addEventListener('click', ()=>{
    playAnimalSound('goose');
  })
  const horseImg = document.querySelector('#animal8');
  horseImg.addEventListener('click',()=>{
    playAnimalSound('horse')
  });

const pigImg = document.querySelector('#animal9');
pigImg.addEventListener('click',()=>{
  playAnimalSound('pig')  
});
const roosterImg = document.querySelector('#animal10');
roosterImg.addEventListener('click',()=>{
  playAnimalSound('rooster')
});
const sheepImg = document.querySelector('#animal11');
sheepImg.addEventListener('click',()=>{
  playAnimalSound('sheep')
});
const turkeyImg = document.querySelector('#animal12');
turkeyImg.addEventListener('click',()=>{
  playAnimalSound('turkey')
});


});
