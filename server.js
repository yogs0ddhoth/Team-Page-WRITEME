// Include Packages needed for this application:
const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

// Include Modules:
const {Input, List, Loop, Validate} = require('./lib/Prompt');
// //* functions:
const generateHTML = require('./lib/generateHTML');
const {generateManager, generateEngineerHTML, generateInternHTML} = require('./lib/generateTeam')

// base prompt question arrays:
const teamPrompts = [
  //* prompt team manager information
  new Input('manager.name', 'Enter Manager Name:'),
  new Input('manager.id', "Enter Employee Id:"),
  new Validate('manager.email', 'Enter email:', null,
    (answer) => answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : 'Enter a valid email address'
  ),
  new Input('manager.office', 'Enter office number:'),

  //* Prompt-Loop
  new Loop('team', 'Add Team Member?', 
  [
    new List('type', 'Select a Team member:', ['Engineer', 'Intern']),

    //* conditional prompt for Engineer
    new Input('name', 'Enter Engineer Name', (answers) => answers.type !== 'Intern'),
    new Input('id', 'Enter Employee Id:', (answers) => answers.type !== 'Intern'),
    new Validate('email', 'Enter email:', (answers) => answers.type !== 'Intern', 
      answer => answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : 'Enter a valid email address'
    ),
    new Input('github', 'Enter GitHub username:', (answers) => answers.type !== 'Intern'),

    //* prompts for Intern
    new Input('name', 'Enter Intern Name', (answers) => answers.type !== 'Engineer'),
    new Input('id', 'Enter Employee Id:', (answers) => answers.type !== 'Engineer'),
    new Validate('email', 'Enter email:', (answers) => answers.type !== 'Engineer', 
      answer => answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : 'Enter a valid email address'
    ),
    new Input('school', 'Enter School:', (answers) => answers.type !== 'Engineer')
  ])
];

// Main functionality:
const init = () => {
  // prompt answers to generateMarkdown()
  inquirer.prompt(teamPrompts).then((answers) => {
    const managerSection = generateManager(answers.manager);
    const engineerSection = generateEngineerHTML(answers.team.filter(employee => employee.type === 'Engineer'));
    const internSection = generateInternHTML(answers.team.filter(employee => employee.type === 'Intern'));

    // write the HTML from mockup 
    fs.writeFile('./dist/index.html', generateHTML(managerSection, engineerSection, internSection), (err) => 
      err ? console.log(err) : console.log(`Success! Check the 'dist' directory`)
    );
  })
}

// Function call to initialize app
init();