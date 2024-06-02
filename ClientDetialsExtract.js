
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const ClientDetails = require('./Model/ClientDetials');
const ProfileLink = require('./Model/ProfileLinks');
async function scrapeLinkedInPosts() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();


  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  try {  
      const ProfileLinks =  await ProfileLink.find();
let outputRecords = [];
    for (let i = 0; i < ProfileLinks.length; i++) {
     

        const link = ProfileLinks[i].profileLink;
        console.log(link, 'postttttt');

      try {
        await page.goto(link, { waitUntil: 'domcontentloaded' });
      } catch (error) {
        console.error(`Error navigating to ${link}: ${error}`);
        continue; // Skip to the next link
      }

      // Extracting content
      let accountName = '';
      let postContent = '';
      let email = '';
      let phoneNumber = '';
      let socialLinks = link;
      let Desktop_pic = '';

      try {
        // Extract account name
        accountName = await page.$eval('.text-sm.link-styled.no-underline.leading-open', (el) => el.textContent.trim());
        console.log(accountName);
      } catch (error) {
        console.error(`Error extracting account name from ${link}: ${error}`);
        continue; // Skip to the next link
      }

      // Extract profile picture link
      try {
        Desktop_pic = await extractProfilePictureLink(page);
        console.log('Profile picture link:', Desktop_pic);
      } catch (error) {
        console.error(`Error extracting profile picture link: ${error}`);
      }

      let postContent2;
      let postContent1;

      try {
        // Extract post content using the first method
        postContent1 = await page.$eval('.attributed-text-segment-list__container [data-test-id="main-feed-activity-card__commentary"]', (el) => el.textContent.trim());
      } catch (error) {
        console.error(`Error extracting post content from ${link}: ${error}`);
      }

      try {
        // Extract post content using the second method
        postContent2 = await page.$eval('[data-test-id="main-feed-activity-card__commentary"]', (el) => el.textContent.trim());
        console.log("Text under the first occurrence:", postContent2);
      } catch (error) {
        console.error(`Error extracting post content: ${error}`);
      }

      // Check if postContent is not found or undefined, then assign postContent2 to postContent
      // Check if postContent is not found or undefined, then assign postContent2 to postContent1
      if (!postContent1 || postContent1 === undefined) {
        postContent = postContent2;
      } else if (!postContent2 || postContent2 === undefined) {
        postContent = postContent1;
      } else {
        // If both postContent1 and postContent2 are defined, prioritize postContent1
        postContent = postContent1;
      }


      console.log("postcontent:", postContent);




      // Extract email, phone number, and social links
      try {
        // Extract email if present
        const extractedEmail = await page.evaluate(() => {
          const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g || /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          const match = document.body.innerText.match(emailRegex);
          return match ? match[0] : "";
        });
        email = extractedEmail || "";
      } catch (error) {
        console.error(`Error extracting email from ${link}: ${error}`);
      }





      try {
        // Extract phone number if present
        const extractedPhone = await page.evaluate(() => {
          const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
          const match = document.body.innerText.match(phoneRegex);
          return match ? match[0] : "";
        });
        phoneNumber = extractedPhone || "";
      } catch (error) {
        console.error(`Error extracting phone number from ${link}: ${error}`);
      }

      try {
        // Extract other social links if present
        const extractedSocialLinks = await page.evaluate(() => {
          const socialRegex = /https?:\/\/(www\.)?(linkedin\.com|twitter\.com|facebook\.com|instagram\.com)\/\S+/g;
          const match = document.body.innerText.match(socialRegex);
          return match ? match.join(", ") : "";
        });
        socialLinks = extractedSocialLinks || link;
      } catch (error) {
        console.error(`Error extracting social links from ${link}: ${error}`);
      }

      // Push record to output records
     // Push record to output records
     const record = {
        accountName,
        email,
        phoneNumber,
        socialLinks,
        postContent,
        Desktop_pic,
      };
      await saveScrapedData(record);
      await delay(5000); // Delay before visiting the next profile link

    }

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await browser.close();
  }
}

async function saveScrapedData(record) {
    try {
      const clientDetails = new ClientDetails(record);
      await clientDetails.save();
      console.log('Data saved successfully:', record);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
async function extractProfilePictureLink(page) {
  try {
    const Desktop_pic = await page.evaluate(() => {
      // Find the image elements with the specified classes
      const imgElements = document.getElementsByClassName('inline-block relative rounded-[50%] w-6 h-6 lazy-loaded');
      // Check if any image elements were found
      if (imgElements.length > 0) {
        // Return the 'src' attribute value of the first image element
        return imgElements[0].getAttribute('src');
      } else {
        // Return empty string if no image elements were found
        return '';
      }
    });

    return Desktop_pic; // Return the extracted profile picture link
  } catch (error) {
    console.error(`Error extracting profile picture link: ${error}`);
    awaitspeak(`Error extracting profile picture link: ${error}`);
    return ''; // Return empty string in case of error
  }
}


module.exports = scrapeLinkedInPosts;

