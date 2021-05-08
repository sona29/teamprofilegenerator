// manager section 
const generateManagerInfo = (manager) => {
    return `
    <div class="col-sm-4 py-2">
              <div class="card card-body h-100">
                <h3 class="card-title">${manager.mname} <br> Manager <i class="fas fa-glasses"></i></h3>
               
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID : ${manager.mid}</li>
                  <li class="list-group-item">Email : ${manager.memail}</li>
                  <li class="list-group-item">Office Number: ${manager.mnumber}</li>
                </ul>
              </div>
          </div>
    `;
}


// engineer section
const generateEngineerInfo = (engineer) => {
  return `
  <div class="col-sm-4 py-2">
              <div class="card card-body h-100">
                <h3 class="card-title">${engineer.ename} <br> Engineer <i class="fas fa-glasses"></i></h3>
               
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID : ${engineer.eid}</li>
                  <li class="list-group-item">Email : ${engineer.eemail}</li>
                  <li class="list-group-item">Github: ${engineer.github}</li>
                </ul>
              </div>
          </div>
  `
}

// intern section
const generateInternInfo = (intern) => {
  return `
  <div class="col-sm-4 py-2">
              <div class="card card-body h-100">
                <h3 class="card-title">${intern.iname} <br> Intern <i class="fas fa-glasses"></i></h3>
               
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID : ${intern.iid}</li>
                  <li class="list-group-item">Email : ${intern.iemail}</li>
                  <li class="list-group-item">School Name: ${intern.ischool}</li>
                </ul>
              </div>
          </div>
  `
}


// generate html page 
const generateTeamProfile =  (employeeInfo) => {   
  let html = 
  
   `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>
    <body>
    
      <!-- page header -->
        <div class="jumbotron">
            <h1 class="display-4">My Team</h1>        
        </div>
    
        <div class="container">
        
          <div class="row">
          `;
          const setData = JSON.stringify(employeeInfo);
         const getData = JSON.parse(setData);

         for (let i = 0; i < getData.length; i++) {
          console.log(getData[i]['name']);
      }

    
              
             
              
         html+=` </div>
    
          
      </div>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>    
    </body>
    </html>`;
return html;

    
  }


  // export to index
module.exports = generateTeamProfile; 