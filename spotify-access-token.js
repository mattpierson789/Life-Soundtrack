const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const accessToken = 'BQDk_MEyXlyVaMDneWPWahlrzh8yvzLYGwQfEKIbVgPs6dfeDnKiGppsuXdikrsfUVQQrE0dXict3hkme0w0kHBWTiR3pWcWMAuHd2Eo9OzeIOoZZrOP';
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/x-www-form-urlencoded'
};

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted!');
  console.log(container);
  const description = document.getElementById('description').value;
  console.log(description);

  // Get soundtrack from API
  const prompt = `Create me a soundtrack ${description}`;
  const apiUrl = `http://localhost:5001/?prompt=${prompt}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.choices && data.choices.length > 0) {
        const soundtrack = data.choices[0].text;

        // Get metadata from Spotify
        const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${soundtrack}&type=track&limit=1`;
        return fetch(spotifyApiUrl, { headers })
          .then(response => response.json())
          .then(data => {
            if (data.tracks.items.length > 0) {
              let html = '';

              // Loop through all available tracks and display their album art
              data.tracks.items.forEach((track) => {
                const album = track.album.name;
                const imageUrl = track.album.images[0].url;

                // Create HTML to display metadata
                html += `
                  <p>${track.name} by ${track.artists[0].name} from ${album}</p>
                  <img src="${imageUrl}" alt="${album} cover">
                `;

                console.log(`Got soundtrack: ${track.name}`);
              });

              container.innerHTML = html;
            } else {
              container.innerHTML = `<p>No soundtrack found</p>`;
            }
          })
          .catch(error => {
            console.error(error);
            container.innerHTML = `<p>Error getting soundtrack metadata</p>`;
          });
      } else {
        container.innerHTML = `<p>No soundtrack found</p>`;
      }
    })
    .catch(error => {
      console.error(error);
      container.innerHTML = `<p>Error getting soundtrack</p>`;
    });
});
