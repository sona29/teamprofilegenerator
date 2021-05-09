const Engineer = require("../lib/Engineer");

describe('Engineer', () => {

    it("Can set GitHUb account via constructor", () => {
        const githhub = "Github Username";
        const obj = new Engineer(githhub, "Jenny", 1, "test@test.com");
        expect(obj.github).toBe(githhub);
      });


      it("getRole() should return Engineer", () => {
        const returnValue = "Engineer";
        const obj = new Engineer("Jenny21", "Jenny", 1, "test@test.com");
        expect(obj.getRole()).toBe(returnValue);
      });

      it("Can get GitHub username via getGithub()", () => {
        const githhub = "Github Username";
        const obj = new Engineer(githhub, "Jenny", 1, "test@test.com");
        expect(obj.getGithub()).toBe(githhub);
      });


});