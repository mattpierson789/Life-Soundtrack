const btn = document.getElementById('instructions-button');
const overlay = document.getElementById('instructions-overlay');
const popup = document.getElementById('instructions-popup');
const closeBtn = document.getElementById('close-instructions');

function openModal() {
  overlay.classList.remove('hidden');
  btn.setAttribute('aria-expanded', 'true');
  // trap focus inside the popup
  popup.focus();
}
function closeModal() {
  overlay.classList.add('hidden');
  btn.setAttribute('aria-expanded', 'false');
  btn.focus();
}

// open when clicking the “Instructions” button
btn.addEventListener('click', openModal);

// close when clicking the ✕
closeBtn.addEventListener('click', closeModal);

// close when clicking outside the modal box
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

// close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
