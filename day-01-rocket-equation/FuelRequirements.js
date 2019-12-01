/**
 * Fuel required to launch a given module is based on its mass. Specifically, 
 * to find the fuel required for a module, take its mass, divide by three, 
 * round down, and subtract 2.
 * @param {number} mass - positive numbers
 */
function getFuelRequirements (mass) {
   return Math.floor(mass / 3) - 2;
}

/**
 * Fuel itself requires fuel just like a module - take its mass, divide by 
 * three, round down, and subtract 2. However, that fuel also requires fuel, 
 * and that fuel requires fuel, and so on. Any mass that would require negative 
 * fuel should instead be treated as if it requires zero fuel; the remaining 
 * mass, if any, is instead handled by wishing really hard, which has no mass 
 * and is outside the scope of this calculation.
 * @param {number} mass - negative numbers are treated as zero
 */
function getNewFuelRequirements (mass) {
   let fuelRequired = 0;
   let currentMass = mass;
   const calcFuel = (mass) => {
      const fuel = Math.floor(mass / 3) - 2;
      return (fuel > 0)? fuel : 0;
   };

   while (currentMass > 0) {
      currentMass = calcFuel(currentMass);
      fuelRequired += currentMass;
   }

   return fuelRequired;
}

module.exports = {
   getFuelRequirements,
   getNewFuelRequirements
};