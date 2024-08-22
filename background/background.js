// TODO: listen for messages from the popup script
// TODO: read content of file from message (from popup script)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "logMessage") {
        console.log(`You clicked ${message.message}`);
    }
});