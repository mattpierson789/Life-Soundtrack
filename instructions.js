const instructionsButton = document.getElementById('instructions-button');
const instructionsPopUp = document.getElementById('instructions-popup');
const createSoundtrackButton = document.querySelector('.create-soundtrack-btn');

let isInstructionsOpen = false; // Track if the instructions pop-up is open

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
  isInstructionsOpen = false; // Set instructions pop-up state to closed
});

createSoundtrackButton.addEventListener('mouseleave', () => {
  instructionsPopUp.classList.add('hidden');
  isInstructionsOpen = false; // Set instructions pop-up state to closed
});

const closeButton = document.querySelector('#instructions-popup button');
closeButton.addEventListener('click', () => {
  instructionsPopUp.style.display = 'none';
  isInstructionsOpen = false; // Set instructions pop-up state to closed
});

instructionsPopUp.addEventListener('mouseenter', () => {
  isInstructionsOpen = true; // Set instructions pop-up state to open
});

instructionsPopUp.addEventListener('mouseleave', () => {
  isInstructionsOpen = false; // Set instructions pop-up state to closed
});
