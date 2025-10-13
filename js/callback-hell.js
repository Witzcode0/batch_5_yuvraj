function setp1(anotherFunction){
    setTimeout(() => {
        console.log("Step-1 is completed.");
        anotherFunction();
    }, 1000)
}
function setp2(anotherFunction){
    setTimeout(() => {
        console.log("Step-2 is completed.");
        anotherFunction();
    }, 2000)
}
function setp3(anotherFunction){
    setTimeout(() => {
        console.log("Step-3 is completed.");
        anotherFunction();
    }, 3000)
}
function setp4(anotherFunction){
    setTimeout(() => {
        console.log("Step-4 is completed.");
        anotherFunction();
    }, 4000)
}
function setp5(anotherFunction){
    setTimeout(() => {
        console.log("Step-5 is completed.");
        anotherFunction();
    }, 5000)
}


setp1(() =>{
    setp2(() =>{
        setp3(() => {
            setp4(() => {
                setp5(() => {
                    console.log("All steps are completed.");
                    
                })
            })
        })
    })
})