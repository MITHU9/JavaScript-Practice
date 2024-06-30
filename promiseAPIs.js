// function fetch() {
//   A = 7;
//   console.log(A);
// }
// let A;
// fetch();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Fetched1");
  }, 3000);
  // setTimeout(() => {
  //   reject("Data Fetched failed1");
  // }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Fetched2");
  }, 1000);
  // setTimeout(() => {
  //   reject("Data Fetched failed2");
  // }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Fetched3");
  }, 2000);
  // setTimeout(() => {
  //   reject("Data Fetched failed3");
  // }, 2000);
});

//!Type-1

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//!Type-2

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//!Type-3

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//!Type-4

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
