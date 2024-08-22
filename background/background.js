// TODO: listen for messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "logMessage") {
        console.log(`File name: ${message.message}`);

        // TODO: read content of file from message (from popup script)


        // TODO: send file text to contens script.
    }
});