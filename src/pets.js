const mongoose = require('mongoose');

mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/pets', { useMongoClient: true });

const PetSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true
   },
   species: {
     type: String,
     required: true
   },
   owner: {
     type: String,
     required: true
   },
   address: {
     type: String,
     requried: true
   },
   phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  visit:  {
    type: Date,
    default: Date.now,
    required: true
  },
});

module.exports = mongoose.model('Pet', PetSchema);