
import { getSoundtrack } from './openai-script.js';


// attempt #3

const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const loadMessage = document.getElementById('loader');
const accessToken = 'BQBGoz5pnkZUjqBmYg71pi4_6OYf0WXU0_1wS4Oz6v-MU70p_ObsCmNOOEJwDeiiKWD088b5KIwMcAh256KEpjIpCZ99e5_p8o245PAyiCdTTElCXbs';
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/x-www-form-urlencoded'
};

let selectedTracks = [];
let trackDataArray = [];
const displayedAlbums = [];
const trackData = [];


form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted!');
  console.log(loadMessage);
  loadMessage.style.display = 'none';
    loadMessage.style.display = 'block';
  container.style.display = 'flex';

  
  const description = document.getElementById('description').value;
  const prompt = `Create me a 20 song soundtrack inspired by ${description} always return as a list of song by artist like this 1. "Don't Stop Believin'" by Journey` ;
  const encodedPrompt = encodeURIComponent(prompt); // encode the prompt variable
  debugger
  // const apiUrl = `http://localhost:5001/?prompt=${encodedPrompt}`;
  const apiUrl = `https://life-soundtrack.onrender.com/?prompt=${encodedPrompt}` 
  console.log(prompt);
  console.log(description);
  console.log(apiUrl);

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log('OpenAI response:', data);
      if (data.choices && data.choices.length > 0) {
        const choices = data.choices;
      

        // Use the parser to process the choices.text
        let rawSongList = choices[0].text;
        console.log('Raw song list:', rawSongList);

        function parseSongList(rawSongList) {
            const lines = rawSongList.trim().split('\n');
            const songList = lines.map(line => {
              const match = line.match(/^(\d+)[.)]\s*(?:"(.+)"|(.+))\s*(?:by|-)?\s*(.+)/);
              if (match) {
                return {
                  song: match[2] || match[3],
                  artist: match[4].trim(),
                };
              }
            }).filter(Boolean); // filter out the undefined values
            return songList;
          }
   

        const parsedSongList = parseSongList(rawSongList);
        console.log('Parsed Song List:', parsedSongList);

        let playList = [];

        for (let i = 0; i < parsedSongList.length; i++) {
          playList.push({ song: parsedSongList[i].song, artist: parsedSongList[i].artist });
        }

        console.log('Playlist:', playList);

        // Map each song title and artist name to a search query for the Spotify API
const spotifyApiRequests = parsedSongList.map(song => {
    const encodedSong = encodeURIComponent(song.song);
    const encodedArtist = encodeURIComponent(song.artist);
    const spotifyApiUrl = `https://api.spotify.com/v1/search?q=track:%22${encodedSong}%22%20artist:%22${encodedArtist}%22&type=track&limit=1`;
    console.log('Spotify API URL:', spotifyApiUrl);
    return fetch(spotifyApiUrl, { headers });

  });


  Promise.all(spotifyApiRequests)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(dataArray => {
      let html = '';
      dataArray.forEach(data => {
        if (data.tracks.items.length > 0) {
          const track = data.tracks.items[0];
          const album = track.album.name;
          if (!displayedAlbums.includes(album)) {
            displayedAlbums.push(album);
            const imageUrl = track.album.images[0].url;
            const previewUrl = track.preview_url;
            const tileData = { album, track, imageUrl, previewUrl };
            trackData.push(tileData);
  
            // Create HTML to display metadata and preview audio
            html += `
            <div class="tile" draggable="true" data-index="${dataArray.indexOf(data)}">
                <img src="${imageUrl}" alt="${album} cover">
                <p class="caption">${track.name}</p>
                <audio controls style="display:none;">
                <source src="${previewUrl}" type="audio/mpeg">
                </audio>
            </div>
            `;
            console.log(`Got soundtrack: ${track.name}`);
          }
        }
      });

  
        container.innerHTML = html;

  
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

        if (!audio) {
            // If there is no audio element, do not add event listeners
            return;
          }
  
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
    })
    .catch(error => {
      console.error('Error:', error);
    
    });
}
});
});

export { headers, getSoundtrack, trackDataArray, selectedTracks, trackData };
  


// attempt # 4



// let headers;
// let trackDataArray = [];
// const selectedTracks = [];

// function setHeaders() {
//     headers = {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/x-www-form-urlencoded'
//     };
// }

