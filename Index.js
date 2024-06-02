const express = require('express');
const scrapeLinkedInLinks = require('./FindClientsFunction');
const scrapeLinkedInPosts = require('./ClientDetialsExtract');
const connectToMongoDB = require('./Connect');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the scraping process
    console.log('Starting scraping process...');
    // scrapeLinkedInLinks();
   scrapeLinkedInPosts();

    // Schedule the scraping function to run every 3 hours
    cron.schedule('0 */3 * * *', async () => {
      console.log('Starting scraping process...');
      await scrapeLinkedInLinks();
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
