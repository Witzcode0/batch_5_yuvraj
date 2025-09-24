// A string is a sequence of characters used to represent text. It is one of the primitive data types in JavaScript.

// a-z, A-Z, 0-9, special-symbols


// Declaring Strings

// let str_name = 'value'
// let str_name = "value"
// let str_name = `value`

// 🟡 Access a String
const code = "JavaScript"
// console.log(code[0])
// console.log(code[1])
// console.log(code[2])
// console.log(code[3])

// for (let ch of code){
//     console.log(ch)
// }

// console.log(code.charAt(5))

// Escape Characters
// const name = "brijesh go\ndaliya"
// const name = "brijesh go\\ndaliya"
// const name = "my name is 'brijesh gondaliya'"
// const name = "my name is \"brijesh gondaliya\""
// console.log(name)


//  String Properties
// console.log(code.length);

// String Methods
const lang = "JaVAsCriPT"
// console.log(lang.toLowerCase())
// console.log(lang.toUpperCase())
// console.log(lang.charCodeAt(1))
// console.log(lang.indexOf('V'));
// console.log(lang.toLowerCase().lastIndexOf('a'));

let str = "JavaScript";
// console.log(str.includes("Script"));    // true
// console.log(str.startsWith("Java"));    // true
// console.log(str.endsWith("Script"));    // true
// console.log(str.includes('s'));
// console.log(str.includes('S'));

// console.log(lang.slice(4));     // "Script"
// console.log(lang.substring(0, 4)); // "Java"
// console.log(lang.substr(4, 3)); // "Scr" (deprecated)

let sentence = "I like apples. Apples are sweet.";
// console.log(sentence.replace('apples', "banana"));
// console.log(sentence.toLowerCase().replaceAll('apples', "banana"));

let spaced = "   Hello World   ";
// console.log(spaced.trim()); // "Hello World"
// console.log(spaced.trimStart()); // "Hello World   "
// console.log(spaced.trimEnd());   // "   Hello World"


let items = "apple,banana,grape,guava,orange";
// console.log(items.split(','));

let str1 = "Hello ";
let str2 = "World!";
// console.log(str1.concat(str2));       // "Hello World!"

// console.log("Hi! ".repeat(5));

// Template Literals
// ${expression} syntax
function generateOTP(limit=6) {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < limit; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
let otp = generateOTP(4)
let msg = `The OTP for login BIT Group - Career Website is ${otp}. It will be valid for the next 15 minutes.`
// console.log(msg);

let multiline = `Line 1
Line 2
Line 3`;

// console.log(multiline);

// String Immutability
// Strings cannot be changed directly:

var code_ = "python"
code_[0] = 'j'
// console.log(code_);

// Comparing Strings
// Use === or localeCompare():

// console.log("apple" === "apple"); // true
// console.log("a" < "b");           // true
// console.log("é".localeCompare("e")); // depends on locale

 


