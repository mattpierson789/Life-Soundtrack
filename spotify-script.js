

// Save the soundtrack response from Open AI to a variable.

// import { getSoundtrack } from './openai-script.js';
// import { form } from './openai-script.js';
// import { container } from './openai-script.js';

form.addEventListener('submit', event => {
 event.preventDefault(); 

  const description = document.getElementById('description').value;

  const soundtrack = getSoundtrack(description);

  container.innerHTML = `<p>${soundtrack}</p>`;
});


// Use the soundtrack response from Open AI in order to query the Spotify API

// const accessToken = '3feebf38ebb24152b79e89005c94aab4';
// const query = 'track:"" artist:"NAME OF ARTIST"';

// fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`, {
//   headers: {
//     'Authorization': `Bearer ${accessToken}`
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     const track = data.tracks.items[0]; // Get the first track from the search results
//     console.log(`Found track: ${track.name} by ${track.artists[0].name}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });











// script.js
// const form = document.getElementById('soundtrack-form');
// const container = document.getElementById('soundtrack-container');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const description = form.genre.value;

//   const response = await fetch('https://api.openai.com/v1/your-api-endpoint', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer your-api-key'
//     },
//     body: JSON.stringify({
//       'description': description
//     })
//   });

//   const data = await response.json();

//   const recommendations = data.recommendations;

//   const tracks = recommendations.map((track) => {
//     return track.name + ' by ' + track.artist;
//   });

//   renderTracks(tracks);
// });

// function renderTracks(tracks) {
//   const trackList = document.createElement('ul');

//   tracks.forEach((track) => {
//     const li = document.createElement('li');
//     li.innerText = track;
//     trackList.appendChild(li);
//   });

//   container.innerHTML = '';
//   container.appendChild(trackList);
// }
