let person = {
  firstName: "Shahariar",
  lastName: "Mithu",
  age: 24,
  greet: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old and I have a ${car.brand} car.`
    );
  },
};

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

person.greet();
