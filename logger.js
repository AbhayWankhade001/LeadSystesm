// Array to store logs
const logs = [];

// Function to add custom logs
function addLog(message) {
  const timestamp = new Date().toISOString();
  logs.push(`[${timestamp}] ${message}`);
}

// Function to retrieve logs
function getLogs() {
  return logs;
}

// Export the functions
module.exports = {
  addLog,
  getLogs,
};
