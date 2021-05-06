const Employee = require('./employee');

class Engineer extends Employee {
  constructor(github,name,id,email) {
    super(name,id,email);
    this.github = github;
    
  }
  
  getGithub() {
      console.log('here');
      console.log(`Github: ${this.github}`);

    }
    
  
}

const engineer = new Engineer('sona29','John',12,'test@test.com');
engineer.getGithub();