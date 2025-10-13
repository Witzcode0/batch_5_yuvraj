let globalVar = "I am global";

function example(){
    var functionScope = "i am function scope"
    if (true){
        let blockscope = "I am block scope"
        console.log(blockscope);
        
    }
    console.log(globalVar);
    console.log(blockscope);
}

example()