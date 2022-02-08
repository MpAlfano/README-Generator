// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Project description:',
            name: 'description',
        },
        // {
        //     type: 'input',
        //     message: 'Installation instructions:',
        //     name: 'installation',
        // },
        // {
        //     type: 'input',
        //     message: 'Usage information:',
        //     name: 'usage',
        // },
        // {
        //     type: 'input',
        //     message: 'contribution guidelines:',
        //     name: 'contribution',
        // },
        // {
        //     type: 'input',
        //     message: 'Test instructions:',
        //     name: 'testInstructions',
        // },
        // {
        //     type: 'list',
        //     message: 'License:',
        //     name: 'license',
        //     choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License",],
        // },
    ])
    .then((data) => {
        console.log(data.name)
        // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile('test.json', JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')

        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
