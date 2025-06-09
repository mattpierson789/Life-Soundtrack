import { selectedTracks, trackData } from './spotify-access-token.js';

console.log("The code is running!");

const createSoundtrackButton = document.querySelector('.create-soundtrack-btn');
const container = document.getElementById('soundtrack-container');

function addEventListenersToTiles() {
  const tiles = container.querySelectorAll('.tile');

  tiles.forEach((tile, index) => {
    let selected = false;
    let isLongClick = false;
    const audio = tile.querySelector('audio');
    const track = trackData[index].track;

    const LONG_CLICK_DELAY = 250;
    let longClickTimeout;

    function handleLongClick() {
      isLongClick = true;
      if (selected) {
        selected = false;
        tile.classList.remove('selected');
        const idx = selectedTracks.indexOf(track);
        if (idx > -1) selectedTracks.splice(idx, 1);
      } else {
        selected = true;
        tile.classList.add('selected');
        selectedTracks.push(track);
      }
    }

    tile.addEventListener('mousedown', () => {
      longClickTimeout = setTimeout(handleLongClick, LONG_CLICK_DELAY);
    });

    tile.addEventListener('mouseup', () => {
      if (!isLongClick && audio) {
        audio.paused ? audio.play() : audio.pause();
      }
      clearTimeout(longClickTimeout);
      isLongClick = false;
    });

    if (audio) {
      audio.addEventListener('ended', () => {
        selected = false;
        tile.classList.remove('selected');
        const idx = selectedTracks.indexOf(track);
        if (idx > -1) selectedTracks.splice(idx, 1);
      });
    }
  });
}

function displayRecommendations(recommendations) {
  let html = '';

  recommendations.forEach((track, index) => {
    const album = track.album.name;
    const imageUrl = track.album.images[0].url;
    const previewUrl = track.preview_url;
    const embedUrl = `https://open.spotify.com/embed/track/${track.id}`;

    html += `
      <div class="tile" draggable="true" data-index="${index}">
        <img src="${imageUrl}" alt="${album} cover">
        <p class="caption">${track.name}</p>
    `;

    if (previewUrl) {
      html += `
        <audio controls style="display:none;">
          <source src="${previewUrl}" type="audio/mpeg">
        </audio>`;
    } else {
      html += `
        <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" 
                allowtransparency="true" allow="encrypted-media">
        </iframe>`;
    }

    html += `</div>`;
    console.log(`Got recommendation: ${track.name}`);
  });

  container.innerHTML = html;
  addEventListenersToTiles();
}

createSoundtrackButton.addEventListener('click', () => {
  console.log('Button clicked!');

  if (selectedTracks.length < 1) {
    alert('Please select at least one track.');
    return;
  }

  const selectedTrackIds = selectedTracks.map(track => track.id);

  fetch('https://life-soundtrack.onrender.com/recommendations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trackIds: selectedTrackIds })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      return response.json();
    })
    .then(recommendations => {
      if (!recommendations || recommendations.length < 1) {
        alert('No recommendations found.');
        return;
      }
      displayRecommendations(recommendations);
    })
    .catch(error => {
      console.error('Error fetching recommendations:', error);
      alert('Failed to fetch recommendations. Check the console for details.');
    });
});
