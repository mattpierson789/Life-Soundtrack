import { trackDataArray } from './spotify-access-token.js';

const trackData = [];
const selectedTracks = [];
const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const createSoundtrackBtn = document.querySelector('#create-soundtrack-btn');

form.addEventListener('submit', event => {
  trackData.push(...trackDataArray);

  const tiles = container.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.addEventListener('mousedown', () => {
      const index = parseInt(tile.getAttribute('data-index'));
      const track = trackData[Math.floor(index / 20)].tracks.items[index % 20];
      selectedTracks.push(track);
      // Toggle the display of the create soundtrack button based on whether or not there are any selected tracks
      if (selectedTracks.length > 0) {
        createSoundtrackBtn.style.display = 'block';
      } else {
        createSoundtrackBtn.style.display = 'none';
      }
  
      tile.classList.add('selected');
    });
  });
  
});



//   createSoundtrackBtn.addEventListener('click', () => {
   
//     const soundtrack = createSoundtrack(selectedTracks);
//     console.log(soundtrack);
  
//     // Clear the selected tracks array and hide the create soundtrack button
//     selectedTracks.length = 0;
//     createSoundtrackBtn.style.display = 'none';
//   });
  
  

