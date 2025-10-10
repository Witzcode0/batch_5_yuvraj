// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

// Syntax of class:

// class ClassName{
//     block of code
// }

// Syntax of Object:

// object_name = new ClassName()

class person{
    // constructor - auto call when object is created
    constructor(name, age){
        // data member [propeties or attributes]
        this.n = name;
        this.a = age;
    }
    // member function [method or behaviour]
    Info = ()=> {
        console.log("Person informetion: ");
        console.log("Name: ", this.n)
        console.log("Age: ", this.a)
    }
}

const p1 = new person("Brijesh", 29)
// console.log(p1.n);
// console.log(p1.a);
// p1.Info();

const p2 = new person("yuvraj", 24)
// p2.Info();