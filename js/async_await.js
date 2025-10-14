function getData(){
    return new Promise(resolve =>{
        setTimeout(() => resolve("Data loaded"), 5000)
    })
}

async function fetchData(){
    try{
        const data = await getData();
        console.log(data);
    }catch(error){
        console.error(error);   
    }
}

fetchData();
console.log("Hello");
