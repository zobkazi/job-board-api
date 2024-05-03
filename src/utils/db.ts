import mongoose from 'mongoose';

// Set up MongoDB connection
const uri = 'mongodb://localhost:27017/job-board-db';

// Connect to MongoDB
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notification of successful connection)
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Perform any other database operations here
});
