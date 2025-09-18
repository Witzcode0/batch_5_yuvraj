// Used when the number of iterations is unknown and the loop runs while the condition is true.

// [Entry control loop]

// Syntax:
// while (condition){
    // code
// }
// infinite
// while(true){
//     console.log("BIT")
// }


const table = 4;
var start = 1; 
var end = 10; 
while(start <= end){
    console.log(table, "*", start, "=", table*start);
    start++;
}