//node section
const inquirer = require('inquirer');
const fs = require('fs');

//library js
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager'); 


// array for storing team members info
const employeeData = []; 

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
     
    const newManager = new Manager(answers.mnumber,answers.mname,answers.mid,answers.memail);
    employeeData.push(newManager); 
    if(answers.emptype === 'Engineer'){
        addEngineerInfo();

    }  
    
  });


  const addEngineerInfo = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'ename',
            message: 'What is the engineer name?', 
           
        },
        {
            type: 'input',
            name: 'eid',
            message: "What is the engineer id?",           
        },
        {
            type: 'input',
            name: 'eemail',
            message: "Please enter the engineer's email.",            
        },
        {
            type: 'input',
            name: 'githubname',
            message: "What is engineers github name",            
        }
    ])
    .then((engineerInfo) => {
        const newEngineer = new Engineer(engineerInfo.githubname,engineerInfo.ename,engineerInfo.eid,engineerInfo.eemail);
        employeeData.push(newEngineer); 
        console.log(employeeData); 
        
    });
};
