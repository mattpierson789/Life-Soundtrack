

// // Save the soundtrack response from Open AI to a variable.

// import { getSoundtrack } from './openai-script.js';
// import { form } from './openai-script.js';
// import { container } from './openai-script.js';

// form.addEventListener('submit', event => {
//  event.preventDefault(); 

//   const description = document.getElementById('description').value;

//   const soundtrack = getSoundtrack(description);

//   container.innerHTML = `<p>${soundtrack}</p>`;
// });


// // Use the soundtrack response from Open AI in order to query the Spotify API

// const accessToken = "BQDJloYKAU_DjSFZnrX6cJk-2DiCvVd_lAOxdZ3nBgFmn4WO0iSzhLB7grGhCzZ-HJ6buVEkL6CL1TpRODj3jj77v-9fBrN970zQSF8IZUNDFHSOURYX";

// export function getSongMetadata(songTitles) {
//   const spotifyApiBaseUrl = "https://api.spotify.com/v1/search";
//   const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your Spotify access token

//   const searchRequests = songTitles.map(songTitle => {
//     const searchUrl = `${spotifyApiBaseUrl}?q=${encodeURIComponent(
//       songTitle
//     )}&type=track&limit=1`;
//     return fetch(searchUrl, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         if (data.tracks && data.tracks.items.length > 0) {
//           const track = data.tracks.items[0];
//           const metadata = {
//             title: track.name,
//             artist: track.artists.map(artist => artist.name).join(", "),
//             album: track.album.name,
//             releaseDate: track.album.release_date,
//             image: track.album.images[0].url
//           };
//           return metadata;
//         } else {
//           return null;
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         return null;
//       });
//   });

//   return Promise.all(searchRequests).then(songMetadata => {
//     return songMetadata.filter(metadata => metadata !== null);
//   });
// }

// // Call the function 

// const songTitles = [
//   "All I Do - J. Cole",
//   "Money - Cardi B",
//   "Bills - Lunchmoney Lewis",
//   "Rich - Migos",
//   "I Get the Bag - Gucci Mane"
// ];

// getSongMetadata(songTitles)
//   .then(songMetadata => {
//     console.log(songMetadata); // array of song metadata objects
//     // process the song metadata
//   })
//   .catch(error => {
//     console.error(error);
//   });












