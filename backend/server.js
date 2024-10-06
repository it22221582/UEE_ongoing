const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const eventRoutes = require('./routes/eventRoutes');
const foodDonationRoutes = require('./routes/foodDonationRoutes');
const orphanageRoutes = require('./routes/OrphanageRoutes');
const orphanageRequestRoutes = require('./routes/orphanageRequestRoutes');
const reportRoutes = require('./routes/reportRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes.js');
const userRoutes = require('./routes/userRoutes');
//const volunteerRoutes = require('./routes/volunteerRoutes');
const volunteerActivityRoutes = require('./routes/volunteerActivityRoutes');





// Use routes
app.use('/api/events', eventRoutes);
app.use('/api/food-donations', foodDonationRoutes);
app.use('/api/orphanages', orphanageRoutes);
app.use('/api/orphanage-requests', orphanageRequestRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/users', userRoutes);
//app.use('/api/volunteers', volunteerRoutes);
app.use('/api/volunteer-activities', volunteerActivityRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
