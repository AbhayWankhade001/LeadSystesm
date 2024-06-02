const mongoose = require("mongoose");

// Define Mongoose schema for scraping status data
const scrapingStatusSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  totalScrapes: { type: Number, default: 0 },
  totalDataToday: { type: Number, default: 0 },
  totalscrapesrun: { type: Number, default: 0 },
  lastScrapeCount: { type: Number, default: 0 },
  totalyestData: { type: Number, default: 0 },
});

// Create Mongoose model for scraping status data
const ScrapingStatus = mongoose.model("ScrapingStatus", scrapingStatusSchema);

module.exports = ScrapingStatus;
