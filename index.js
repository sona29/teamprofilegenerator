//node section
const inquirer = require('inquirer');
const fs = require('fs');

//library js
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager'); 

inquirer
  .prompt([
    {
        type: 'input',
        name: 'mname',
        message: 'What is your team managers name?',
      },
      {
        type: 'input',
        name: 'mid',
        message: 'What is your team managers id?',
      },
    {
      type: 'input',
      name: 'memail',
      message: 'What is your team managers email?',
    },
    {
      type: 'input',
      name: 'mnumber',
      message: 'What is your team managers office number?',
    },   
  
    {
        type: "list",
        name: "emptype",
        message: "Which type of team member would you like to add?",        
        choices: ["Engineer", "Intern", "I dont want to add any more team members"]
    },  

  ])
  .then((answers) => {
    
  });
