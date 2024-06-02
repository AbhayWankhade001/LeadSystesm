const express = require('express');
const scrapeLinkedInLinks = require('./FindClientsFunction');
const scrapeLinkedInPosts = require('./ClientDetialsExtract');
const getEmailsFromClientDetails = require('./LeadReachout/getEmailsFromClientDetails');
const connectToMongoDB = require('./Connect');
const processEmails = require('./LeadReachout/ProcessEmails');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// Function to run scrapeLinkedInLinks()
async function runScrapeLinkedInLinks() {
  console.log('Starting scraping LinkedIn links...');
  await scrapeLinkedInLinks();
  console.log('Scraping LinkedIn links completed.');
  // After completion of scrapeLinkedInLinks, start scrapeLinkedInPosts
  await runScrapeLinkedInPosts();
}

// Function to run scrapeLinkedInPosts()
async function runScrapeLinkedInPosts() {
  console.log('Starting scraping LinkedIn posts...');
  await scrapeLinkedInPosts();
  console.log('Scraping LinkedIn posts completed.');
  // After completion of scrapeLinkedInPosts, start getEmailsFromClientDetails
  await runGetEmailsFromClientDetails();
}

// Function to run getEmailsFromClientDetails()
async function runGetEmailsFromClientDetails() {
  console.log('Starting extracting emails from client details...');
  await getEmailsFromClientDetails();
  console.log('Extracting emails from client details completed.');
  // After completion of getEmailsFromClientDetails, start processEmails
  await runProcessEmails();
}

cron.schedule('0 0 * * *', async () => {
    console.log('Running processEmails...');
    await processEmails();
    console.log('processEmails complete.');
});

// Add the simple Hello World API endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
  });
  app.get('/users', (req,res)=>{
    res.status(201).json("its working finilla😍😍😍😍")
  })
  
// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the initial scraping process when server starts
    runScrapeLinkedInLinks();

    // Schedule the scraping function to run every 3 hours
    cron.schedule('0 */3 * * *', async () => {
      runScrapeLinkedInLinks();
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


 module.exports = app;


// const express = require('express');
// const connectToMongoDB = require('./Connect');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req,res)=>{
//     res.status(200).json("home get request")
//   })
  
//   app.get('/users', (req,res)=>{
//     res.status(201).json("its working finilla😍😍😍😍")
//   })
// // Connect to MongoDB

// connectToMongoDB().then(()=>{
//     try {
//       app.listen(port, () =>{
//         console.log(`server connected to https://localhost:${port}`);
//       });
//     } catch (error) {
//       console.log('cannot connect to the server')
//     }
//   }).catch(error => {
//     console.log("invalid database connection.... !")
//   })
  
//   // Use config variables
  
//   export default app;