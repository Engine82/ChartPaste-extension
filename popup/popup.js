// TODO: generate buttons based on read file names (start with hard-coded file names; can read then later)
// create list of files
document.addEventListener("DOMContentLoaded", function () {

    files = [
        {"title": "Medical Tx", "file_name": "medical_tx.txt"},
        {"title": "Lift Assist", "file_name": "lift_assist.txt"}
    ];

    // if "files" was a dictionary: console.log(Object.keys(files).length)
    var column = document.getElementById("buttons");

    // create button coresponding to each file
    for (let i = 0; i < files.length; i++) {    
        const new_button = document.createElement("button");
        // new_button.appendChild(document.createTextNode(files[i]["title"]));
        new_button.innerText = files[i]["title"];

    // add event listner to each button ->
        new_button.addEventListener('click', () =>  {
            // let message = new_button.innerText;
            const message = files[i]["title"];
            console.log(`Button clicked: ${message}`)
            chrome.runtime.sendMessage({ action: "logMessage", message: message});
        });
    // TODO: when a button is clicked, tell background.js to read the corresponding file content

        // place button on page
        column.appendChild(new_button);
    }    
});
