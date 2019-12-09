const processIntcode = require("./processIntcode");

// //Day02 a
// const input = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0";

// //preprocessing
// let state1202 = input.split(",").map(code => Number(code));
// state1202[1] = 12;
// state1202[2] = 2;

// const output = processIntcode(state1202.toString());
// console.log(output);
// console.log(`Answer: ${output[0]}`);

//Day02 b
const input = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0";
const INITIAL_STATE = input.split(",").map(code => Number(code));
const MAX_VAL = 99;
const TARGET_VAL = 19690720;
let memory, noun, verb, output;

for (noun = 0; noun < MAX_VAL; noun++) {
   for (verb = 0; verb < MAX_VAL; verb++) {
      //Initialize memory
      memory = INITIAL_STATE;
      
      //set inputs
      memory[1] = noun;
      memory[2] = verb;

      //run program
      output = processIntcode(memory.toString());
      if (output[0] === TARGET_VAL) {
         console.log(`noun: ${noun}\tverb: ${verb}`);
         console.log(`output: ${output[0]}`);
         break;
      }
   }
}

console.log(`END Program`);