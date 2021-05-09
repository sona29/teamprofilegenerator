const Manager = require("../lib/Manager");

describe('Manager', () => {

    it("Can set office number via constructor argument", () => {
        const officeValue = 100;
        const obj = new Manager(officeValue, "Ruth", 1, "test@test.com");
        expect(obj.officeNumber).toBe(officeValue);
      });

      it("getRole() should return Manager", () => {
        const returnValue = "Manager";
        const obj = new Manager(23, "Ruth", 1, "test@test.com");
        expect(obj.getRole()).toBe(returnValue);
      });

      it("Can get office number via getOffice()", () => {
        const officeValue = 100;
        const obj = new Manager(officeValue, "Ruth", 1, "test@test.com");
        expect(obj.getOfficeNumber()).toBe(officeValue);
      });

});    