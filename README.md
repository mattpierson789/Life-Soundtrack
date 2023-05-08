# Life-Soundtrack 

Background

Life Soundtrack allows users to add music to reflect their life journey.  Users start by inputting a prompt related to a specific situation or event occurring in their lives, and the app will generate a customized soundtrack to match the mood and emotion of that moment.  Whether you need to pump yourself up for an important meeting, wind down after a long day, or simply explore what you are ccurrently facing through music, Life Soundtrack helps you add music to your journey.

Functionality & MVPs

In Life Soundtrack, users will be able to:

- Input a prompt in order to return a soundtrack
- Visulaize the soundtrack with the album art and sample the music
- Iterate on their soundtrack, selecting albums they like in the response and applying further feedback to the generation process.
- Move the tiles around the screen and order them in a pleasing manner
- Look up whether the artist is playing near them and see the full discography.

Wireframes

Homepage
 <img width="1024" alt="Screen Shot 2023-05-08 at 11 36 21 AM" src="https://user-images.githubusercontent.com/69662906/236866918-c7921197-9e8a-432e-a187-729c839805a0.png">
 

Soundtrack View 
<img width="1025" alt="Screen Shot 2023-05-08 at 11 37 10 AM" src="https://user-images.githubusercontent.com/69662906/236867102-6c329e80-27b9-4733-bd1e-cb894794d9f7.png">

Song View 
<img width="1032" alt="Screen Shot 2023-05-08 at 11 37 50 AM" src="https://user-images.githubusercontent.com/69662906/236867262-7e1953b0-ee76-4dc5-a6d9-bcb7e9eb3330.png">


Technologies, Libraries, APIs
What technologies, libraries, and APIs will your project use? If you're building a game, you might use native browser technology like the Canvas API, or you might use a library like three.js. If you're doing data visualization, you might use d3 for rendering charts, and an API to fetch data.

If you're still deciding between a few different libraries or APIs, you can list the ones you're considering, and the potential benefits and drawbacks of each.

If your project needs a backend (see below), list that here as well.

Implementation Timeline

Thursday: Impelement the initial Open AI and Spotify API calls to get the list of the soundtrack and the song metadata.
Friday: Set-up proxy server.  Implement Homepage stlying V1 and Soundtrack View V1 in order to visualize the albums that are being returned from the Spotify API call 
Weekend: Finish up the first implementation of the Homepage and the Soundtrack view.  Work on the ability to add additional user input to the additional return by selecting tiles.  Add styling to homepage and ability to sample songs.
Monday: Implement a call to the Spotify recoemmdations API in order to take in the user input to iterate based on user input.  Drag and Drop tiles around the soundstrack view 
Tuesday: Bug fixes and retuning initial implementation
Wednesday: Styling and final deetails
Thursday Morning: Presentation and final bug fixes 





