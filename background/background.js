/*
* create a list of files in male and female directories
* extract a name for each file to be displayed in the popup
* present each of these lists to the popup

* in the popup, when a button is clicked,
* tell the content script to paste the corresponding text into the <textarea> with id="135338"


content scripts: paste the text into the <textarea>

*/

function listFilesInFolder(folder) {
    var files = []
    for (var file in folder) {
        files.append(file)
    }
}


// TODO: listen for messages from the popup script
// TODO: read content of file from message (from popup script)