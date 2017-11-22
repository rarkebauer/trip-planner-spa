var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

const promiseArray = [Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })];
let allAttractions = {};
//needs to get all hotels, restaurants and activities from db and return them as json
router.get('/', (req, res, next)=>{
    Promise.all(promiseArray)
    .then(values=>{
        allAttractions.hotels = values[0]
        allAttractions.restaurants = values[1]
        allAttractions.activites = values[2]
    // })
    // .then(()=>{
        res.json(allAttractions);
    })
    .catch(next)
})


module.exports = router;
