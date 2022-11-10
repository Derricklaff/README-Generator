// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');
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
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // this for loop will initialize an empty an array and create an array of objects of questions to then re-prompt the user for github usernames collaborators.
            let collabQuestions = [];
            for (i = 0; i < answers.collaborators; i++) {
                collabObject = { name: `collaborator${i + 1}`, message: `What is the github username of collaborator number ${i + 1}` };
                collabQuestions.push(collabObject);
            }
            // if the array has length, re-inquire.prompt. Pass both answers from first and second prompts to generate markdown function and write new file. If not, pass only answers from first prompt and write new file
            if (collabQuestions) {
                inquirer.prompt(collabQuestions)
                    .then((answersCollab) => writeToFile("./testFolder/README.md", generateMarkdown(answers, answersCollab)))
            } else {
                writeToFile("./testFolder/README.md", generateMarkdown(answers));
            }
        })
}



// Function call to initialize app
init();
