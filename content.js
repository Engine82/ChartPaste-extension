// Listen for text from background script and insert it into the proper textarea
console.log("content script loaded")

// Flag to prevent multiple event listener assigments
let isListenerAttached = false;

if(!isListenerAttached) {

    // Listen for message from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "logMessage") {
            console.log(`Content Script:  ${message.message}`);

            // Insert text into narrative textarea element
            const pasteArea = document.getElementById("135338");
            if (pasteArea) {
                pasteArea.value += message.message;
            } else {
                console.error("Element with ID 135338 not found");
            }
        }
    });

    // Activate event listener flag
    isListenerAttached = true;
}
