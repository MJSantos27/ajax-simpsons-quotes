function fetchPokemonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const simpsonId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes${simpsonId}`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (simpson) {
      console.log("data decoded from JSON:", simpson);

      // Build a block of HTML
      const simpsonHtml = `
        <p><strong>${simpson.name}</strong></p>
        <img src="${simpson.sprites.front_shiny}" />
      `;
      document.querySelector("#simpson").innerHTML = simpsonHtml;
    });
}

fetchsimpsonJSON();
