// Listen for text from background script and insert it into the proper textarea
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showAlert") {
        alert(`You clicked ${message.message}`);
    }
});