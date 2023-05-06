const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const accessToken = 'BQAIS1gTljMWghZxvDnRi4LJwVRruynC1Fl2mZTSU1HL9FQO478wsk3j_6inW8PrYb4ylRiJuhGlSnM1P8Sbi3cs-8sQsXe8OIGQNp5NMOj3JZykv6Ju';
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
        const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${soundtrack}&type=track&limit=1`;
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
                
                  <img src="${imageUrl}" alt="${album} cover">
                  <p>${track.name}</p>
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
