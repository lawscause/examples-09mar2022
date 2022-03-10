const vehicleOne_oldway = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

console.log(myVehicle_oldway(vehicleOne_oldway));

// old way
function myVehicle_oldway(vehicle_oldway) {
  const message =
    "My " +
    vehicle_oldway.type +
    " is a " +
    vehicle_oldway.color +
    " " +
    vehicle_oldway.brand +
    " " +
    vehicle_oldway.model +
    ".";
  return message;
}

const vehicleOne_es6 = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

console.log(myVehicle_es6(vehicleOne_es6));

function myVehicle_es6({ type, color, brand, model }) {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
  return message;
}
