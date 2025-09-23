// What is an Object?

// An object in JavaScript is a data structure used to store collections of related data and/or functionality (which are called methods).

// It is made up of key-value pairs, where:
// - Keys are strings (also called properties).
// - Values can be any data type — string, number, array, function, or even another object.

// Object Literals and Properties:

// Syntax :

// const objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
//   // You can also include methods (functions)
//   methodName: function() {
//     // code to execute
//   }
// };


const employee = {
    personal_info: {
        first_name: "Brijesh",
        last_name: "Gondaliya",
        age: 29,
        mobile: "76576576876"

    },
    company_info: {
        email: "brijesh@company.com",
        role: "Python developer"
    },
    address_info: {
        city: "Baroda",
        state: "Gujarat",
        country: "India",
        zipcode: 395010
    },
    is_active: true,
    greet: function () {       // method (function inside object)
        return "Hello, I’m " + this.personal_info.first_name + " " + this.personal_info.last_name; // this refers to the object it belongs to.
    }
}

// Accessing Properties (Dot & Bracket Notation)

// console.log(employee.personal_info)
// console.log(employee.company_info)
// console.log(employee.address_info)
// console.log(employee.is_active)
// console.log(employee.greet())

// console.log(employee['company_info'])
// console.log(employee['personal_info'])

// Object Destructuring
// Extract values from an object into variables easily.


// const car = {
//     name: "xyz",
//     model: "hjgdjsh"
// }

// const {name, model} = car;

// console.log(name, model)


// Object.keys(), Object.values(), Object.entries()
// These methods return different views of object properties.

// console.log(Object.keys(employee))
// console.log(Object.values(employee))
// console.log(Object.entries(employee))

// for (let key of Object.entries(employee)){
//     console.log(key[0], key[1])
// }