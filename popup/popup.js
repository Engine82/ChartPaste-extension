// TODO: generate buttons based on read file names (start with hard-coded file names; can read then later)
// create list of files
document.addEventListener("DOMContentLoaded", function () {

    files = [
        {"title": "Medical Tx", "file_name": "medical_tx.txt"},
        {"title": "Lift Assist", "file_name": "lift_assist.txt"}
    ];

    function getTextInfo() {
        const textUrl = chrome.runtime.getURL('data/texts.json');

        return fetch(textUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem fetching texts.json', error);
            });
    }

    function renderPopup() {
        getTextInfo()
            .then( data => {
                console.log("Using data:", data)
                // if "files" was a dictionary: console.log(Object.keys(files).length)
                var column = document.getElementById("buttons");

                // create button coresponding to each file
                for (let i = 0; i < data.length; i++) {    
                    const new_button = document.createElement("button");
                    // new_button.appendChild(document.createTextNode(files[i]["title"]));
                    new_button.innerText = files[i]["title"];

                // add event listner to each button ->
                    new_button.addEventListener('click', () =>  {
                        // let message = new_button.innerText;
                        const file_name = files[i]["file_name"];
                        console.log(`Button clicked: ${file_name}`)
                        chrome.runtime.sendMessage({ action: "logMessage", message: file_name});
                    });
                // TODO: when a button is clicked, tell background.js to read the corresponding file content

                    // place button on page
                    column.appendChild(new_button);
                }  
            })
            .catch(error => {
                var column = document.getElementById("buttons");
                errorMessage = document.createElement("h4");
                errorMessage.innerText = "Error loading text data";
                column.appendChild(errorMessage);
            })
    }
    renderPopup();  
});
