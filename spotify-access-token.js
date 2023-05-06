const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const accessToken = 'BQBu010Mw_qJ3f_VSvVWdgLYK2fF9bnSst2nFR5p8RNYJU5tIgTJCCO064DxvzpB_MRmBGOCAuNMQaI6pGx_6S4Mk6RUGGBv15-ld-YB4SkQuEyTlnGm';
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/x-www-form-urlencoded'
};

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted!');
  console.log(container);
  container.style.display = 'flex';
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
        const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${soundtrack}&type=track&limit=10`;
        return fetch(spotifyApiUrl, { headers })
          .then(response => response.json())
          .then(data => {
            if (data.tracks.items.length > 0) {
              let html = '';
              const displayedAlbums = [];

              // Loop through all available tracks and display their album art
              data.tracks.items.forEach((track) => {
                const album = track.album.name;
                if (displayedAlbums.includes(album)) {
                  return; // skip this album if it has already been displayed
                }
                displayedAlbums.push(album);
                const imageUrl = track.album.images[0].url;

                // Create HTML to display metadata
                html += `
                  <div class="tile">
                    <img src="${imageUrl}" alt="${album} cover">
                    <p class="caption">${track.name}</p>
                  </div>
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
