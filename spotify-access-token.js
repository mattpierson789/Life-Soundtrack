
import { getSoundtrack } from './openai-script.js';

// const form = document.getElementById('soundtrack-form');
// const container = document.getElementById('soundtrack-container');
// const accessToken = 'BQAxHUIPe469_Un7zn_elyM1WqRL1AhwoclS0UhsCnwvTwQiEyUuYBWndiCLPpwKHnaYw71zJk0475gVghsioXThIxsM2bwaZ2Sfp5wnXYxamBx3F4DM';
// const headers = {
//   'Authorization': `Bearer ${accessToken}`,
//   'Content-Type': 'application/x-www-form-urlencoded'
// };

// const displayedAlbums = [];
// const selectedTracks = [];
// const trackData = [];


// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log('Form submitted!');
//   container.style.display = 'flex';

// const description = document.getElementById('description').value;
// const prompt = `Create me a 20 song soundtrack inspired by ${description}`;
// const encodedPrompt = encodeURIComponent(prompt); // encode the prompt variable
// const apiUrl = `http://localhost:5001/?prompt=${encodedPrompt}`;
// console.log(prompt);
// console.log(description);
// console.log(apiUrl);

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log('OpenAI response:', data);
//     if (data.choices && data.choices.length > 0) {
//       const choices = data.choices;

//       // Use the parser to process the choices.text
//       let rawSongList = choices[0].text
//         console.log('Raw song list:', rawSongList);
      
//         function parseSongList(rawSongList) {
//             const lines = rawSongList.trim().split('\n');
//             const songList = lines.map(line => {
//               const match1 = line.match(/^\d+\.\s*"(.+)"\s+-\s+(.+)$/); // matches "song" - "artist"
//               const match2 = line.match(/^\d+\.\s*(?:"(.+)"|(?:"[^"]*"))\s+-\s+(.+)$/); // matches "song" by "artist"
//               const match3 = line.match(/^\d+\.\s*(.+)\sby\s(.+)$/); // matches "song" by "artist"
//               const match4 = line.match(/^\d+\.\s*(.+)\s-\s(.+)$/); // matches "song" - "artist"
          
//               if (match1) {
//                 return {
//                   song: match1[1],
//                   artist: match1[2],
//                 };
//               } else if (match2) {
//                 return {
//                   song: match2[1],
//                   artist: match2[2],
//                 };
//               } else if (match3) {
//                 return {
//                   song: match3[1],
//                   artist: match3[2],
//                 };
//               } else if (match4) {
//                 return {
//                   song: match4[1],
//                   artist: match4[2],
//                 };
//               }
//             }).filter(Boolean);
//             return songList;
//           }
                    
//           const parsedSongList = parseSongList(rawSongList);
//           console.log('Parsed Song List:', parsedSongList);

//       let playList = [];

//       for (let i = 0; i < parsedSongList.length; i++) {
//         playList.push({ song: parsedSongList[i].song, artist: parsedSongList[i].artist});
//       }

//       console.log('Playlist:', playList);

//         // Map each song title and artist name to a search query for the Spotify API

//         const spotifyApiRequests = parsedSongList.map(song => {
//             const encodedSong = encodeURIComponent(song.song);
//             const encodedArtist = encodeURIComponent(song.artist);
//             // const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${encodedArtist}+artist:${encodedSong}&type=track&limit=1`;
//             const spotifyApiUrl = `https://api.spotify.com/v1/search?q=track:%22${encodedSong}%22%20artist:%22${encodedArtist}%22&type=track&limit=1`;


//             console.log('Spotify API URL:', spotifyApiUrl);
//             return fetch(spotifyApiUrl, { headers });
//           });
          
          
//       Promise.all(spotifyApiRequests)
//         .then(responses => Promise.all(responses.map(response => response.json())))
//         .then(dataArray => {
//           let html = '';
//           dataArray.forEach(data => {
//             if (data.tracks.items.length > 0) {
//               const track = data.tracks.items[0];
//               const album = track.album.name;
//               if (!displayedAlbums.includes(album)) {
//                 displayedAlbums.push(album);
//                 const imageUrl = track.album.images[0].url;
//                 const previewUrl = track.preview_url;
//                 const tileData = { album, track, imageUrl, previewUrl };
//                 trackData.push(tileData);

//                 // Create HTML to display metadata and preview audio
//                 html += `
//                   <div class="tile" draggable="true" data-index="${dataArray.indexOf(data)}">
//                     <img src="${imageUrl}" alt="${album} cover">
//                     <p class="caption">${track.name}</p>
//                     <audio controls style="display:none;">
//                       <source src="${previewUrl}" type="audio/mpeg">
//                     </audio>
//                   </div>
//                 `;
//                 console.log(`Got soundtrack: ${track.name}`);
//               }
//             }
//           });

//           container.innerHTML = html;

//         })

//     }

//   });

//   const tiles = container.querySelectorAll('.tile');

//     tiles.forEach((tile, index) => {
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


        
    
    
          



// // attempt #2

