import { getSoundtrack } from './openai-script.js';

// const form = document.getElementById('soundtrack-form');
// const container = document.getElementById('soundtrack-container');
// const accessToken = 'BQApTplF8Bi5cQ5TIasajb2w37gpJVy6oZ3NcpPanAJ6jQkAww8yWUExvgeDd0I_Qky2AzGmmaPVpnv1sOLIisC2Tc1FfQknTk4PFNL8Z7Unj_rrxpqb';
// const headers = {
//   'Authorization': `Bearer ${accessToken}`,
//   'Content-Type': 'application/x-www-form-urlencoded'
// };

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log('Form submitted!');
//   container.style.display = 'flex';
//   const description = document.getElementById('description').value;


//   // Get soundtrack from API
//   const prompt = `Create me a soundtrack ${description}`;
//   const apiUrl = `http://localhost:5001/?prompt=${prompt}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       if (data.choices && data.choices.length > 0) {
//         const choices = data.choices;
//         choices.forEach(choice => {
//           const soundtrack = choice.text;
//           const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${soundtrack}&type=track&limit=1`;
//           return fetch(spotifyApiUrl, { headers })
//             .then(response => response.json())
//             .then(data => {
//               if (data.tracks.items.length > 0) {
//                 let html = '';
//                 const displayedAlbums = [];

//                 // Loop through all available tracks and display their album art
//                 data.tracks.items.forEach((track, index) => {
//                   const album = track.album.name;
//                   if (displayedAlbums.includes(album)) {
//                     return; // skip this album if it has already been displayed
//                   }
//                   displayedAlbums.push(album);
//                   const imageUrl = track.album.images[0].url;
//                   const previewUrl = track.preview_url;

//                   // Create HTML to display metadata and preview audio
//                   html += `
//                     <div class="tile" draggable="true" data-index="${index}">
//                       <img src="${imageUrl}" alt="${album} cover">
//                       <p class="caption">${track.name}</p>
//                       <audio controls style="display:none;">
//                         <source src="${previewUrl}" type="audio/mpeg">
//                       </audio>
//                     </div>
//                   `;
//                   console.log(`Got soundtrack: ${track.name}`);
//                 });

//                 container.innerHTML = html;

//                 // Add event listeners to the tiles to play the audio when clicked
//                 const tiles = document.querySelectorAll('.tile');
//                 tiles.forEach(tile => {
//                   const audio = tile.querySelector('audio');
//                   tile.addEventListener('click', () => {
//                       if (audio.paused) {
//                         audio.play();
//                       } else {
//                           audio.pause();
//                       }
//                   });

//                   // Add event listeners to the tiles to select them 

//                   tile.addEventListener('mousedown', (event) => {
//                       // Get the corresponding track from the Spotify API data
//                       const index = tile.dataset.index;
//                       const track = data.tracks.items[index];
//                       const album = track.album.name;
//                       console.log(`Selected ${album} by ${track.artists[0].name}`);
//                   });
//                 });
//               } else {
//                 container.innerHTML = `<p>No soundtrack found</p>`;
//               }
//             })
//             .catch(error => {
//               console.error(error);
//               container.innerHTML = `<p>Error getting soundtrack metadata</p>`;
//             });
//         });
//       }
//     });
// });



// attempt #2

// const form = document.getElementById('soundtrack-form');
// const container = document.getElementById('soundtrack-container');
// const accessToken = 'BQApTplF8Bi5cQ5TIasajb2w37gpJVy6oZ3NcpPanAJ6jQkAww8yWUExvgeDd0I_Qky2AzGmmaPVpnv1sOLIisC2Tc1FfQknTk4PFNL8Z7Unj_rrxpqb';
// const headers = {
//   'Authorization': `Bearer ${accessToken}`,
//   'Content-Type': 'application/x-www-form-urlencoded'
// };

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log('Form submitted!');
//     container.style.display = 'flex';
//     const description = document.getElementById('description').value;
  
//     // Get soundtrack from OpenAI API
//     const prompt = `Create me a soundtrack ${description}`;
//     const openAiApiUrl = `http://localhost:5001/?prompt=${prompt}`;
  
//     fetch(openAiApiUrl)
//       .then(response => response.json())
//       .then(data => {
//         console.log('OpenAI response:', data);
//         const choices = data.choices;
//         const spotifyApiRequests = [];
  
