// TODO: generate buttons based on read file names (start with hard-coded file names; can read then later)
// create list of files
document.addEventListener("DOMContentLoaded", function () {
    files = [{"title": "Medical Tx", "file_name": "medical_tx.txt"}, {"title": "Lift Assist", "file_name": "lift_assist.txt"}];
    console.log(files);
    console.log(files.length);
    // if "files" was a dictionary: console.log(Object.keys(files).length)
    
    // loop through list of files.
    for (var i = 0; i < files.length; i++) {
        console.log(files[i]);
    
        // create new button
        var new_button = document.createElement("button");
        new_button.appendChild(document.createTextNode(files[i]["title"]));

        // place button on page
        var column = document.getElementById("buttons");
        column.appendChild(new_button);
        console.log(new_button);

    }
    // create button for each file 
    // add event listner to each button ->
    // TODO: when a button is clicked, tell background.js to read the corresponding file content
    
});
