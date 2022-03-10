const vehicles_oldway = ["mustang", "f-150", "expedition"];
console.log("vehicles_oldway: ", vehicles_oldway);

// old way
const car_oldway = vehicles_oldway[0];
console.log("car_oldway: ", car_oldway);

const truck_oldway = vehicles_oldway[1];
console.log("truck_oldway: ", truck_oldway);

const suv_oldway = vehicles_oldway[2];
console.log("suv_oldway: ", suv_oldway);

const vehicles_es6 = ["mustang", "f-150", "expedition"];
console.log("vehicles_es6: ", vehicles_es6);

const [car, , suv] = vehicles_es6;
console.log("car: ", car);
console.log("suv: ", suv);

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log("add: ", add);
  console.log("subtract: ", subtract);
  console.log("multiply: ", multiply);
  console.log("divide: ", divide);
