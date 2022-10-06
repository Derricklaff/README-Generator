// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')
const writefile = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your Github Username...'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email...',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project?..'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project...'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please write instructions how to install...',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please write a guide on how to use your app...',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enstruct how to test your app...'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please write ways to contribute...'
    },
    {
        type: 'list',
        name: 'license',
        message: "Select the license you would like to use?..",
        choices: ['MIT', 'Apache 2.0', 'Mozilla', 'NONE']
    }
];

const promptUser = () => inquirer.prompt(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    writeToFile('README.md', generateMarkdown(data))
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((data) => writeToFile(data))
        .then(() => console.log('Succesfully created Readme file!'))
        .catch((err) => console.error(err))
};

// Function call to initialize app
init();
