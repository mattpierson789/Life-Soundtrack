
class Spotifyapi {
    constructor() {
      this.accessToken = '';
      this.headers = {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      this.trackId = null;
    }
  
    async authenticate() {
      const clientId = '3feebf38ebb24152b79e89005c94aab4';
      const clientSecret = 'db26bfba9606429199d2f1096d7dae80';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      };
      const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
      const data = await response.json();
      console.log(data);
      this.accessToken = data.access_token;
      console.log(`Access token: ${this.accessToken}`);
      this.setHeaders();
    }
  
    setHeaders() {
      this.headers = {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    }
  }
  
  const spotifyAccessToken = new Spotifyapi();
  console.log(`Access token: ${spotifyAccessToken.accessToken}`);
  spotifyAccessToken.authenticate();
  console.log(`Access token: ${spotifyAccessToken.accessToken}`); // updated access token
  
