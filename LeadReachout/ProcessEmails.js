const ClientEmailDetails = require('../Model/ClientEmailDetailsSchema ');
const ClientEmails = require('../Model/ClientEmails');
// const getEmailStatusCounts = require('./GetEmailCounts')

const sendEmail = require('./Email.Leads'); // Import the sendEmail function
const moment = require('moment');

let lastExecutionDate;
async function processEmails() {
    try {
        // Find the last processed index
        const lastProcessedIndex = await getEmailStatusCounts();

        // Find unsent emails starting from the last processed index
        const unsentEmailDetails = await ClientEmailDetails.find({ isSent: false })
            .skip(lastProcessedIndex)
            .limit(3000); // Limit to 3000 emails per batch

        console.log('Emails to be processed:', unsentEmailDetails.length);

        console.log('Processing emails...');

        for (const emailDetail of unsentEmailDetails) {
            try {
                // Split email addresses by comma and trim any whitespace
                const emailAddresses = emailDetail.email.split(',').map(email => email.trim());

                for (const email of emailAddresses) {
                    // Check if the email is already present in ClientEmails collection
                    const existingEmail = await ClientEmails.findOne({ email });

                    if (!existingEmail) {
                        // Send the email after a delay of 20 seconds
                        await new Promise(resolve => setTimeout(resolve, 20000));
                        await sendEmail(email);

                        // Create a new record in ClientEmails collection
                        const newClientEmail = new ClientEmails({
                            email,
                            isSent: true,
                            sentAt: new Date()
                        });
                        await newClientEmail.save();

                        console.log(`Email sent and stored for: ${email}`);
                    } else {
                        console.log(`Skipping email ${email} as it already exists.`);
                    }
                }
            } catch (error) {
                console.error(`Error sending email to: ${emailDetail.email}`, error);
            }
        }

        console.log('Email processing complete.');

        // Update the last processed index for the next batch
        updateLastProcessedIndex(unsentEmailDetails.length);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Function to get the count of sent emails
async function getEmailStatusCounts() {
    try {
        // Count the number of emails that have been sent
        const count = await ClientEmails.countDocuments({ isSent: true });
        return count;
    } catch (error) {
        console.error('Error getting email status counts:', error);
        return 0; // Return 0 in case of an error
    }
}

// Function to update the last processed index
async function updateLastProcessedIndex(batchSize) {
    try {
        // Fetch the last processed index from a configuration document
        let config = await Config.findOne({ name: 'lastProcessedIndex' });

        if (!config) {
            // If the config document doesn't exist, create it
            config = new Config({
                name: 'lastProcessedIndex',
                value: batchSize // Start from batchSize
            });
        } else {
            // Update the value of the last processed index
            config.value += batchSize;
        }

        // Save the updated config document
        await config.save();
    } catch (error) {
        console.error('Error updating last processed index:', error);
    }
}

module.exports = {
    getEmailStatusCounts,
    updateLastProcessedIndex
};
