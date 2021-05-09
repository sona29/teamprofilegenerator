// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
describe('Employee', () => {
it("Can instantiate Employee instance", () => {
    const obj = new Employee();
    expect(typeof(obj)).toBe("object");
  });


it("Can set name via constructor arguments", () => {
    const name = "Jacob";
    const obj = new Employee(name);
    expect(obj.name).toBe(name);
  });


  it("Can set id via constructor argument", () => {
    const testId = 20;
    const obj = new Employee("Jacob", testId);
    expect(obj.id).toBe(testId);
  });

  it("Can set email via constructor argument", () => {
    const testEmail = "test@test.com";
    const obj = new Employee("Jacob", 1, testEmail);
    expect(obj.email).toBe(testEmail);
  });


  it("Can get name via getName()", () => {
    const testName = "Maja";
    const obj = new Employee(testName);
    expect(obj.getName()).toBe(testName);
  });  


});







