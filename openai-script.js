
const form = document.getElementById('soundtrack-form');
export { form };
const container = document.getElementById('soundtrack-container');
export { container };

export function getSoundtrack(description) {

  let soundtrackResponse = []

  const prompt = `Create me a soundtrack ${description}`;
  // Changed to render site url ?/promp-$(prompt) for when we are in prod
  const apiUrl = `http://localhost:5001/?prompt=${prompt}`

  return fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    if (data.choices && data.choices.length > 0) {
      const soundtrack = data.choices[0].text;
      soundtrackResponse.push(soundtrack)
      
      return soundtrack;
      
    } else {
      return "No soundtrack found";
    }
  });
}


// Creating queries directly from the OpenAI API response

// export function getSoundtrack(description) {
//   const prompt = `Create me a soundtrack ${description}`;
//   const apiUrl = `http://localhost:5001/?prompt=${prompt}`;

//   return fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       if (data.choices && data.choices.length > 0) {
//         const soundtrackResponse = data.choices[0].text.split('\n').slice(1, -1);
//         // Remove any empty strings from the array
//         const songs = soundtrackResponse.filter(Boolean);
//         // Map each song title and artist name to a search query for the Spotify API
//         const searchQueries = songs.map(song => {
//           const [songTitle, artistName] = song.split(' by ');
//           const query = encodeURIComponent(`${songTitle} ${artistName}`);
//           return `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`;
//         });
//         return searchQueries;
//       } else {
//         return "No soundtrack found";
//       }
//     });
// }

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const description = document.getElementById('description').value;
 
//   getSoundtrack(description)
//     .then(soundtrack => {
//       container.innerHTML = `<p>${soundtrack}</p>`;
      
//     })
//     .catch(error => {
//       console.error(error);
//       container.innerHTML = `<p>Oops, something went wrong!</p>`;
//     });
// });


