// spotify-access-token.js
import { getSoundtrack } from './openai-script.js';

const form = document.getElementById('soundtrack-form');
const container = document.getElementById('soundtrack-container');
const loadMessage = document.getElementById('loader');

let accessToken = '';
let headers = {};

async function getSpotifyAccessToken() {
  try {
    const response = await fetch('https://life-soundtrack.onrender.com/spotify-token');
    const data = await response.json();
    accessToken = data.token;
    headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  } catch (err) {
    console.error('Failed to fetch Spotify token:', err);
  }
}

let selectedTracks = [];
let trackDataArray = [];
const displayedAlbums = [];
const trackData = [];

form.addEventListener('submit', async event => {
  event.preventDefault();
  loadMessage.style.display = 'block';
  container.style.display = 'flex';

  getSpotifyAccessToken().then(() => {
    const description = document.getElementById('description').value;
    const prompt = `Create me a 20 song soundtrack inspired by ${description} always return as a list of song by artist like this 1. "Don't Stop Believin'" by Journey`;
    const encodedPrompt = encodeURIComponent(prompt);
    const proxyUrl = `https://life-soundtrack.onrender.com/?prompt=${encodedPrompt}`;

    fetch(proxyUrl)
      .then(response => response.json())
      .then(data => {
        console.log('OpenAI response:', data);

        const choices = data?.choices;
        if (!choices || !Array.isArray(choices) || choices.length === 0) {
          console.error("OpenAI response missing or malformed:", data);
          return;
        }

        const message = choices[0]?.message;
        if (!message || typeof message.content !== 'string') {
          console.error("OpenAI message content missing or invalid:", message);
          return;
        }

        const rawSongList = message.content.trim();
        console.log('Raw song list:', rawSongList);

        const parsedSongList = parseSongList(rawSongList);
        console.log('Parsed Song List:', parsedSongList);

        if (!Array.isArray(parsedSongList) || parsedSongList.length === 0) {
          console.error("Parsed song list is empty or invalid:", parsedSongList);
          return;
        }

        const spotifyApiRequests = parsedSongList.map(song => {
          const encodedSong = encodeURIComponent(song.song);
          const encodedArtist = encodeURIComponent(song.artist);
          const spotifyApiUrl = `https://api.spotify.com/v1/search?q=track:%22${encodedSong}%22%20artist:%22${encodedArtist}%22&type=track&limit=1`;
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
                  const tileData = { album, track, imageUrl };
                  trackData.push(tileData);

                  html += `
                  <div class="tile" draggable="true" data-index="${dataArray.indexOf(data)}">
                  <iframe
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator"
                  width="100%"
                  height="380"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy">
                </iframe>
                  </div>
                `;
                
                
                }
              }
            });

            container.innerHTML = html;
            setupTileEvents();
          })
          .catch(error => {
            console.error('Error fetching Spotify data:', error);
          });
      })
      .catch(err => console.error("Fetch error:", err));
  });
});

function parseSongList(rawSongList) {
  if (!rawSongList || typeof rawSongList !== 'string') return [];
  const lines = rawSongList.split('\n');
  return lines.map(line => {
    const match = line.match(/^\d+[.)]?\s*(?:\"(.+?)\"|(.+?))\s*(?:by|-)?\s*(.+)$/i);
    if (match) {
      return {
        song: (match[1] || match[2]).trim(),
        artist: match[3].trim()
      };
    }
    return null;
  }).filter(Boolean);
}

function setupTileEvents() {
  const tiles = container.querySelectorAll('.tile');
  tiles.forEach((tile, index) => {
    let selected = false;
    let isLongClick = false;
    const track = trackData[index].track;

    const LONG_CLICK_DELAY = 250;
    let longClickTimeout;

    function handleLongClick() {
      isLongClick = true;
      selected = !selected;
      tile.classList.toggle('selected', selected);

      if (selected) {
        selectedTracks.push(track);
      } else {
        const idx = selectedTracks.indexOf(track);
        if (idx > -1) selectedTracks.splice(idx, 1);
      }
    }

    tile.addEventListener('mousedown', () => {
      longClickTimeout = setTimeout(handleLongClick, LONG_CLICK_DELAY);
    });

    tile.addEventListener('mouseup', () => {
      clearTimeout(longClickTimeout);
      isLongClick = false;
    });
  });
}

export { headers, getSoundtrack, trackDataArray, selectedTracks, trackData };
