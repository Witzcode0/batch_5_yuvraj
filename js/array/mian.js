// console.log("This is a array.")
// An array in JavaScript is a special type of object used to store multiple values in a single variable. Each value is stored at a numbered position called an index (starting from 0).

// Declaring Arrays

// Syntax :

// var_name = [el1, el2,..., eln];

let items = ["tomato", "potato", "onion", "guava", "apple"];

// Access element from the array
// console.log(items[0])
// console.log(items[1])
// console.log(items[2])
// console.log(items[3])
// console.log(items[4])
// console.log(items[5]) // undefined

// for (let item of items){
//     console.log(item)
// }

// Modifying Arrays
// items[2] = "Orange"
// console.log(items);

// items.push("pen") // Add at end
// items.unshift("pen"); // Add at beginning
// items.pop();
// items.shift();
// console.log(items); 

// Common Array Methods
// console.log(items.length) // return length of array

// Slice (copy part of array)
// console.log(items.slice(1,4))

// Splice (remove/replace)
// items.splice(2, 3); // remove 3 element at index 2
// console.log(items); 

// Map
// tomato = 6
// potato = 6
// onion = 5
items.push("pen")
// let item_length = items.map(item => item.length);
// console.log(item_length);

// let item_odd_length = items.filter(item => item.length % 2 != 0);
// console.log(item_odd_length);

let arr = [1, 2, 3, 4, 5, 6];

// let sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum);

// Iterating Arrays

let colors = ["red", "green", "blue"];

// for loop
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for...of
// for (let color of colors) {
//   console.log(color);
// }

// forEach
// colors.forEach(c => console.log(c));


// let even = [2,4,6,8,10]; 
// let odd = [1,3,5,7,9]; 
// // console.log(even + odd)

// const mix = even.concat(odd);
// console.log(mix)


// const card_number = ["1234", "7646", "2462", "9678"];
// console.log(card_number.join("-"))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);

// delete fruits[0];
fruits.sort()
fruits.reverse()
// console.log(fruits)

// console.log(fruits.includes("Mango"))
// console.log(fruits.includes("guava"))

const myArr = new Int8Array(10);
console.log(myArr)

// 5 -> unsigned
// -5 -> singed