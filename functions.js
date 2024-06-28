//Function Statement also known as Function Declaration!
function a() {
  console.log("Creating a Function is called Function Statement");
}

//Function Expression
//Difference between functions Statement and Function Expression in Hoisting!
let b = function () {
  console.log("Declaring this way a Function is called Function Expression");
};

//Anonymous Function
let x = function () {
  console.log(
    "Creating an function without a name is called Anonymous Function!"
  );
};
//Named Function Expression

let c = function xyz() {
  console.log(
    "Declaring a function with a name and put it in a variable is called Named Function Expression!"
  );
};

//Difference between Parameter & Arguments
let m = function (param1, param2) {
  console.log(param1 + param2);
};
let arg1 = 2;
let arg2 = 3;
m(arg1, arg2);
//First Class Function

let n = function () {
  return function abc() {
    console.log(
      "The ability to use function as value is known as first class function!"
    );
  };
};
n()();

//Arrow Functions
