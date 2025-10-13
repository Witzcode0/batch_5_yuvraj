function greet(name, anotherFunction){
    console.log("Hi", name);
    anotherFunction();
}

function sayBy(){
    console.log('Goodbye!')
}

greet("Brijesh", sayBy)