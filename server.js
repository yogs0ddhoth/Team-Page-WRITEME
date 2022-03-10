// Include Packages needed for this application:
const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

// Include Modules:
// //* classes:
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {Input, List, Loop} = require('./lib/Prompt');
// //* functions:
const generateMockUp = require('./lib/generateMockUp');


const employees = [
  'Engineer',
  'Intern'
]
// base prompt question arrays:
const teamPrompts = [
  //* prompt team manager information
  new Input('manager.name', 'Enter Manager Name:'),
  new Input('manager.id', "Enter Employee Id:"),
  new Input('manager.email', 'Enter email:', 
  // (answers) => // email verification function // ? true : 'error: Enter a valid email address'
  ),
  new Input('manager.office', 'Enter office number:'),

  //* Prompt-Loop
  new Loop('team', 'Add team Member?', 
  [
    new List('type', 'Select a Team member:', employees),

    //* conditional prompt for Engineer
    new Input('name', 'Enter Engineer Name', (answers) => answers.type !== 'Intern'),
    new Input('id', 'Enter Employee Id:', (answers) => answers.type !== 'Intern'),
    new Input('email', 'Enter email:', (answers) => answers.type !== 'Intern'),
    new Input('github', 'Enter GitHub username:', (answers) => answers.type !== 'Intern'),

    //* prompts for Intern
    new Input('name', 'Enter Intern Name', (answers) => answers.type !== 'Engineer'),
    new Input('id', 'Enter Employee Id:', (answers) => answers.type !== 'Engineer'),
    new Input('email', 'Enter email:', (answers) => answers.type !== 'Engineer'),
    new Input('school', 'Enter School:', (answers) => answers.type !== 'Engineer'),
  ])
];

// Main functionality:
const init = () => {
  // prompt answers to generateMarkdown()
  inquirer.prompt(teamPrompts).then((answers) => {
    console.log(JSON.stringify(answers)); // for debugging purposes
    
    // // write the HTML from mockup 
    // fs.writeFile('./dist/index.html', generateMockUp(answers), (err) => 
    //   err ? console.log(err) : console.log(`Success! Check the 'dist' directory`)
    // );
  })
}

// Function call to initialize app
init();
// console.log(JSON.stringify(teamPrompts));
// Export for testing:
module.exports = init;