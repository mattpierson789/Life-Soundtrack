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

User Instrutions and Input 

Once entering the site, users will be faced with an input bar that allow them to input the inspiration for their soundtrack. 

https://www.loom.com/share/bfd7f9d8f6204524b110274c6f5cccfd


The soundtrack will display on the page and users will be able to preview soundtracks with a short-click or select them with a long click.  Selected soundtracks are highlighted in blue.

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/bfd7f9d8f6204524b110274c6f5cccfd" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


With selected soundtracks (max 5), users can generate a new soundtrack using the selected soundtracks as inspiration.  This functionality is simliar to Spotify Radio, which allows playlist generation based on given soundtacks.  

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5e72cabb46fa420bbb6cf8892b4948bc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


Wireframes

Homepage
 <img width="1024" alt="Screen Shot 2023-05-08 at 11 36 21 AM" src="https://user-images.githubusercontent.com/69662906/236866918-c7921197-9e8a-432e-a187-729c839805a0.png">
 

Soundtrack View 
<img width="1025" alt="Screen Shot 2023-05-08 at 11 37 10 AM" src="https://user-images.githubusercontent.com/69662906/236867102-6c329e80-27b9-4733-bd1e-cb894794d9f7.png">

Song View 
<img width="1032" alt="Screen Shot 2023-05-08 at 11 37 50 AM" src="https://user-images.githubusercontent.com/69662906/236867262-7e1953b0-ee76-4dc5-a6d9-bcb7e9eb3330.png">


Technologies, Libraries, APIs

- Javascript 
- HTML5
- CSS 
- Open AI API
- Spotify API 
- Band in Town API 
- Express 

Implementation Timeline

Thursday: Impelement the initial Open AI and Spotify API calls to get the list of the soundtrack and the song metadata.

Friday: Set-up proxy server.  Implement Homepage stlying V1 and Soundtrack View V1 in order to visualize the albums that are being returned from the Spotify API call

Weekend: Finish up the first implementation of the Homepage and the Soundtrack view.  Work on the ability to add additional user input to the additional return by selecting tiles.  Add styling to homepage and ability to sample songs.

Monday: Implement a call to the Spotify recoemmdations API in order to take in the user input to iterate based on user input.  Drag and Drop tiles around the soundstrack view 

Tuesday: Bug fixes and retuning initial implementation

Wednesday: Styling and final details

Thursday Morning: Presentation and final bug fixes 





