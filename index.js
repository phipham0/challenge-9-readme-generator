// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Enter contribution guidelines',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions.',
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Choose a license',
      choices: ['MIT', 'ISC', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'Eclipse Public License 1.0'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your Github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Github email address',
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created generatedREADME.md!')
        );
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile("generatedREADME.md", markdownContent);
        });
}

// Function call to initialize app
init();
