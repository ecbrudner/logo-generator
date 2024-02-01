# logo-generator
<img width="289" alt="Screenshot 2024-01-31 at 8 09 50 PM" src="https://github.com/ecbrudner/logo-generator/assets/148579054/92864998-1652-4f84-81e7-2c78585d14d1">

![Video Walkthrough of App Functionality](https://drive.google.com/file/d/1t3sJrKERy9koQOEgOtE_Kej4zFdeM9ky/view)

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

I created this app to allow the user to easily generate SVG logos from the command line in order to save time and money on various projects that might benefit from including a logo. This app was created using Object-Oriented 
Programming and involved Test-Driven Development. In creating this app, I had the opportunity to continue to practice Node.js by creating classes for the various logo shapes, and developing tests for each shape type as well.

## Installation

User will need to install Node.js in order to use the application. ![Here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) are instructions for installing Node.
Install ![this extension](https://marketplace.visualstudio.com/items?itemName=jock.svg) to easily preview SVG files from VS Code.

## Usage

First, the user will launch the app by typing node index.js in their command line. From there, the user will answer each prompt with their preferences for their custom logo. Finally, the user will be presented with a fully generated SVG file containing their logo. User can preview the logo in VS Code, open in their browser, save the file to their directory, or start over.

## Credits

Utilized GitHub Copilot and Chat GPT

## License

MIT License

## Tests

Application tests can be found in the lib folder of the directory, in the shapes.test.js file. User can test application by entering "npm run test" in the command line.