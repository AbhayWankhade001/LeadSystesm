const ClientDetails = require('../Model/ClientDetials');
const ClientEmailDetails = require('../Model/ClientEmailDetailsSchema ');

async function getEmailsFromClientDetails() {
    try {
        // Find all clients
        const clients = await ClientDetails.find({});

        for (let client of clients) {
            try {
                if (client.email && client.email.trim() !== '') {
                // Check if the email already exists in ClientEmailDetails
                const existingEmail = await ClientEmailDetails.findOne({ email: client.email });

                // If the email does not exist, store it in ClientEmailDetails
                if (!existingEmail) {
                    const newClientEmail = new ClientEmailDetails({ email: client.email });
                    await newClientEmail.save();
                    console.log(`Email ${client.email} stored successfully.`);
                } else {
                    console.log(`Email ${client.email} already exists.`);
                }
            }
            } catch (error) {
                console.error(`Error processing email ${client.email}:`, error);
            }
        }
    } catch (error) {
        console.error('Error occurred while fetching client details:', error);
    }
}

module.exports = getEmailsFromClientDetails;
