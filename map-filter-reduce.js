const arr = [2, 3, 5, 6];

//*Map Function Example
function double(x) {
  return x * x;
}
function triple(x) {
  return x * x * x;
}
function binary(x) {
  return x.toString(2);
}
const result1 = arr.map(double);
console.log(result1);
const result2 = arr.map(triple);
console.log(result2);
const result3 = arr.map(binary);
console.log(result3);
const result4 = arr.map(function double(x) {
  return x * x;
});
console.log(result4);
const result5 = arr.map((x) => {
  return x * x * x;
});
console.log(result5);

//!Filter Function Example
const arr2 = [2, 4, 7, 8, 3, 9, 6, 1];
function isOdd(x) {
  return x % 2;
}

const output2 = arr2.filter(function greaterThan(x) {
  return x > 5;
});

const output3 = arr2.filter((x) => x % 2 === 0);

const output = arr2.filter(isOdd);
console.log(output);
console.log(output2);
console.log(output3);

//todo: Reduce Function Example
const arr3 = [2, 5, 4, 6, 3, 8, 7];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const outputs = arr3.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

const outputs2 = arr3.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(findSum(arr3));
console.log(findMax(arr3));
console.log(outputs);
console.log(outputs2);

//!Complex example

const users = [
  { firstName: "Ruhul", age: 29, lastName: "Amin" },
  { firstName: "Shahariar", age: 24, lastName: "Mithu" },
  { firstName: "Yasin", age: 27, lastName: "Mazid" },
  { firstName: "Moinul", age: 24, lastName: "Islam" },
];
const fullName = users.map((x) => {
  return x.firstName + " " + x.lastName;
});

const age = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const firstName = users.filter((x) => {
  if (x.age < 26) {
    return x.firstName;
  }
});
const names = firstName.map((x) => {
  return x.firstName;
});

const junior = users.filter((x) => x.age < 26).map((x) => x.firstName);

const juniors = users.reduce(function (acc, curr) {
  if (curr.age < 26) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(fullName);
console.log(age);
console.log(names);
console.log(junior);
console.log(juniors);
