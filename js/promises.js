// syntax
// const mypromises = new Promise((resolve, reject) => {
//     block of code
// })

const mypromises = new Promise((resolve, reject) => {
    const IGotIceCream = false;

    if(IGotIceCream){
        resolve("I Got Ice-Cream.")
    }else{
        reject("I didn't Got the Ice-Cream")
    }
})

mypromises
.then((result) => console.log(result))
.catch((error) => console.error(error))
.finally(() => console.log("Promisis Finished"))