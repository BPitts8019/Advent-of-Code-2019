/**
 * Fuel required to launch a given module is based on its mass. Specifically, 
 * to find the fuel required for a module, take its mass, divide by three, 
 * round down, and subtract 2.
 * @param {number|number[]} modules - positive numbers
 */
function getFuelRequirements (modules) {
   let fuelRequired = 0;
   const calcFuel = (mass) => {
      return Math.floor(mass / 3) - 2;
   };

   if (Array.isArray(modules)) {
      modules.forEach(modMass => {
         fuelRequired += calcFuel(modMass);
      });
   } else {
      fuelRequired = calcFuel(modules);
   }

   return fuelRequired;
}

module.exports = getFuelRequirements;