// const accessToken = 'BQBTJPHC-k7z0Koz6O-pb2RrI4W9KUUErLi0dzLZIgxRqtGWwDeTcFUBsv5zOXQ2aZZDlZDZFKv3MEaNAytxGzkuc7DxenoXBS-eC0Kd6dn-z83X5a43';
// setHeaders();

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('soundtrack-form');
//     const container = document.getElementById('soundtrack-container');
//     let createSoundtrackBtn = null;

//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         console.log('Form submitted!');

//         const createSoundtrackBtn = document.querySelector('#create-soundtrack-btn');
//         container.style.display = 'flex';

//         const description = document.getElementById('description').value;

//     // Get soundtrack from OpenAI API
//         const prompt = `Create me a soundtrack ${description}`;
// const openAiApiUrl = `http://localhost:5001/?prompt=${prompt}`;

// fetch(openAiApiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const songs = data?.[0]?.text?.split('\n\n') || [];

//     const songObjects = songs.map((song) => {
//       const regex = /^- (.*) - "(.*)"/;
//       const match = song.match(regex);

//       if (match) {
//         return {
//           artist: match[1],
//           title: match[2]
//         };
//       }
//     }).filter(Boolean); // Remove any null or undefined values

//     const spotifyApiRequests = [];

//     for (let i = 0; i < songObjects.length; i++) {
//       const song = songObjects[i].title;
//       const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(song)}&type=track&limit=10`;
//       spotifyApiRequests.push(fetch(spotifyApiUrl, { headers }));
//     }
  

//     Promise.all(spotifyApiRequests)
//   .then(responses => Promise.all(responses.map(response => response.json())))
//   .then(trackData => {
//     const tiles = trackData.map(data => data.tracks.items[0]); // Get the first track from each search result

//     // Create a tile for each track with its metadata and audio preview
//     const tilesHTML = [];
//     for (let i = 0; i < trackData.length; i++) {
//       const data = trackData[i];
//       if (data.tracks.items.length > 0) {
//         const track = data.tracks.items[0];
//         const album = track.album.name;
//         const imageUrl = track.album.images[0].url;
//         const previewUrl = track.preview_url;

//         const tile = `
// <div class="tile" draggable="true" data-index="${i}">
//     <img src="${imageUrl}" alt="${album} cover">
//     <p class="caption">${track.name}</p>
//     <audio controls style="display:none;">
//     <source src="${previewUrl}" type="audio/mpeg">
//     </audio>
// </div>
// `;
//         console.log(`Got soundtrack: ${track.name}`);
//         tilesHTML.push(tile);
//       }
//     }

//     trackDataArray = trackData;

//     container.innerHTML = tilesHTML.join('');

//     trackDataArray = trackData;

//     // Add event listeners to tiles for selecting or deselecting.
//     const newSoundtrackTiles = container.querySelectorAll('.tile');
//     newSoundtrackTiles.forEach((tile, index) => {
//         tile.addEventListener('mousedown', () => {
//             const tileIndex = parseInt(tile.getAttribute('data-index'));
//             const track = trackDataArray[tileIndex].tracks.items[0];
//             selectedTracks.push(track);

//             // Toggle the display of the create soundtrack button based on whether or not there are any selected tracks
//             if (selectedTracks.length > 0) {
//                 createSoundtrackBtn.style.display = 'block';
//             } else {
//                 createSoundtrackBtn.style.display = 'none';
//             }

//             tile.classList.add('selected');
//         });
//     });

//     newSoundtrackTiles.forEach((tile, index) => {
//         tile.addEventListener('mousedown', () => {
//             const tileIndex = parseInt(tile.getAttribute('data-index'));
//             const track = trackDataArray[tileIndex].tracks.items[0];
//             selectedTracks.push(track);

//             // Toggle the display of the create soundtrack button based on whether or not there are any selected tracks
//             if (selectedTracks.length > 0) {
//                 createSoundtrackBtn.style.display = 'block';
//             } else {
//                 createSoundtrackBtn.style.display = 'none';
//             }

//             tile.classList.add('selected');
//         });
//     });

//     // Add event listeners to tiles for playing the audio and selecting or deselecting.
//     newSoundtrackTiles.forEach((tile, index) => {
//         let selected = false;
//         let isLongClick = false;
//         const audio = tile.querySelector('audio');
//         const track = trackData[index].tracks.items[0];

