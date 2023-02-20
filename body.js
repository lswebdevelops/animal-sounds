const fingers = document.querySelector('.fingers');
const arm = document.querySelector('.arm');
const leg   = document.querySelector('.leg');
const foot  = document.querySelector('.foot');
const knee = document.querySelector('.knee');
const elbow = document.querySelector('.elbow');
const head = document.querySelector('.head');
const nose = document.querySelector('.nose');
const ear = document.querySelector('.ear');
const eye = document.querySelector('.eye');
const hair = document.querySelector('.hair');
const mouth = document.querySelector('.mouth');
const tongue = document.querySelector('.tongue');


const bodyAudios ={
    finger: new Audio('bodySounds/finger.ogg'),
    arm: new Audio('bodySounds/arm.ogg'),
    leg: new Audio('bodySounds/leg.ogg'),
    foot: new Audio('bodySounds/foot.ogg'),
    knee: new Audio('bodySounds/knee.ogg'),
    elbow: new Audio('bodySounds/elbow.ogg'),
    head: new Audio('bodySounds/head.ogg'),
    nose: new Audio('bodySounds/nose.ogg'),
    ear: new Audio('bodySounds/ear.ogg'),
    eye: new Audio('bodySounds/eye.ogg'),
    hair: new Audio('bodySounds/hair.ogg'),
    mouth: new Audio('bodySounds/mouth.ogg'),
    tongue: new Audio('bodySounds/tongue.ogg'),
  }



  
let currentBodyAudio = null;

function playBodySound(part) {
 
  if (currentBodyAudio) {
    currentBodyAudio.pause();
    currentBodyAudio.currentTime = 0;
  }
    setTimeout(() => {
        currentBodyAudio = bodyAudios[part];
        currentBodyAudio.play();
  }, 1000);
}



const fingerImg = document.querySelector('.finger');
fingerImg.addEventListener('click', () => {
  playBodySound('finger');
});