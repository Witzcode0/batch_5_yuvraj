// Run the block at least once, then repeat while the condition is true.

// [Exit controle]

// syntax:

// do{
//     code
// }while(condition);


const table = 4;
var start = 1; 
var end = 10; 
do{
    console.log(table, "*", start, "=", table*start);
    start++;
}while(start <= end)