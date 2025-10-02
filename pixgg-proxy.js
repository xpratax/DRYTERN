const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://api.pixgg.com/goals/?apikey=15a0da75-dbf3-4e57-8a2d-d3d6f549ed7a&goal=18382';

fetch(proxyUrl + targetUrl)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
