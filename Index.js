const express = require('express');
const morgan = require('morgan');
const scrapeLinkedInLinks = require('./FindClientsFunction');
const scrapeLinkedInPosts = require('./ClientDetialsExtract');
const getEmailsFromClientDetails = require('./LeadReachout/getEmailsFromClientDetails');
const connectToMongoDB = require('./Connect');
const processEmails = require('./LeadReachout/ProcessEmails');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// Array to store logs
const logs = [];

// Middleware to log requests and store them in the logs array
app.use(morgan('dev', {
  stream: {
    write: (message) => logs.push(message.trim())
  }
}));

// Function to add custom logs
function addLog(message) {
  const timestamp = new Date().toISOString();
  logs.push(`[${timestamp}] ${message}`);
}

// Function to run scrapeLinkedInLinks()
async function runScrapeLinkedInLinks() {
  try {
    addLog('Starting scraping LinkedIn links...');
    await scrapeLinkedInLinks();
    addLog('Scraping LinkedIn links completed.');
    // After completion of scrapeLinkedInLinks, start scrapeLinkedInPosts
    await runScrapeLinkedInPosts();
  } catch (error) {
    addLog(`Error during scraping LinkedIn links: ${error}`);
  }
}

// Function to run scrapeLinkedInPosts()
async function runScrapeLinkedInPosts() {
  try {
    addLog('Starting scraping LinkedIn posts...');
    await scrapeLinkedInPosts();
    addLog('Scraping LinkedIn posts completed.');
    // After completion of scrapeLinkedInPosts, start getEmailsFromClientDetails
    await runGetEmailsFromClientDetails();
  } catch (error) {
    addLog(`Error during scraping LinkedIn posts: ${error}`);
  }
}

// Function to run getEmailsFromClientDetails()
async function runGetEmailsFromClientDetails() {
  try {
    addLog('Starting extracting emails from client details...');
    await getEmailsFromClientDetails();
    addLog('Extracting emails from client details completed.');
    // After completion of getEmailsFromClientDetails, start processEmails
    await runProcessEmails();
  } catch (error) {
    addLog(`Error during extracting emails from client details: ${error}`);
  }
}

// Function to run processEmails()
async function runProcessEmails() {
  try {
    addLog('Starting email processing...');
    await processEmails();
    addLog('Email processing completed.');
  } catch (error) {
    addLog(`Error during email processing: ${error}`);
  }
}

// Cron job to run processEmails daily at midnight
cron.schedule('0 0 * * *', async () => {
  try {
    addLog('Running processEmails...');
    await processEmails();
    addLog('processEmails complete.');
  } catch (error) {
    addLog(`Error during processEmails cron job: ${error}`);
  }
});

// Simple Hello World API endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  res.status(201).json("its working fine");
});

// Endpoint to retrieve logs
app.get('/logs', (req, res) => {
  res.json(logs);
});

// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    addLog('Connected to MongoDB');

    // Start the initial scraping process when server starts
    runScrapeLinkedInLinks();

    // Schedule the scraping function to run every 3 hours
    cron.schedule('0 */3 * * *', async () => {
      runScrapeLinkedInLinks();
    });

    // Start the server
    app.listen(PORT, () => {
      addLog(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    addLog(`Error connecting to MongoDB: ${error}`);
  });

module.exports = app;
