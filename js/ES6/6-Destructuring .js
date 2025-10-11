const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];


// console.log(car, truck, suv)

// new way
// const [car, truck, suv] = vehicles;
// console.log(car, truck, suv)

// function calculate(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;

//   return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7);

// console.log(add, subtract, multiply, divide);


const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

// old way
// function myVehicle(vehicle) {
//   const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
//   console.log(message);
  
// }

// new way
function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  console.log(message);
  
}

myVehicle(vehicleOne)