// TODO: listen for messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message recieved in background script:", message);
    if (message.action === "logMessage") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

            if (tabs.length > 0) {
                console.log("Injecting content script and sending message", message);
            
                //Inject content script
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    files: ['content.js']
                }, () => {
                    // After content script is injected, send message
                    chrome.tabs.sendMessage(tabs[0].id, message);
                });
            } else {
                console.error("No active tab found");
            }
        });
    }
});