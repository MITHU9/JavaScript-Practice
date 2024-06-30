//! Async function always returns a promise...

const p = new Promise((resolve, reject) => {
  resolve("promise resolve success!!");
});
async function getData1() {
  return "hello world"; // This value will be converted to a promise...
}
async function getData2() {
  return p; // This value will be converted to a promise...
}
const promise = getData1();
console.log(promise);
promise.then((res) => console.log(res));

const getPromise = getData2();
console.log(getPromise);
getPromise.then((res) => console.log(res));

//! Handle Promise....
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved success1!");
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved success2!");
  }, 5000);
});

//! Await can only be use with async functions....
async function handlePromise() {
  console.log("Promise");
  const val1 = await p1; //! Looks like Javascript Engine was Waiting here for promise to be resolved.....
  console.log("Learning Async Await!1");
  console.log(val1);

  const val2 = await p2; //! Looks like Javascript Engine was Waiting here for promise to be resolved.....
  console.log("Learning Async Await!2");
  console.log(val2);
}
handlePromise();

// Normal way to promise handling...
function getData() {
  p1.then((res) => {
    console.log(res); //! JavaScript Engine  does not waiting  here for promise to be resolved...
  });
  console.log("Promise");
}
getData();

//! Real world Example.....
//? fetch(URL).then((res) => res.json()).then((data) => console.log(data));

const URL = "https://api.github.com/users/MITHU9";

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData();