// import { getSoundtrack } from './openai-script.js';

// const form = document.getElementById('soundtrack-form');
// const container = document.getElementById('soundtrack-container');
// const accessToken = 'BQDap7JYo-naUxPk6RTb1seTwbnCRVjQGzcKV6MYbvR8wj7YNKk2T6QbJKtCp9cjF-XoN2PrnvBq13yTWmdkbg1ZQ4UgzY6iHBCo7AulSfmsFi3ap8JJ';
// const headers = {
//   'Authorization': `Bearer ${accessToken}`,
//   'Content-Type': 'application/x-www-form-urlencoded'
// };

// const description = document.getElementById('description').value;
// const prompt = `Create me a soundtrack ${description}`;
// const openAiApiUrl = `http://localhost:5001/?prompt=${prompt}`;

// fetch(openAiApiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log('OpenAI response:', data);
//     const choices = data.choices;
//     const spotifyApiRequests = [];

//     // Use the parser to process the choices.text
//     let rawSongList = choices[0].text;
//     let no_new_lines = rawSongList.split(/\n+\n/).join('- ');
//     let arr = no_new_lines.split(/- /);
//     let filteredArr = arr.filter(ele => ele !== "" ? ele : undefined);

//     let artists = [];
//     let songs = [];

//     filteredArr.forEach((ele, i) => {
//         if (i % 2 === 0) {
//             artists.push(ele);
//         } else {
//             songs.push(ele);
//         }
//     });

//     let playList = [];

//     for (let i = 0; i < artists.length; i++) {
//         playList.push({ artist: artists[i], song: songs[i] });
//     }

//     // Create a Spotify API request for each song
//     for (let i = 0; i < playList.length; i++) {
//         const song = `${playList[i].artist} ${playList[i].song}`;
//         const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(song)}&type=track&limit=1`;
//         spotifyApiRequests.push(fetch(spotifyApiUrl, { headers }));
//     }

//     // Fetch metadata for each song from the Spotify API
//     Promise.all(spotifyApiRequests)
//       .then(responses => Promise.all(responses.map(response => response.json())))
//       .then(trackDataArray => {
//         const tiles = [];

//         // Create a tile for each track with its metadata and audio preview
//         for (let i = 0; i < trackDataArray.length; i++) {
//           const trackData = trackDataArray[i];
//           if (trackData.tracks.items.length > 0) {
//             const track = trackData.tracks.items[0];
//             const album = track.album.name;
//             const imageUrl = track.album.images[0].url;
//             const previewUrl = track.preview_url;

//             const tile = `
//               <div class="tile" draggable="true">
//                 <img src="${imageUrl}" alt="${album} cover">
//                 <p class="caption">${track.name}</p>
//                 <audio controls style="display:none;">
//                   <source src="${previewUrl}" type="audio/mpeg">
//                 </audio>
//               </div>
//             `;
//             console.log(`Got soundtrack: ${track.name}`);
//             tiles.push(tile);
//           }
//         }

//         if (tiles.length > 0) {
//           container.innerHTML = tiles.join('');
//           const audioElements = container.querySelectorAll('audio');
//           audioElements.forEach(audio => {
//             audio.addEventListener('play', () => {
//               audioElements.forEach(otherAudio => {
//                 if (otherAudio !== audio) {
//                   otherAudio.pause();
//                 }
//               });
//             });
//           });
//         } else {
//           container.innerHTML = '<p>No soundtrack found</p>';
//         }
//       });
// });




// attempt #3

const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const accessToken = 'BQBE6gt86jBhIbqZHwbJ3M9EUHRJZrKfer_r3F7oPZ4vulCUnUyrk0m1Sl2CtcoDKuJJQy8Aii4gcy79BkBQf-DJKSSDhizQBYJ1zHblTmFUGGBEmUiI';
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
  container.style.display = 'flex';

  const description = document.getElementById('description').value;
  const prompt = `Create me a 20 song soundtrack inspired by ${description}`;
  const encodedPrompt = encodeURIComponent(prompt); // encode the prompt variable
  const apiUrl = `http://localhost:5001/?prompt=${encodedPrompt}`;
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
            const match1 = line.match(/^\d+\.\s*"(.+)"\s+-\s+(.+)$/); // matches "song" - "artist"
            const match2 = line.match(/^\d+\.\s*(?:"(.+)"|(?:"[^"]*"))\s+-\s+(.+)$/); // matches "song" by "artist"
            const match3 = line.match(/^\d+\.\s*(.+)\sby\s(.+)$/); // matches "song" by "artist"
            const match4 = line.match(/^\d+\.\s*(.+)\s-\s(.+)$/); // matches "song" - "artist"

            if (match1) {
              return {
                song: match1[1],
                artist: match1[2],
              };
            } else if (match2) {
              return {
                song: match2[1],
                artist: match2[2],
              };
            } else if (match3) {
              return {
                song: match3[1],
                artist: match3[2],
              };
            } else if (match4) {
              return {
                song: match4[1],
                artist: match4[2],
              };
            }
          }).filter(Boolean);
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

