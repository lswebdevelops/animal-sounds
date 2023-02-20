// Hide the URL when the page loads
history.pushState({}, '', '');

// Restore the URL when the page is refreshed
window.addEventListener('beforeunload', function() {
  history.replaceState({}, '', location.href);
});


const nextBtn = document.querySelector('#nextBtn');
nextBtn.addEventListener('click',()=>{
  window.location.href = "body.html";
});
const prevBtn = document.querySelector('#prevBtn');
prevBtn.addEventListener('click',()=>{

  window.location.href = "index.html";
}
);
document.addEventListener("DOMContentLoaded", function() {

  const colorAudios ={
    red: new Audio('colorSounds/red.ogg'),
    orange: new Audio('colorSounds/orange.ogg'),
    yellow: new Audio('colorSounds/yellow.ogg'),
    green: new Audio('colorSounds/green.ogg'),
    blue: new Audio('colorSounds/blue.ogg'),
    purple: new Audio('colorSounds/purple.ogg'),
    pink: new Audio('colorSounds/pink.ogg'),
    brown: new Audio('colorSounds/brown.ogg'),
    gray: new Audio('colorSounds/gray.ogg'),
    black: new Audio('colorSounds/black.ogg'),
    white: new Audio('colorSounds/white.ogg'),
    beige: new Audio('colorSounds/beige.ogg'),

  }

let currentColorAudio = null;

function playColorSound(color) {
 
  if (currentColorAudio) {
    currentColorAudio.pause();
    currentColorAudio.currentTime = 0;
  }
    setTimeout(() => {
      currentColorAudio = colorAudios[color];
      currentColorAudio.play();
  }, 1000);
}



const redImg = document.querySelector('.red');
redImg.addEventListener('click', () => {
  playColorSound('red');
});
const orangeImg = document.querySelector('.orange');
orangeImg.addEventListener('click', () => {
  playColorSound('orange');
});
const yellowImg = document.querySelector('.yellow');
yellowImg.addEventListener('click', () => {
  playColorSound('yellow');
});
const greenImg = document.querySelector('.green');
greenImg.addEventListener('click', () => {
  playColorSound('green');
});
const blueImg = document.querySelector('.blue');
blueImg.addEventListener('click', () => {
  playColorSound('blue');
});
const purpleImg = document.querySelector('.purple');
purpleImg.addEventListener('click', () => {
  playColorSound('purple');
});
const pinkImg = document.querySelector('.pink');
pinkImg.addEventListener('click', () => {
  playColorSound('pink');
});
const brownImg = document.querySelector('.brown');
brownImg.addEventListener('click', () => {
  playColorSound('brown');
});
const grayImg = document.querySelector('.gray');
grayImg.addEventListener('click', () => {
  playColorSound('gray');
});
const blackImg = document.querySelector('.black');
blackImg.addEventListener('click', () => {
  playColorSound('black');
});
const whiteImg = document.querySelector('.white');
whiteImg.addEventListener('click', () => {
  playColorSound('white');
});
const beigeImg = document.querySelector('.beige');
beigeImg.addEventListener('click', () => {
  playColorSound('beige');
});



});
