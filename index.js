const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo.js')


const prompts = [
    //WHEN I am prompted for text THEN I can enter up to three characters
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters to appear on your logo.',
        },
    //WHEN I am prompted for the text color THEN I can enter a color keyword (OR a hexadecimal number)
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color keyword (OR a hexadecimal number) for your text color.',
    },
    //WHEN I am prompted for a shape THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo.',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    //WHEN I am prompted for the shape's color THEN I can enter a color keyword (OR a hexadecimal number)
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for your shape color.',
    },
];

//function to write svg file for logo
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

//function to initialize program
function init() {
    inquirer.prompt(prompts).then((answers) => {
        console.log(answers);
        writeToFile('logo.svg', generateLogo(answers));
    });
}

//function call to initialize program
init();