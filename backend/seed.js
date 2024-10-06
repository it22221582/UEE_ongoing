const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Models
const Restaurant = require('./models/Restaurant');
const FoodDonation = require('./models/FoodDonation');
const Orphanage = require('./models/Orphanage');
const OrphanageRequest = require('./models/OrphanageRequest');
const VolunteerActivity = require('./models/VolunteerActivity');
const Volunteer = require('./models/Volunteer');

// Data files
const foodDonationsData = require('./data/foodDonationData');
const orphanageRequestData = require('./data/orphanageRequestData');
const volunteerActivityData = require('./data/volunteerActivityData');

async function seedDatabase() {
  try {
    console.log("Inside seed.js insert data");

    // Get the MongoDB URI from environment variables
    const mongoURI = process.env.MONGO_URI;

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // 1. Fetch all Restaurants and map names to ObjectIds
    const restaurants = await Restaurant.find({});
    const restaurantMap = {};
    restaurants.forEach((restaurant) => {
      restaurantMap[restaurant.name] = restaurant._id;
    });

    // Update Food Donations data with correct ObjectId references
    const updatedFoodDonations = foodDonationsData.map((donation) => {
      if (restaurantMap[donation.restaurantName]) {
        donation.restaurant = restaurantMap[donation.restaurantName];
        delete donation.restaurantName;
      }
      return donation;
    });

    // Insert updated Food Donations data
    await FoodDonation.insertMany(updatedFoodDonations);
    console.log('Food donations inserted successfully');

    // 2. Fetch all Orphanages and map names to ObjectIds
    const orphanages = await Orphanage.find({});
    const orphanageMap = {};
    orphanages.forEach((orphanage) => {
      orphanageMap[orphanage.name] = orphanage._id;
    });

    // Update Orphanage Requests data with correct ObjectId references
    const updatedOrphanageRequests = orphanageRequestData.map((request) => {
      if (orphanageMap[request.orphanageName]) {
        request.orphanage = orphanageMap[request.orphanageName];
        delete request.orphanageName;
      }
      return request;
    });

    // Insert updated Orphanage Requests data
    await OrphanageRequest.insertMany(updatedOrphanageRequests);
    console.log('Orphanage requests inserted successfully');

    // 3. Fetch all Volunteers and map names to ObjectIds
    const volunteers = await Volunteer.find({});
    const volunteerMap = {};
    volunteers.forEach((volunteer) => {
      volunteerMap[volunteer.name] = volunteer._id;
    });

    // Update Volunteer Activities data with correct ObjectId references
    const updatedVolunteerActivities = volunteerActivityData.map((activity) => {
      if (volunteerMap[activity.volunteerName]) {
        activity.volunteer = volunteerMap[activity.volunteerName];
        delete activity.volunteerName;
      }
      return activity;
    });

    // Insert updated Volunteer Activities data
    await VolunteerActivity.insertMany(updatedVolunteerActivities);
    console.log('Volunteer activities inserted successfully');

  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
















// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// // Models
// const Event = require('./models/Event');
// const FoodDonation = require('./models/FoodDonation');
// const Orphanage = require('./models/Orphanage');
// const OrphanageRequest = require('./models/OrphanageRequest');
// const Report = require('./models/Report');
// const Restaurant = require('./models/Restaurant'); 
// const User = require('./models/User');
// const Volunteer = require('./models/Volunteer');
// const VolunteerActivity = require('./models/VolunteerActivity');

// // Data files
// const eventData = require('./data/eventData');
// const foodDonationData = require('./data/foodDonationData');
// const orphanageData = require('./data/orphanageData');
// const orphanageRequestData = require('./data/orphanageRequestData');
// const restaurantData = require('./data/restaurantData'); 
// const userData = require('./data/userData');
// const volunteerActivityData = require('./data/volunteerActivityData');
// const volunteerData = require('./data/volunteerData');

// // Load environment variables
// dotenv.config();

// // MongoDB connection
// const insertData = async () => {
//     console.log(`Inside seed.js insert data`);
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');


//     // Insert data into collections with try-catch for each
//     // try {
//     //     await User.insertMany(userData);
//     //     console.log('Users inserted successfully');
//     //   } catch (err) {
//     //     console.error('Error inserting users:', err);
//     //   }
//     // try {
//     //   await Restaurant.insertMany(restaurantData);
//     //   console.log('Restaurants inserted successfully');
//     // } catch (err) {
//     //   console.error('Error inserting restaurants:', err);
//     // }
//     // try {
//     //     await Orphanage.insertMany(orphanageData);
//     //     console.log('Orphanages inserted successfully');
//     //   } catch (err) {
//     //     console.error('Error inserting orphanages:', err);
//     //   }
//     // try {
//     // await Volunteer.insertMany(volunteerData);
//     // console.log('Volunteers inserted successfully');
//     // } catch (err) {
//     // console.error('Error inserting volunteers:', err);
//     // }
//     // try {
//     //   await FoodDonation.insertMany(foodDonationData);
//     //   console.log('Food donations inserted successfully');
//     // } catch (err) {
//     //   console.error('Error inserting food donations:', err);
//     // }
//     try {
//       await OrphanageRequest.insertMany(orphanageRequestData);
//       console.log('Orphanage requests inserted successfully');
//     } catch (err) {
//       console.error('Error inserting orphanage requests:', err);
//     }
//     // try {
//     //   await VolunteerActivity.insertMany(volunteerActivityData);
//     //   console.log('Volunteer activities inserted successfully');
//     // } catch (err) {
//     //   console.error('Error inserting volunteer activities:', err);
//     // }
//     // try {
//     //     await Event.insertMany(eventData);
//     //     console.log('Events inserted successfully');
//     //   } catch (err) {
//     //     console.error('Error inserting events:', err);
//     //   }

//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   } finally {
//     mongoose.connection.close(); // Ensure connection closes after all attempts
//   }
// };

// // Call the insertData function
// insertData();


//2

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Restaurant = require('./models/Restaurant');
// const FoodDonation = require('./models/FoodDonation');
// const foodDonationsData = require('./data/foodDonationData');

// // Load environment variables from .env file
// dotenv.config();

// async function seedDatabase() {
//   try {
//     console.log("Inside seed.js insert data");

//     const mongoURI = process.env.MONGO_URI;

//     if (!mongoURI) {
//         throw new Error("MONGO_URI is not defined in the environment variables.");
//       }
//     // Connect to MongoDB
//     await mongoose.connect(mongoURI);
//     console.log('MongoDB connected');

//     // Fetch all Restaurants and map names to ObjectIds
//     const restaurants = await Restaurant.find({});
//     const restaurantMap = {};
//     restaurants.forEach((restaurant) => {
//       restaurantMap[restaurant.name] = restaurant._id;
//     });

//     // Update Food Donations data with correct ObjectId references
//     const updatedFoodDonations = foodDonationsData.map((donation) => {
//       if (restaurantMap[donation.restaurantName]) {
//         donation.restaurant = restaurantMap[donation.restaurantName];
//         delete donation.restaurantName;
//       }
//       return donation;
//     });

//     // Insert updated Food Donations data
//     await FoodDonation.insertMany(updatedFoodDonations);
//     console.log('Food donations inserted successfully');

//   } catch (error) {
//     console.error('Error inserting food donations:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// seedDatabase();


