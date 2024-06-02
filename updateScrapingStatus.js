const mongoose = require('mongoose');
const ScrapingStatus = require('./scrapingStatusModel'); //
const speak = require('./SpeakModule');

// Function to update or post scraping status data in the database
async function findPreviousDayData(currentDate) {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    return await ScrapingStatus.findOne({
      date: previousDate.toISOString().split("T")[0],
    });
  }
  
  // Function to update or post scraping status data in the database
  async function updateScrapingStatus(updateData) {
    try {
      // Get the current date
      const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
  
      // Check if there's existing data for today's date
      let existingData = await ScrapingStatus.findOne({ date: currentDate });
  
      // If existingData doesn't exist, create new data with defaults
      if (!existingData) {
        existingData = {
          totalDataToday: 0,
          totalscrapesrun: 0,
          lastScrapeCount: 0,
          totalScrapes: 0,
          totalyestData: 0,
          date: currentDate,
        };
        await ScrapingStatus.create(existingData);
      }
  
      // Increment totalScrapesRun by the number of scrapes performed in this session
      existingData.totalscrapesrun += updateData.totalscrapesrun || 0;
  
      // Update other fields if provided in updateData
      existingData.totalDataToday =
        updateData.totalDataToday || existingData.totalDataToday;
  
      // Set lastScrapeCount based on previous day's data if available
      const previousDayData = await findPreviousDayData(currentDate);
      existingData.lastScrapeCount = previousDayData
        ? previousDayData.totalscrapesrun
        : 0;
      existingData.totalyestData = previousDayData
        ? previousDayData.totalDataToday
        : 0;
  
      existingData.totalScrapes =
        updateData.totalScrapes || existingData.totalScrapes;
  
      // Update existing data for today's date
      await ScrapingStatus.updateOne({ date: currentDate }, existingData);
      console.log("Updated scraping status for today:", existingData);
    } catch (error) {
      console.error(
        "Error updating or posting scraping status in the database:",
        error
      );
    }
  }
  


  module.exports = { findPreviousDayData, updateScrapingStatus };
