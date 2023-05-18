const instructionsButton = document.getElementById('instructions-button');
const instructionsPopUp = document.getElementById('instructions-popup');
const createSoundtrackButton = document.querySelector('.create-soundtrack-btn');

let isInstructionsOpen = false; 

instructionsButton.addEventListener('mouseenter', () => {
  instructionsPopUp.classList.remove('hidden');
});

instructionsButton.addEventListener('mouseleave', () => {
  if (!isInstructionsOpen) {
    instructionsPopUp.classList.add('hidden');
  }
});

createSoundtrackButton.addEventListener('mouseenter', () => {
  instructionsPopUp.classList.add('hidden');
  isInstructionsOpen = false; 
});

createSoundtrackButton.addEventListener('mouseleave', () => {
  instructionsPopUp.classList.add('hidden');
  isInstructionsOpen = false; 
});

const closeButton = document.querySelector('#instructions-popup button');
closeButton.addEventListener('click', () => {
  instructionsPopUp.style.display = 'none';
  isInstructionsOpen = false; 
});

instructionsPopUp.addEventListener('mouseenter', () => {
  isInstructionsOpen = true; 
});

instructionsPopUp.addEventListener('mouseleave', () => {
  isInstructionsOpen = false; 
});
