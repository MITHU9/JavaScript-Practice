//!Callback function in JavaScript
setTimeout(function () {
  console.log("Callback function executed after 5 seconds");
}, 5000);
function x(a) {
  console.log("x");
  a(); // !calling callback function y
}
x(function y() {
  console.log("y");
});

//!Javascript is a synchronous and single threaded language
//!Blocking and main thread
//!Power of callbacks
//!Deep About Event Listeners

//!Callbacks with Event Listeners
//!Closures demo with Event Listeners
function countClickedWithClosure() {
  let count = 0;
  document.querySelector("#click").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}
countClickedWithClosure();

//!Scope demo with Event Listeners
//!Garbage Collection and removeEventListeners
