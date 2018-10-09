// coinRoutes.js

var express = require('express');
var coinRoutes = express.Router();

// Require Item model in our routes module
var Place = require('../models/Coin');

// Defined store route
coinRoutes.route('/add').post(function (req, res) {
  var place = new Place(req.body);
   place.save()
    .then(item => {
    res.status(200).json({'place': 'Place added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
coinRoutes.route('/').get(function (req, res) {
   Place.find(function (err, places){
    if(err){
      console.log(err);
    }
    else {
      res.json(places);
    }
  });
});

// Defined edit route
coinRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Place.findById(id, function (err, place){
      res.json(place);
  });
});

//  Defined update route
coinRoutes.route('/update/:id').post(function (req, res) {
   Place.findById(req.params.id, function(err, place) {
    if (!place)
      return next(new Error('Could not load Document'));
    else {
      place.longitude = req.body.longitude;
      place.latitude = req.body.latitude;
      place.info = req.body.info;
      place.street = req.body.street;
      place.name = req.body.name;

      place.save().then(place => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
coinRoutes.route('/delete/:id').get(function (req, res) {
   Place.findByIdAndRemove({_id: req.params.id}, function(err, place){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = coinRoutes;
