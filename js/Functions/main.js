// A function is a block of code designed to perform a particular task. It is executed when "called" or "invoked."

// 🔹Parameters & Arguments
// What are they?
//     - Parameters are variables listed in the function definition.
//     - Arguments are the actual values passed to the function when it is invoked.

// - you can reuse, moduler, 

// Function Declaration (Named Function)

// syntax :

// function function_name(para1, para2, ...paran){
    // code
// }

// calle / invoke
// function_name(v1, v2,...vn)

// function add(num1, num2){
//     console.log(num1 + num2)
// }

// add(10, 20)
// add(100, 200)


// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet("Brijesh");
// greet("Yuvraj");


// Function Expression (Anonymous Function)

// syntax:

// variable_name = function(){
    // code
// }

// 🔹Return Values
// What is it?
//     - A function can return a value using the return keyword.

// const add = function(num1, num2){
//     return num1 + num2
// }
// console.log(add(10, 20))

// Arrow Function

// syntax:
// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(10, 20))


// Callback Functions

// What is it?
// - A callback is a function passed as an argument to another function and executed after  some operation.

// function By(){
//     console.log("GoodBy!!!!")
// }

// function greet(name, callback){
//     console.log("Hi,", name);
//     callback();
// }
// greet("Brijesh", By)

// IIFE (Immediately Invoked Function Expression)

// What is it?
//     - An IIFE is a function that runs as soon as it is defined.

// syntax:

// (function(){
    // code
// })()


// (function(){
//     console.log("Hi, Brijesh");
// })()


// (function(name){
//     console.log("Hi, " + name);
// })("Brijesh");


// var  num = 20;

// function test(){
//     var num = 10;
//     console.log(num)
// }

// test()


// var  num = 20;

// function test(){
//     // var num = 10;
//     console.log(num)
// }

// test()


let  num = 10; // global

function test(){
    let num = 20; // local
    console.log(num)
}

test()
console.log(num)
