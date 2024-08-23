// Listen for text from background script and insert it into the proper textarea
console.log("content script loaded")
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "logMessage") {
        console.log(`Content Script:  ${message.message}`);
        const pasteArea = document.getElementById("135338");

        if (pasteArea) {
            pasteArea.innerText = message.message;
        } else {
            console.error("Element with ID 135338 not found");
        }
    }
});