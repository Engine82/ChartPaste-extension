// TODO: generate buttons based on read file names (start with hard-coded file names; can read then later)
// create list of files
document.addEventListener("DOMContentLoaded", function () {

    function getTextInfo() {
        const textUrl = chrome.runtime.getURL('data/texts.json');

        return fetch(textUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // return parsed json data
            });
    }

    function renderPopup() {
        getTextInfo()
            .then(files => {
                console.log("Files retieved:", files)
                // if "files" was a dictionary: console.log(Object.keys(files).length)
                const column = document.getElementById("buttons");

                // clear any existing buttons
                column.innerHTML = '';

                // create button coresponding to each file
                files.forEach(file => {
                    const newButton = document.createElement("button");
                    newButton.innerText = file.title;

                    // add event listner to each button ->
                    newButton.addEventListener('click', () =>  {
                        const fileText = file.text;
                        console.log(`Text: ${fileText}}`)
                        chrome.runtime.sendMessage({ action: "logMessage", message: fileText});
                    });

                    // place button on page
                    column.appendChild(newButton);
                });
            })
                // TODO: when a button is clicked, tell background.js to read the corresponding file content
            .catch(error => {
                const column = document.getElementById("buttons");
                errorMessage = document.createElement("h4");
                errorMessage.innerText = "Error loading text data";
                column.appendChild(errorMessage);
                console.error('Error fetching texts.json', error)
            });
    }

    renderPopup();  
});
