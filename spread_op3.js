console.clear();
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
console.log("myVehicle: ", myVehicle);

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};
console.log("updateMyVehicle: ", updateMyVehicle);

const myUpdatedVehicle0 = { ...myVehicle };

console.log("myUpdatedVehicle0: ", myUpdatedVehicle0);

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log("myUpdatedVehicle: ", myUpdatedVehicle);
