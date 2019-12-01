const getFuelRequirements = require("../day-01-rocket-equation/FuelRequirements");

/*
* For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
* For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
* For a mass of 1969, the fuel required is 654.
* For a mass of 100756, the fuel required is 33583.
*/
describe("Day 01a: Rocket Equation", () => {
   it("Needs 2 units of fuel for a mass of 12", () => {
      expect(getFuelRequirements(12)).toBe(2);
   });
   it("Needs 2 units of fuel for a mass of 14", () => {
      expect(getFuelRequirements(14)).toBe(2);
   });
   it("Needs 654 units of fuel for a mass of 1969", () => {
      expect(getFuelRequirements(1969)).toBe(654);
   });
   it("Needs 33583 units of fuel for a mass of 100756", () => {
      expect(getFuelRequirements(100756)).toBe(33583);
   });
});