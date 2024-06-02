// api/stop.js
const { scrapeLinkedInLinks } = require('../FindClientsFunction');
let isScraping = true; // Flag to track if scraping is currently in progress

const stopScraping = async (req, res) => {
    try {
        // Logic to stop scraping if needed
        isScraping = false; // Set the flag to false to stop scraping
        res.status(200).send('Scraping stopped.');
    } catch (error) {
        console.error('Error stopping scraping:', error);
        res.status(500).send('Error stopping scraping.');
    }
};

module.exports = { stopScraping, isScraping };
