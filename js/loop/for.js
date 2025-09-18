// Used when the number of iterations is known.

// Syntax:

// for (initialization; condition; increment/decrement) {
  // code to execute in each loop
// }


// for(let start = 1; start <= 10; start++){
//     console.log(start);
// }

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3

// finite
const table = 4;
for(let start = 1; start <= 10; start++){
    console.log(table, "*", start, "=", table*start);
}
