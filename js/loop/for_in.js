// Used to loop over the keys (property names) of an object.

// syntax:

// for (let variable in object){
    //code
// }


const user = {
    first_name:"Brijesh",
    last_name:"Gondaliya",
    age:29
}

for (let key in user){
    console.log(key, user[key])
}