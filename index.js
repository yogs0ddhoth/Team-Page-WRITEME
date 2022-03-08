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
  'Intern',
  'Finish'
]
// base prompt question arrays:

const managerPrompts = [
  //* prompt team manager information
  new Input('employees.manager.name', 'Enter Manager Name:'),
  new Input('employees.manager.email', 'Enter email:', 
  // (answers) => // email verification function // ? true : 'error: Enter a valid email address'
  ),
  new Input('employees.manager.id', "Enter Employee Id:"),
  new Input('employees.manager.office', 'Enter office number:'),
];
const [managerName, managerEmail, managerId, managerOffice] = managerPrompts;

const teamPrompts = [
  //* prompt select team members 
  new List('type', 'Select a Team member:', employees),

  //* conditional prompt for Engineer
  new Input('name', 'Enter Engineer Name', 
  (answers) => (answers.type !== 'Finish') && (answers.type !== 'Intern')
  ),
  new Input('id', 'Enter Employee Id:',  
  (answers) => (answers.type !== 'Finish') && (answers.type !== 'Intern')
  ),
  new Input('email', 'Enter email:', 
  (answers) => (answers.type !== 'Finish') && (answers.type !== 'Intern')
  ),
  new Input('github', 'Enter GitHub username:', 
  (answers) => (answers.type !== 'Finish') && (answers.type !== 'Intern')),

  //* prompts for Intern
  new Input('name', 'Enter Name', 
  (answers) => (answers.type !== 'Finish') && (answers.type !== 'Engineer')
  )
];
const teamLoop = {
  type: 'loop',
  name: 'team', 
  message: 'Add Team Member?', 
  questions: teamPrompts
};

// Main functionality:
function init() {
  // prompt answers to generateMarkdown()
  inquirer.prompt(teamLoop).then((answers) => {
    console.log(JSON.stringify(answers)); // for debugging purposes
    
    // // write the HTML from mockup 
    // fs.writeFile('./dist/index.html', generateMockUp(answers), (err) => 
    //   err ? console.log(err) : console.log(`Success! Check the 'dist' directory`)
    // );
  })
}

// Function call to initialize app
init();