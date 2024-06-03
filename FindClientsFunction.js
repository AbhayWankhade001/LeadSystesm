
const keywordsArray = require("./Keywords");
const { findPreviousDayData, updateScrapingStatus } = require('./updateScrapingStatus');
const ProfileLink = require('./Model/ProfileLinks'); // Import the ProfileLink model
let chrome = {};
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
chrome = require("chrome-aws-lambda");
puppeteer = require("puppeteer-core");
} else {
puppeteer = require("puppeteer");

}
async function scrapeLinkedInLinks() {
    const browser = await puppeteer.launch({
        executablePath: await chrome.executablePath,
        args: chrome.args,
        defaultViewport: chrome.defaultViewport,
        headless: true,
        ignoreHTTPSErrors:true,
    });   
     const page = await browser.newPage();
  
    // Connect to MongoDB

    // Iterate through each keyword in the array
    for (const keyword of keywordsArray) {
        let pageCounter = 0; // Reset page counter for each keyword
        let resultsCount = -1; // Initialize resultsCount to enter the loop
        
        // Endless loop to continuously scrape LinkedIn posts for the current keyword
        while (resultsCount !== 0) {
            console.log(`Scraping page ${pageCounter + 1} for keyword: ${keyword}`);

            try {
                pageCounter++;
                await updateScrapingStatus({ totalscrapesrun: 1 });

                // Construct the search query URL with pagination and current keyword
                const query = `site:linkedin.com "${keyword}"`;
                const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&start=${(pageCounter - 1) * 10}`;

                // Navigate to the Google search results page
                await page.goto(url, { waitUntil: "domcontentloaded" });

                // Get the search result links
                const links = await page.evaluate(() => {
                    const results = document.querySelectorAll(".g a");
                    return Array.from(results).map((result) => result.href);
                });

                // Break the loop if no more search results
                if (links.length === 0) {
                    console.log(`No more search results for keyword: ${keyword}. Exiting...`);
                    break;
                }

                // Save data to MongoDB
                // Note: Replace this logic with your actual MongoDB saving logic
                for (const link of links) {
                    const data = { profileLink: link, keyword: keyword };
                    // Check if data already exists before saving
                    const existingData = await ProfileLink.findOne({ profileLink: link, keyword: keyword });
                    if (!existingData) {
                        await ProfileLink.create(data);
                    }
                }

                console.log(`Scraping and saving completed for keyword: ${keyword}.`);

            } catch (error) {
                console.error(`Error during scraping and saving for keyword ${keyword}: ${error}`);
            }
  
            // Wait for some time before starting the next iteration
            await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait for 1 minute
        }
    }
  
    console.log(`Scraping completed for all keywords.`);
    await updateScrapingStatus({ totalScrapes: 1 });
    await browser.close();
}

module.exports = scrapeLinkedInLinks;
