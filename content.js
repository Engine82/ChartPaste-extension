// Listen for text from background script and insert it into the proper textarea
const DEBUG_MODE = false;
if (DEBUG_MODE) {
    console.log("content script loaded");
}

// Flag to prevent multiple event listener assigments
let isListenerAttached = false;

if(!isListenerAttached) {

    // Listen for message from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (sender.id === chrome.runtime.id && message.action === "logMessage") {
            if (DEBUG_MODE) {
                console.log(`Content Script:  ${message.message}`);
            }

            // Insert text into narrative textarea element
            function sanitize(input) {
                const div = document.createElement('div');
                div.textContent = input;
                return div.textContent;
            }

            const pasteArea = document.querySelector('textarea[name="narrative"]');
            if (pasteArea) {
                const sanitizedMessage = sanitize(message.message);
                pasteArea.textContent += sanitizedMessage;
            } else {
                console.error("Target textarea not found");
            }
        } else {
            console.warn("Recieved message from untrusted source or invalid action");
        }
    });

    // Activate event listener flag
    isListenerAttached = true;
}