//         // Create a Spotify API request for each song
//         for (let i = 0; i < choices.length; i++) {
//             const song = choices[i].text;
//           const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(song)}&type=track&limit=1`;
//           spotifyApiRequests.push(fetch(spotifyApiUrl, { headers }));
//         }
  
//         // Fetch metadata for each song from the Spotify API
//         Promise.all(spotifyApiRequests)
//           .then(responses => Promise.all(responses.map(response => response.json())))
//           .then(trackData => {
//             const tiles = [];
  
//             // Create a tile for each track with its metadata and audio preview
//             for (let i = 0; i < trackData.length; i++) {
//               const data = trackData[i];
//               if (data.tracks.items.length > 0) {
//                 const track = data.tracks.items[0];
//                 const album = track.album.name;
//                 const imageUrl = track.album.images[0].url;
//                 const previewUrl = track.preview_url;
  
//                 const tile = `
//                   <div class="tile" draggable="true">
//                     <img src="${imageUrl}" alt="${album} cover">
//                     <p class="caption">${track.name}</p>
//                     <audio controls style="display:none;">
//                       <source src="${previewUrl}" type="audio/mpeg">
//                     </audio>
//                   </div>
//                 `;
//                 console.log(`Got soundtrack: ${track.name}`);
//                 tiles.push(tile);
//               }
//             }
  
//             if (tiles.length > 0) {
//               container.innerHTML = tiles.join('');
//               const audioElements = container.querySelectorAll('audio');
//               audioElements.forEach(audio => {
//                 audio.addEventListener('play', () => {
//                   audioElements.forEach(otherAudio => {
//                     if (otherAudio !== audio) {
//                       otherAudio.pause();
//                     }
//                   });
//                 });
//               });
//             } else {
//               container.innerHTML = '<p>No soundtrack found</p>';
//             }
//           })
//           .catch(error => {
//             console.error(error);
//             container.innerHTML = '<p>Error getting soundtrack from Spotify API</p>';
//           });
//       })
//       .catch(error => {
//         console.error(error);
//         container.innerHTML = '<p>Error getting soundtrack from OpenAI API</p>';
//       });
//   });


const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const accessToken = 'BQCI7C-56d37dG9IRiYIXQwoPupjlP_iRrETDC21qapjHUjLiBF-Num9aE1Nww8dg1G6S022TzKEDkskRTVtVSweefOZw-1HRCTMPoYxMGDdjVtyPB8R';
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/x-www-form-urlencoded'
};

let selectedTracks = [];
let trackDataArray = [];

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted!');
  container.style.display = 'flex';
  const description = document.getElementById('description').value;

  // Get search queries for each song from API
  getSoundtrack(description)
    .then(searchQueries => {
      // Create an array of promises for each Spotify API request
      const promises = searchQueries.map(searchQuery => fetch(searchQuery, { headers }));
      // Use Promise.all to wait for all promises to resolve
      return Promise.all(promises);
    })
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(trackData => {
      let html = '';
      const displayedAlbums = [];

      // Loop through all available tracks and display their album art
      trackData.forEach(data => {
        if (data.tracks.items.length > 0) {
          data.tracks.items.forEach((track, index) => {
            const album = track.album.name;
            if (displayedAlbums.includes(album)) {
              return; // skip this album if it has already been displayed
            }
            displayedAlbums.push(album);
            const imageUrl = track.album.images[0].url;
            const previewUrl = track.preview_url;
           

            // Create HTML to display metadata and preview audio
            html += `
              <div class="tile" draggable="true" data-index="${index}">
                <img src="${imageUrl}" alt="${album} cover">
                <p class="caption">${track.name}</p>
                <audio controls style="display:none;">
                  <source src="${previewUrl}" type="audio/mpeg">
                </audio>
              </div>
            `;
            console.log(`Got soundtrack: ${track.name}`);
          });

        } else {
          container.innerHTML = `<p>No soundtrack found</p>`;
        }
      });
      

      container.innerHTML = html;

        // Assign the track data to the global variable
        trackDataArray = trackData;

        // Add event listeners to tiles for playing the audio and selecting or desselcting.

      const tiles = container.querySelectorAll('.tile');

      tiles.forEach(tile => {
        let selected = false;
        let isLongClick = false;
        const audio = tile.querySelector('audio');
        const index = tile.dataset.index;
        const track = trackData[Math.floor(index / 20)].tracks.items[index % 20];
      
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
  
});

});

export { headers, getSoundtrack, trackDataArray };



