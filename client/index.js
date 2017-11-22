const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");
//const api = require("../routes/api")

mapboxgl.accessToken = 'pk.eyJ1IjoiZXdlaWw1MDUiLCJhIjoiY2phOXV6ejA4MGw0djJ3cTlueXk2ZmN2YSJ9.BtM-8_ccNMBf7ZMgiVhqIw';

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);


  // const hotels, restaurants, activites;
  // hotels = document.getElementById('hotels-choices');
  // restaurants = document.getElementById('restaurants-choices');
  // activities = document.getElementById('activities-choices');

  fetch('/api')
  .then(result=>{
      console.log('HIIIIII')
      console.log(result)
      return result.json()
  }).then(data => {
    console.log(data)
  })
  .catch(console.error)



