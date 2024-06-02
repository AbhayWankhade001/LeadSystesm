// api/start.js
const  scrapeLinkedInLinks  = require('../FindClientsFunction');

const startScraping = async (req, res) => {
    try {
        scrapeLinkedInLinks();
        res.status(200).send('Scraping started.');
    } catch (error) {
        console.error('Error starting scraping:', error);
        res.status(500).send('Error starting scraping.');
    }
};

module.exports = startScraping;
