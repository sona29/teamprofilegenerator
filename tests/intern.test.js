const Intern = require("../lib/Intern");

describe('Employee', () => {

    it("Can set school via constructor", () => {
        const schoolValue = "USYD";
        const obj = new Intern(schoolValue, "Maja", 1, "test@test.com");
        expect(obj.school).toBe(schoolValue);
      });


      it("getRole() should return Intern", () => {
        const returnValue = "Intern";
        const obj = new Intern("USYD", "Maja", 1, "test@test.com");
        expect(obj.getRole()).toBe(returnValue);
      });

      it("Can get school via getSchool()", () => {
        const schoolValue = "USYD";
        const obj = new Intern(schoolValue, "Maja", 1, "test@test.com");
        expect(obj.getSchool()).toBe(schoolValue);
      });

    
});