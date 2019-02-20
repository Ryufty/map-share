const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create restaurant Schema & model
const RestaurantSchema = new Schema({
  locationId: {
    type: Schema.Types.ObjectId,
    ref: 'mark',
    required: [true, 'locationId is required to save restaurant']
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'group',
    required: [true, 'groupId required to save restaurant']
  },
  restaurantName: {
    type: String,
    required: [true, 'restaurantName field is required']
  },
  restaurantLocation: {
    type: String,
    required: [true, 'restaurantLocation (string) is required']
  },
  restaurantCuisine: {
    type: String,
  },
  restaurantPriceRange: {
    type: Number,
  },
  restaurantReviews: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }]
  // total_reviews: {
  //   type: Number,
  //   default: 0,
  // },
  // average_rating: {
  //   type: Number,
  //   default: 0,
  // }
})//, { _id: false})

const Restaurant = mongoose.model('restaurant', RestaurantSchema);

module.exports = Restaurant;