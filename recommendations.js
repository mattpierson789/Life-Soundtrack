import { selectedTracks, trackData } from './spotify-access-token.js';

console.log("The code is running!");

const createSoundtrackButton = document.querySelector('.create-soundtrack-btn');
const container = document.getElementById('soundtrack-container');

function addEventListenersToTiles() {
     // Add event listeners to each tile
     const tiles = container.querySelectorAll('.tile');
  
     tiles.forEach((tile, index) => {
       let selected = false;
       let isLongClick = false;
       const audio = tile.querySelector('audio');
       const track = trackData[index].track;

 
       const LONG_CLICK_DELAY = 250; // in ms
       let longClickTimeout;
 
       function handleLongClick() {
         isLongClick = true;
         if (selected) {
           // Deselect the tile
           selected = false;
           tile.classList.remove('selected');
           const index = selectedTracks.indexOf(track);
           if (index > -1) {
             selectedTracks.splice(index, 1);
           }
         } else {
           // Select the tile
           selected = true;
           tile.classList.add('selected');
           selectedTracks.push(track);
         }
       }
 
       tile.addEventListener('mousedown', () => {
         longClickTimeout = setTimeout(handleLongClick, LONG_CLICK_DELAY);
       });
 
       tile.addEventListener('mouseup', () => {
         if (!isLongClick) {
           if (audio.paused) {
             audio.play();
           } else {
             audio.pause();
           }
         }
         clearTimeout(longClickTimeout);
         isLongClick = false;
       });
 
       audio.addEventListener('ended', () => {
         selected = false;
         tile.classList.remove('selected');
         const index = selectedTracks.indexOf(track);
         if (index > -1) {
           selectedTracks.splice(index, 1);
         }
       });
     });
}

function displayRecommendations(recommendations) {
  let html = '';

  recommendations.forEach(recommendation => {
    const track = recommendation;
    const album = track.album.name;
    const imageUrl = track.album.images[0].url;
    const previewUrl = track.preview_url;

    html += `
    <div class="tile" draggable="true" data-index="${recommendations.indexOf(recommendation)}">
      <img src="${imageUrl}" alt="${album} cover">
      <p class="caption">${track.name}</p>`;
    if (previewUrl) {
      html += `
      <audio controls style="display:none;">
        <source src="${previewUrl}" type="audio/mpeg">
      </audio>`;
    }
    html += `</div>`;
    console.log(`Got recommendation: ${track.name}`);
  });

  container.innerHTML = html;

  // Call the function to add event listeners to the tiles
  addEventListenersToTiles();
}

createSoundtrackButton.addEventListener('click', () => {
    console.log('Button clicked!'); 
    if (selectedTracks.length < 1) {
      alert('Please select at least one track.');
      return;
    }
  
    const selectedTrackIds = selectedTracks.map(track => track.id);
  
    fetch('http://localhost:5001/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ trackIds: selectedTrackIds })
    })
      .then(response => response.json())
      .then(recommendations => {
        if (recommendations.length < 1) {
          alert('No recommendations found.');
          return;
        }
  
        displayRecommendations(recommendations);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while getting recommendations.');
      });
  });
  
  






























  

