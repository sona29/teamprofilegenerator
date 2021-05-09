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
    // console.log(empData);

    fs.writeFile('dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team profile page!')
    );
}


// array for storing team members info
const employeeData = []; 

//function for starting inquirer
const addEmployeeInfo = () =>{

    return inquirer.prompt ([
        {
            type: "list",
            name: "emptype",
            message: "Which type of team member would you like to add?",        
            choices: ["Manager","Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?', 
           
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee id?",  
            validate(value){
                
                const foundEmp = employeeData.find(function (employee){

                    return employee.getId() === value;
                    
                });

                if(foundEmp){
                    return 'This id was already assigned. Please use another id';
                }
                else {
                    return true;
                }

            }                  
        },
        {
            type: 'input',
            name: 'email',
            message: "What is employee's email?",            
        },
        {
            type: 'input',
            name: 'school',
            message: "Which school did intern attend",  
            when: function (answers) {
                return answers.emptype === 'Intern';
              },          
        },
        {
            type: 'input',
            name: 'githubname',
            message: "What is engineers github name?",  
            when: function (answers) {
                return answers.emptype === 'Engineer';
              },          
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your team managers office number?',
            when: function (answers) {
                return answers.emptype === 'Manager';
              },
          }, 
          {
            type: "confirm",
            name: "addmore",
            message: "Would you like to add more employee?",      
            

          } 
    ])
    .then((empInfo) => {
        if(empInfo.emptype === 'Manager')
        {
            const newManager = new Manager(empInfo.number,empInfo.name,empInfo.id,empInfo.email);
            employeeData.push(newManager); 

        }

        else if (empInfo.emptype === 'Engineer'){
            const newEngineer = new Engineer(empInfo.githubname,empInfo.name,empInfo.id,empInfo.email);
            employeeData.push(newEngineer);

        }

        else {
            const newIntern = new Intern(empInfo.school,empInfo.name,empInfo.id,empInfo.email);
            employeeData.push(newIntern); 

        }
        
        // console.log(employeeData); 

        //if user does not want to add any more team member
        if(empInfo.addmore){
            addEmployeeInfo();
            
        }
         else{
            genHTML(employeeData);

         }        
        
    });

};

addEmployeeInfo();

