/**
 * Processes an Intcode Program
 * 
 * Opcode 1 adds together numbers read from two positions and stores the result 
 * in a third position. The three integers immediately after the opcode tell 
 * you these three positions - the first two indicate the positions from which 
 * you should read the input values, and the third indicates the position at 
 * which the output should be stored.
 * 
 * Opcode 2 works exactly like opcode 1, except it multiplies the two inputs 
 * instead of adding them. Again, the three integers after the opcode indicate 
 * where the inputs and outputs are, not their values. 
 * 
 * Once you're done processing an opcode, move to the next one by stepping 
 * forward 4 positions.
 * 
 * @param {string} intcode
 * @returns {Array}
 */
const processIntcode = (intcode) => {
   const operation = {
      1: (a, b) => a + b,
      2: (a, b) => a * b
   };
   let rtnCode = intcode.split(",").map(code => Number(code));
   let pos;
   
   for (let idx = 0; idx < rtnCode.length; idx=idx+4) {
      const opCode = rtnCode[idx];

      switch (opCode) {
         case 1:
         case 2:
            pos = rtnCode.slice(idx+1, idx+4);

            rtnCode[pos[2]] = operation[opCode](rtnCode[pos[0]], rtnCode[pos[1]]);
            break;
         case 99:
            idx = rtnCode.length;
            break;
         default:
            throw new Error(`Computer busted; you're gunna die!: Tried to process OP-${opCode}`);
      }
   }

   return rtnCode;
};

const processMemory = (intcode) => {

}

module.exports = {
   processIntcode,
   processMemory
};