const myArray = ["apple", "banana", "orange"];
document.write("myArray: ", myArray);

/* function doSomething(val) {
    return "<p>" + val + "</p>";
} */
let doSomething = (val) => {
  document.write("doSomething val: ", val);
  let output = "<p>" + val + "</p>";
  document.getElementById("demo").innerHTML += output;
  return output;
};

const myList = myArray.map((item) => doSomething(item));
document.write("myList: ", myList);

const arrOfNums = [2, 5, 6, 9, 55];
document.write("arrOfNums: ", arrOfNums);
