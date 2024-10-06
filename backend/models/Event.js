//Event
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    date: {
      type: Date,
      required: true
    },
    totalVolunteers: {
      type: Number, // Total volunteers who participated in the event
      default: 0
    },
    totalFoodCollected: {
      type: Number, // Total amount of food collected during the event
      default: 0
    }
  });
  
  module.exports = mongoose.model('Event', EventSchema);
  