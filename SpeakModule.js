// Import necessary packages
const say = require("say");

// Declare lastSpokenError globally
let lastSpokenError;

// Function to speak with a promise wrapper
function speak(text) {
    return new Promise((resolve) => {
        if (say) {
            // Check if the text is an error message and if it's different from the last spoken error
            if (text.startsWith("Error") && text !== lastSpokenError) {
                say.speak(text, () => {
                    lastSpokenError = text; // Update the last spoken error
                    resolve();
                });
            } else {
                // If it's not an error message or it's the same as the last spoken error, resolve immediately
                resolve();
            }
        } else {
            console.error("The 'say' package is not initialized.");
            resolve(); // Resolve the promise immediately without speaking
        }
    });
}

// Export the speak function
module.exports = speak;
