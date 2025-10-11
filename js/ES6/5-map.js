const items = ["laptop", "desktop", "palmtop", "tablet", "mobile"]

// items.map((item) => console.log(item.toUpperCase()))
items.map((item) => console.log(item[0].toUpperCase() + item.slice(1,(item.length))))

// console.log("laptop".slice(1,("laptop".length)))