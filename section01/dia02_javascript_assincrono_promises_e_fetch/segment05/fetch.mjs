fetch('https://dummyjson.com/quotes/random').then((response) =>
  response.json()
).then(response => console.log(response));