//         const LONG_CLICK_DELAY = 250; // in ms
//         let longClickTimeout;

//         function handleLongClick() {
//             isLongClick = true;
//             if (selected) {
//                 // Deselect the tile
//                 selected = false;
//                 tile.classList.remove('selected');
//                 const index = selectedTracks.indexOf(track);
//                 if (index > -1) {
//                     selectedTracks.splice(index, 1);
//                 }
//             } else {
//                 // Select the tile
//                 selected = true;
//                 tile.classList.add('selected');
//                 selectedTracks.push(track);
//             }
//         }

//         tile.addEventListener('mousedown', () => {
//             longClickTimeout = setTimeout(handleLongClick, LONG_CLICK_DELAY);
//         });

//         tile.addEventListener('mouseup', () => {
//             if (!isLongClick) {
//                 if (audio.paused) {
//                     audio.play();
//                 } else {
//                     audio.pause();
//                 }
//             }
//             clearTimeout(longClickTimeout);
//             isLongClick = false;
//         });

//         audio.addEventListener('ended', () => {
//             selected = false;
//             tile.classList.remove('selected');
//             const index = selectedTracks.indexOf(track);
//             if (index > -1) {
//                 selectedTracks.splice(index, 1);
//             }
//         });
//     });
// });
// });
// });
// });

// export { headers, getSoundtrack, trackDataArray };







// garbage bin code 

// Event Lisenters for audio / selction 

//   let trackData = []

//     let trackDataArray = trackData;

    // container.innerHTML = tilesHTML.join('');

    // // Add event listeners to tiles for selecting or deselecting.
    // const newSoundtrackTiles = container.querySelectorAll('.tile');
    // newSoundtrackTiles.forEach((tile, index) => {
    //     tile.addEventListener('mousedown', () => {
    //         const tileIndex = parseInt(tile.getAttribute('data-index'));
    //         const track = trackDataArray[tileIndex].tracks.items[0];
    //         selectedTracks.push(track);

    //         // Toggle the display of the create soundtrack button based on whether or not there are any selected tracks
    //         if (selectedTracks.length > 0) {
    //             createSoundtrackBtn.style.display = 'block';
    //         } else {
    //             createSoundtrackBtn.style.display = 'none';
    //         }

    //         tile.classList.add('selected');
    //     });
    // });

    // newSoundtrackTiles.forEach((tile, index) => {
    //     tile.addEventListener('mousedown', () => {
    //         const tileIndex = parseInt(tile.getAttribute('data-index'));
    //         const track = trackDataArray[tileIndex].tracks.items[0];
    //         selectedTracks.push(track);

    //         // Toggle the display of the create soundtrack button based on whether or not there are any selected tracks
    //         if (selectedTracks.length > 0) {
    //             createSoundtrackBtn.style.display = 'block';
    //         } else {
    //             createSoundtrackBtn.style.display = 'none';
    //         }

    //         tile.classList.add('selected');
    //     });
    // });

    // Add event listeners to tiles for playing the audio and selecting or deselecting.

         // Add event listeners to the tiles to play the audio when clicked
        //   const tiles = document.querySelectorAll('.tile');
        //   tiles.forEach(tile => {
        //     const audio = tile.querySelector('audio');
        //     tile.addEventListener('click', () => {
        //       if (audio.paused) {
        //         audio.play();
        //       } else {
        //         audio.pause();
        //       }
        //     });

            // Add event listeners to the tiles to select them 

        //     tile.addEventListener('mousedown', () => {
        //       // Get the corresponding track from the Spotify API data
        //       const index = tile.dataset.index;
        //       const track = dataArray[index].tracks.items[0];
        //       const album = track.album.name;
        //       console.log(`Selected ${album} by ${track.artists[0].name}`);
        //     });
        //   });


           // Assign the track data to the global variable

        //   Add event listeners to tiles for playing the audio and selecting or deselecting.

        //  Add event listeners to the tiles to play the audio when clicked
        //   const tiles = document.querySelectorAll('.tile');
        //   tiles.forEach(tile => {
        //     const audio = tile.querySelector('audio');
        //     tile.addEventListener('click', () => {
        //       if (audio.paused) {
        //         audio.play();
        //       } else {
        //         audio.pause();
        //       }
        //     });
     
    //   });


// export { headers, getSoundtrack, trackDataArray };