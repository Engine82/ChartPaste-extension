// Access texts.json and generate buttons in popup
document.addEventListener("DOMContentLoaded", function () {

    // Acces the .json data
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

    // render popup buttons using "title" from .json
    function renderPopup() {
        
        // Fetch .json data
        getTextInfo()
            .then(files => {
                console.log("Files retieved:", files)

                // clear any existing buttons
                const column1 = document.getElementById("column1");
                const column2 = document.getElementById("column2");

                column1.innerHTML = '';
                column2.innerHTML = '';

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

                    // Place button on page
                    if (file.category === "Male") {
                        column1.appendChild(newButton);
                    } else if (file.category === "Female") {
                        column2.appendChild(newButton);
                    }

                    // Assign button color
                    if (file.category === "Male") {
                        newButton.classList.add("column1");
                    } else if (file.category === "Female") {
                        newButton.classList.add("column2");
                    }
                });
            })

            // Display and log error if unsuccessful at fetching .json data
            .catch(error => {
                const column = document.getElementById("buttons");
                errorMessage = document.createElement("h4");
                errorMessage.innerText = "Error loading text data";
                column.appendChild(errorMessage);
                console.error('Error fetching texts.json', error)
            });
    }

    // Function call to render popup buttons
    renderPopup();  
});
