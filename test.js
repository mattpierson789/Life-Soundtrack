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
1. "One More Time"
2. "Aerodynamic"
3. "Digital Love"
4. "Harder, Better, Faster, Stronger"
5. "Crescendolls"
6. "Nightvision"
7. "Superheroes"
8. "High Life"
9. "Something About Us"
10. "Voyager"
11. "Veridis Quo"
12. "Short Circuit"
13. "Face to Face"
14. "Too Long"
`;

function parseSongList(rawSongList) {
    const lines = rawSongList.trim().split('\n');
    const songList = lines.map(line => {
      const match = line.match(/^(\d+)\.\s*"(.+)"\s*(?:by)?\s*(.+)/);
      if (match) {
        return {
          song: match[2],
          artist: match[3],
        };
      }
      const match2 = line.match(/^\d+\)\s*"(.+)"\s*-\s*(.+)/);
      if (match2) {
        return {
          song: match2[1],
          artist: match2[2],
        };
      }
    }).filter(Boolean); // filter out the undefined values
    return songList;
  }
  

const parsedSongList = parseSongList(rawSongList);
const parsedSongList2 = parseSongList(rawSongList2);
const parsedSongList3 = parseSongList(rawSongList3);
const parsedSongList4 = parseSongList(rawSongList4);
const parsedSongList5 = parseSongList(rawSongList5);

console.log(parsedSongList);
console.log(parsedSongList2);
console.log(parsedSongList3);
console.log(parsedSongList4);
console.log(parsedSongList5);
