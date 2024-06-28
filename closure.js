// Closures example
function x() {
  let a = 5;
  return function y() {
    console.log(a);
  };
  //return y();
}

let z = x();
console.log(z);
//......... hundred line of code...

z(); // Outputs: 5
