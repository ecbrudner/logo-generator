//function to generate svg file for logo
//WHEN I have entered input for all the prompts THEN an SVG file is created named `logo.svg`AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser THEN I am shown a 300x200 pixel image that matches the criteria I entered

const { Triangle, Circle, Square} = require('./shapes');

function generateLogo(answers) {
    const logo= new (answers.shape)();
    logo.setColor(answers.shapeColor);
    return 
    `<svg width="300" height="200">
    ${logo.render()}
    <text x="33%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.color}">${answers.text}</text>
    </svg>`;
};
