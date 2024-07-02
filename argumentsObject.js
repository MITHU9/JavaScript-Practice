function sum() {
  if (arguments.length === 0) {
    console.log("Pass some arguments!");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log("Sum is: ", sum);
  }
}
sum(5, 7);

function print() {
  function print2() {
    console.log(a);
  }
  return print2;
}
let a = 5;
let m = print();
m();

let b = function () {
  console.log("I am a anonymous function");
};
b();
