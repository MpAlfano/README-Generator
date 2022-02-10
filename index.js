//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Array of questions for user input
const questions = [
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
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contributers:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ["Apache 2.0 License", "GNU General Public License v3.0", "The MIT License", "Mozilla Public License 2.0"],
    },
    {
        type: 'input',
        message: 'Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email address?',
        name: 'email',
    },

]

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            const response = generateMarkdown(data, questions);
            console.log(data);
            writeToFile("README.md", response)
        })
}

// Function call to initialize app
init();
