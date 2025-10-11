// const odd = [1,3,5,7,9] 
// const even = [2,4,6,8,10] 

// const new_list = [...odd, ...even]
// console.log(new_list);


const numbers = [1, 2, 3, 4, 5, 6]; 
const [one, two, ...rest] = numbers;
// console.log(rest);

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle);

