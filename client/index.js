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

fetch('/api')
  .then(result => {
    //console.log(result)
    return result.json()
  }).then(data => {
    //console.log(data)
    let hotels;
    let restaurants;
    let activities;
    hotels = document.getElementById('hotels-choices');
    restaurants = document.getElementById('restaurants-choices');
    activities = document.getElementById('activities-choices');

    data.hotels.forEach(hotel => {
      let op = document.createElement('option');
      op.innerHTML = `${hotel.name}`
      hotels.append(op);
    })
    data.restaurants.forEach(rest => {
      let op = document.createElement('option');
      op.innerHTML = `${rest.name}`
      restaurants.append(op);
    })
    data.activities.forEach(activity => {
      let op = document.createElement('option');
      op.innerHTML = `${activity.name}`
      activities.append(op);
    })
  })
  .catch(console.error)

const selectHotel = document.getElementById(`hotels-choices`);
const myHotel = document.getElementById('hotels-list')
const addHotel = document.getElementById('hotels-add')
  .addEventListener('click', () => {
    let value = (selectHotel.value)
    const li = document.createElement('li');
    li.innerHTML = value;
    myHotel.append(li);
    const hotelMarker = buildMarker()
  })

const selectRestaurant = document.getElementById(`restaurants-choices`);
const myRestaurant = document.getElementById('restaurants-list')
const addRest = document.getElementById('restaurants-add')
  .addEventListener('click', () => {
    let value = (selectRestaurant.value)
    const li = document.createElement('li');
    li.innerHTML = value;
    myRestaurant.append(li);
  })

const selectActivities = document.getElementById(`activities-choices`);
const myActivities = document.getElementById('activities-list')
const addAct = document.getElementById('activities-add')
  .addEventListener('click', () => {
    let value = (selectActivities.value)
    const li = document.createElement('li');
    li.innerHTML = value;
    myActivities.append(li);
  })