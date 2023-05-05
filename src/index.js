console.log("Webpack is working!")


// Open AI 

// const apiKey = '<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>';
// const prompt = 'Hello, how are you?';
// const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// fetch(apiUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify({
//     prompt: prompt,
//     max_tokens: 50,
//     temperature: 0.7,
//     n: 1,
//     stop: '.'
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data.choices[0].text))
//   .catch(error => console.error(error));


// server side implementation

// const prompt = 'Hello, how are you?';
// const apiUrl = 'http://localhost:3000/openai-proxy';


// fetch(apiUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     prompt: prompt,
//     max_tokens: 50,
//     temperature: 0.7,
//     n: 1,
//     stop: '.'
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data.choices[0].text))
//   .catch(error => console.error(error));


// Spotify 

// const clientId = '<3feebf38ebb24152b79e89005c94aab4>';
// const clientSecret = '<db26bfba9606429199d2f1096d7dae80>';

// // Step 1: Fetch access token from Spotify API
// fetch('https://accounts.spotify.com/api/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
//   },
//   body: 'grant_type=client_credentials'
// })
//   .then(response => response.json())
//   .then(data => {
//     // Step 2: Extract access token from response and use it to make authenticated requests
//     const accessToken = data.access_token;
//     // Use the access token to make requests to the Spotify API
//   })
//   .catch(error => console.error(error));


// Sample Spotify API Request for a track with the key word dance monkey`

// const searchQuery = 'dance monkey';
// const apiUrl = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;
// const accessToken = <your access token>;

// fetch(apiUrl, {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
