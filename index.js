//node section
const inquirer = require('inquirer');
const fs = require('fs');

//library js
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager'); 

const generateTeamProfile = require('./src/generateTeamProfile');

//function to generate HTML
function genHTML(empData){
    const htmlPageContent = generateTeamProfile(empData);
    console.log(empData);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team profile page!')
    );
}


// array for storing team members info
const employeeData = []; 

//starting questions for manager
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
    //if engineer is selected
    if(answers.emptype === 'Engineer'){
        addEngineerInfo();
    } 

    //if Intern is selected
    else if (answers.emptype === 'Intern'){
        addInternInfo();
    }

    //if user does not want to add any more team member
    else if(answers.emptype === 'I dont want to add any more team members'){
        genHTML(employeeData);

    }
  
    
  });

//function for adding engineer team member info
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
            message: "What is engineer's email address?",            
        },
        {
            type: 'input',
            name: 'githubname',
            message: "What is engineers github name?",            
        },
        {
            type: "list",
            name: "emptype",
            message: "Which type of team member would you like to add?",        
            choices: ["Engineer", "Intern", "I dont want to add any more team members"]
        }
    ])
    .then((engineerInfo) => {
        const newEngineer = new Engineer(engineerInfo.githubname,engineerInfo.ename,engineerInfo.eid,engineerInfo.eemail);
        employeeData.push(newEngineer); 
        // console.log(employeeData); 

        //if user does not want to add any more team member
        if(engineerInfo.emptype === 'I dont want to add any more team members'){
            genHTML(employeeData);
        }

        //if Intern is selected
        else if (engineerInfo.emptype === 'Intern'){
            console.log('Intern section');
            addInternInfo();
        }

        //if engineer is selected
        else if (engineerInfo.emptype === 'Engineer'){
            addEngineerInfo();
        }
        
    });
};


//function for adding engineer team member info
const addInternInfo = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'iname',
            message: 'What is the intern name?', 
           
        },
        {
            type: 'input',
            name: 'iid',
            message: "What is the intern id?",           
        },
        {
            type: 'input',
            name: 'iemail',
            message: "What is intern's email.",            
        },
        {
            type: 'input',
            name: 'ischool',
            message: "Which school did intern attend",            
        },
        {
            type: "list",
            name: "emptype",
            message: "Which type of team member would you like to add?",        
            choices: ["Engineer", "Intern", "I dont want to add any more team members"]
        }
    ])
    .then((internInfo) => {
        const newIntern = new Intern(internInfo.ischool,internInfo.iname,internInfo.iid,internInfo.iemail);
        employeeData.push(newIntern); 
        // console.log(employeeData); 

        //if user does not want to add any more team member
        if(internInfo.emptype === 'I dont want to add any more team members'){
            genHTML(employeeData);
        }

        //if Intern is selected
        else if (internInfo.emptype === 'Intern'){
            console.log('Intern section');
            addInternInfo();
        }
        
        //if engineer is selected
        else if (internInfo.emptype === 'Engineer'){
            addEngineerInfo();
        }
        
    });
};
