const rawSongList = `
1. "Don't Stop Believin'" by Journey
2. "Any Way You Want It" by Journey
3. "Lovin', Touchin', Squeezin'" by Journey
4. "Wheel in the Sky" by Journey
5. "Faithfully" by Journey
6. "I'll Be Alright Without You" by Journey
7. "Oh Sherrie" by Steve Perry
8. "Lights" by Journey
9. "Stay Awhile" by Journey
10. "Send Her My Love" by Journey
11. "Who's Crying Now" by Journey
12. "Open Arms" by Journey
`;

const rawSongList2 = `
1. "Get Back" - The Beatles
2. "Gimme Shelter" - The Rolling Stones
3. "I Want You (She's So Heavy)" - The Beatles
4. "Paint It, Black" - The Rolling Stones
5. "Helter Skelter" - The Beatles
6. "Sympathy for the Devil" - The Rolling Stones
7. "While My Guitar Gently Weeps" - The Beatles
8. "Angie" - The Rolling Stones
9. "Yesterday" - The Beatles
10. "Jumpin' Jack Flash" - The Rolling Stones
`;

const rawSongList3 = `
1. "Can't Stop the Feeling!" -Justin Timberlake
2. "Uptown Funk" -Mark Ronson feat. Bruno Mars
3. "All About That Bass" -Meghan Trainor
4. "Shake It Off" -Taylor Swift
5. "Happy" -Pharrell Williams
6. "Get Lucky" -Daft Punk feat. Pharrell Williams
7. "We Are Young"- Fun. feat. Janelle Monáe
8. "I Gotta Feeling" -The Black Eyed Peas
9. "Moves like Jagger" -Maroon 5 feat. Christina Aguilera
10. "Crazy in Love" -Beyoncé
`;

const rawSongList4 = `
1. "Can't Stop the Feeling!" -Justin Timberlake
2. "Uptown Funk" -Mark Ronson feat. Bruno Mars
3. "All About That Bass" -Meghan Trainor
4. "Shake It Off" -Taylor Swift
5. "Happy" -Pharrell Williams
6. "Get Lucky" -Daft Punk feat. Pharrell Williams
7. "We Are Young"- Fun. feat. Janelle Monáe
8. "I Gotta Feeling" -The Black Eyed Peas
9. "Moves like Jagger" -Maroon 5 feat. Christina Aguilera
10. "Crazy in Love" -Beyoncé
`;


const rawSongList5 = `
1) "I Wanna Be Your Man" - The Rolling Stones

2) "I Saw Her Standing There" - The Beatles

3) "Satisfaction" - The Rolling Stones

4) "Get Off of My Cloud" - The Rolling Stones

5) "Penny Lane" - The Beatles

6) "Jumpin' Jack Flash" - The Rolling Stones

7) "She Loves You" - The Beatles

8) "Angie" - The Rolling Stones

9) "Let It Be" - The Beatles

10) "Start Me Up" - The Rolling Stones
`;

const rawSongList6 = `
1. Time of My Life- David Cook
2. Unwritten- Natasha Bedingfield
3. The Middle- Zedd, Maren Morris, Grey
4. Dancing on My Own- Calum Scott
5. I Will Survive- Gloria Gaynor
6. Eye of the Tiger- Survivor
7. I Lived- OneRepublic
8. New York, New York- Frank Sinatra
9. The Adventures of Rain Dance Maggie- Red Hot Chili Peppers
10. Somewhere Only We Know- Keane
11. Home- Phillip Phillips
12. Welcome to New York- Taylor Swift
13. We Are Young- Fun., Janelle Monáe
14. Feel This Moment- Pitbull, Christina Aguilera
15. The Climb- Miley Cyrus
16. Roar- Katy Perry
17. Brave- Sara Bareilles
18. Unbreakable- Alicia Keys
19. Beautiful- Christina Aguilera
20. Stronger (What Doesn't Kill You)- Kelly Clarkson
`;

const rawSongList7 = `
1. Time of my Life- David Cook
2. Unwritten- Natasha Bedingfield
3. Home- Edward Sharpe and the Magnetic Zeros
4. The Middle- Jimmy Eat World
5. Keep On Movin'- Five
6. The Only Exception- Paramore
7. I Will Follow You Into the Dark- Death Cab by Cutie
8. Good Riddance (Time of Your Life)- Green Day
9. I Will Survive- Gloria Gaynor
10. One Step at a Time- Jordin Sparks
11. Brave- Sara Bareilles
12. Roar- Katy Perry
13. Firework- Katy Perry
14. The Climb- Miley Cyrus
15. Wavin' Flag- K'naan
16. We Are Young- fun.
17. Home- Phillip Phillips
18. Moving On and Getting Over- John Mayer
19. New York, New York- Frank Sinatra
20. A Better Place, A Better Time- Streetlight Manifesto

`;

function parseSongList(rawSongList) {
    const lines = rawSongList.trim().split('\n');
    const songList = lines
      .map((line) => {
        const match = line.match(
          /^(?:\d+[.)]\s*)?(?:"(.+?)"|(.+?))\s*(?:by|-|—)?\s*(.+)$/i
        ) || line.match(/^\d+\)\s(.*?)-\s(.*)/);
        if (match) {
          const song = match[1] || match[2];
          const artist = match[3] || match[4];
          return {
            song: song.trim(),
            artist: artist.trim(),
          };
        }
      })
      .filter(Boolean); // filter out the undefined values
    return songList;
  }

// const pattern = /\d+\)\s(.*?)-\s(.*)/g;
// let match;
// const result = [];

// while ((match = pattern.exec(text)) !== null) {
//   const song = match[1].trim();
//   const artist = match[2].trim();
//   result.push({ song, artist });
// }

// console.log(result);
  
  
  
const parsedSongList = parseSongList(rawSongList);
const parsedSongList2 = parseSongList(rawSongList2);
const parsedSongList3 = parseSongList(rawSongList3);
const parsedSongList4 = parseSongList(rawSongList4);
const parsedSongList5 = parseSongList(rawSongList5);
const parsedSongList6 = parseSongList(rawSongList6);
const parsedSongList7 = parseSongList(rawSongList7);

console.log(parsedSongList);
console.log(parsedSongList2);
console.log(parsedSongList3);
console.log(parsedSongList4);
console.log(parsedSongList5);
console.log(parsedSongList6);
console.log(parsedSongList7);
