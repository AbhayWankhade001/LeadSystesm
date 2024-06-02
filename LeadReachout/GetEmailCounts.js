const ClientEmails = require('../Model/ClientEmails');

async function getEmailStatusCounts() {
    try {
        const sentCount = await ClientEmails.countDocuments({ isSent: true });
        const unsentCount = await ClientEmails.countDocuments({ isSent: false });

        console.log(`Sent emails: ${sentCount}`);
        console.log(`Unsent emails: ${unsentCount}`);

        return { sentCount, unsentCount };
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

module.exports = getEmailStatusCounts;
