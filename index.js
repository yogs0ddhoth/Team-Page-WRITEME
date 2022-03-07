// Include Packages needed for this application:
const fs = require('fs');
const inquirer = require('inquirer');

// Include Modules:
// //* classes:
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Prompt = require('./lib/Prompt');
// //* functions:
const generateMockUp = require('./lib/generateMockUp');

// prompt questions:
const Prompts = [
  //* prompt team manager information
  new Prompt.Input(),

  //* prompt select team members 

  //* conditional prompt for Engineer

  //* conditional prompt for Intern
]

// Main functionality:
function init() {
  // prompt answers to generateMarkdown()
  inquirer.prompt(questions).then((answers) => {
    // console.log(JSON.stringify(answers)); // for debugging purposes
    
    // write the HTML from mockup 
    fs.writeFile('./dist/index.html', generateMockUp(answers), (err) => 
      err ? console.log(err) : console.log(`Success! Check the 'dist' directory`)
    );
  })
}

// Function call to initialize app
init();