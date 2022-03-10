const init = require('../server')
const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
// mock fs
jest.mock(fs);

// Include Modules:
// //* classes:
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const {Input, List, Loop} = require('../lib/Prompt');
// //* functions:
const generateMockUp = require('../lib/generateMockUp');

init()