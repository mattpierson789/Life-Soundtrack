
document.addEventListener("DOMContentLoaded", function() {
  window.setTimeout(function() {
    document.getElementById('instructions-popup').style.display = 'block';
  }, 2000); // delay of 2 seconds before displaying the pop-up

  const closeButton = document.querySelector('#instructions-popup button');
  closeButton.addEventListener('click', () => {
    document.getElementById('instructions-popup').style.display = 'none';
  });
});
