// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ["Apache 2.0", "BSD 3-Clause", "GPL 3.0", "ISC", "MIT", "N/A"];

// Make sure all text is entered. 
function validateInput(input){
    if (input != "") {
        return true;
    }
    else {
        return "This field is required. Input cannot be left blank.";
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
    // Create the project title (make sure is bigger font than the rest)
        type: "input",
        name: "title",
        message: "What is your project title?",
        validate: validateInput
},
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
        validate: validateInput
},
    {
        type: "input",
        name: "installation",
        message: "What are the steps for a user to install your project?",
        validate: validateInput
},
    {
        type: "input",
        name: "usage",
        message: "How is this project used?",
        validate: validateInput
},
    {
        type: "input",
        name: "credit",
        message: "If there are any collaborators or third-party services being used, please mention them here:",
        validate: validateInput
},
    {
        type: "list",
        name: "licenses",
        message: "Please select the license applicable to your project:",
        choices: licenses,
        validate: validateInput
},
    {
        type: "input",
        name: "test",
        message: "What tests (if any) were used for this project?",
        validate: validateInput
},
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: validateInput
},
    {
        type: "input",
        name: "email",
        message: "What is your email? (For contact and questions)",
        validate: validateInput
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const genFile = "./readmeGen/README.md"

    fs.writeFile(genFile, generateMarkdown(data), function(err){
        err ? console.log(err) : console.log("Awesome! " + genFile + " created.")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data))
}

// Function call to initialize app
init();
