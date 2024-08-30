# TEMSIS_paste_extension

## Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Permissions](#permissions)
- [Support](#support)
- [License](#license)

## Introduction
Paramedics and EMTs are required to write reports after responding to emergnecy calls, the format of which is largeley repetitive and standardized. Within this format, much of the text is the same between reports as well. This browser extension simplifies EMS report writing by allowing the user to paste 80% of their report at the click of a button, leaving only the unique parts pertaining to that specific call left to be written.

## Demo
<insert youtube link here>

## Features
- Easily insert predefinted text blocks
- Lightweight and intuitive user interface
- Secure, with minimal permissions required

## Installation
1. Clone this repository or download the zip file.
2. Go to chrome://extensions/ in your Chrome browser.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the extension directory.
5. Optional (recommended): pin the extension icon to the toolbar.

Note: The narrative text is inserted using the ID of the textarea field in the NHESR medical report form. To alter this for use elsewhere, change the element ID in the content script to the id of the element where you want the text to be inserted.

## Usage
1. In NHESR/Elite, open a new ior existing EMS incident form.
2. Navigate to the narrative section of the form.
3. Click the pencil icon in your browser toolbar.
4. Select a report template to insert into the webpage. Buttons are color coded by gender pronouns.
5. The text will be inserted into the patient care report narrative field on the webpage.

## Permissions
- activeTab: Required to interact with the current tab.
- tabs: Needed to detect and manage tabs.
- scripting: Used to inject scripts into the webpage for dynamic interaction.
This extension is designed to work exclusively on the https://www.nhesr.org/* domain, but can be easily adapted for other purposes.

## Support
If you encounter any issues or have questions, feel free to open an issue or contact me.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
