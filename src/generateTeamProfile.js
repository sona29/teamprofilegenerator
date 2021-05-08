// manager section 
const generateManagerInfo = (manager) => {
    return `
    <div class="col-sm-4 py-2">
              <div class="card card-body h-100">
                <h3 class="card-title">Jared <br> Manager <i class="fas fa-glasses"></i></h3>
               
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID : 1</li>
                  <li class="list-group-item">Email : test@test.com</li>
                  <li class="list-group-item">Office Number: 25</li>
                </ul>
              </div>
          </div>
    `;
}


// generate html page 
const generateTeamProfile =  (employeeInfo) => {   
  
    console.log(employeeInfo);
    // const role = employee.getRole(); 


    
  }


  // export to index
module.exports = generateTeamProfile; 