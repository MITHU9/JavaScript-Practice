let radius = [3, 2, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

//Type-2
const calculate = function (arr, logic) {
  let area = [];
  for (let i = 0; i < arr.length; i++) {
    area.push(logic(arr[i]));
  }
  return area;
};

//Type-3
Array.prototype.calculate = function (logic) {
  let area = [];
  for (let i = 0; i < this.length; i++) {
    area.push(logic(this[i]));
  }
  return area;
};

console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
console.log(radius.map(area));
console.log(radius.calculate(area));

//Type-1
const calArea = function (radius) {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i]);
  }
  return area;
};

console.log(calArea(radius));
