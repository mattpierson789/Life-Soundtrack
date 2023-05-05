
const form = document.getElementById('soundtrack-form');
// export { form };
const container = document.getElementById('soundtrack-container');
// export { container };

export function getSoundtrack(description) {

  let soundtrackResponse = []

  const prompt = `Create me a soundtrack ${description}`;
  // Changed to render site url ?/promp-$(prompt) for when we are in prod
  const apiUrl = `http://localhost:5001/?prompt=${prompt}`

  return fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    if (data.choices && data.choices.length > 0) {
      const soundtrack = data.choices[0].text;
      soundtrackResponse.push(soundtrack)
      return soundtrack;
      
    } else {
      return "No soundtrack found";
    }
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const description = document.getElementById('description').value;
 
  getSoundtrack(description)
    .then(soundtrack => {
      container.innerHTML = `<p>${soundtrack}</p>`;
    })
    .catch(error => {
      console.error(error);
      container.innerHTML = `<p>Oops, something went wrong!</p>`;
    });
});


