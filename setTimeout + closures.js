//setTimeout + closures example...
// function x() {
//   for (let i = 1; i <= 6; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Learning JavaScript Closure  ");
// }

function x() {
  for (var i = 1; i <= 6; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    closure(i);
  }

  console.log("Learning JavaScript Closure  ");
}

x();
