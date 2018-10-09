var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Place = new Schema({
  longitude: {
    type: Number
  },
  latitude: {
    type: Number
  },
  info: {
    type: String
  },
  street: {
    type: String
  },
  name: {
    type: String
  }
},{
    collection: 'places'
});

module.exports = mongoose.model('Place', Place);