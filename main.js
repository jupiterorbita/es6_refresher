// ======== CONST & LET ========
// let name = "John";
let test; // you can init a var with let without giving it a value
//const test2; // cannot do that with const
// name = "Jack";
// console.log(name);

const person = {
  name: "John",
  age: 33
};
person.name = "Jack";
// console.log(person);

const nums = [1, 2, 3, 4];
nums.push(5);
// console.log(nums);

// ======== ARROW FUNCTIONS ========

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

// const sayHello = () => {
//   console.log("arrow Hello");
// };
// sayHello();

const sayHello = name => console.log(`Hello ${name}!!!`);

// sayHello("Johnny");

const fruits = ["apples", "oranges", "grapes"];
// ======== FOREACH ========
fruits.forEach(function() {}); // could do that but... better arrow function

// fruits.forEach((fruit, index) => console.log(fruit));

// ======== MAP ========
//becauase it is going to return something, an array here, we will put this .map in a var
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
// console.log(singleFruit);

// ======== FILTER ========
const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Sharon" }
];
// console.log(people);
// console.log(JSON.stringify(people));

const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// ======== SPREAD ========

const arr = [1, 2, 3];
// const arr1 = [arr, 4];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

// console.log(arr3);

const person1 = {
  name: "John",
  age: 36
};

const person2 = {
  ...person,
  email: "john@somewhere.com"
};
// console.log(person2);
// ======== DESTRUCTURING ========
const profile = {
  name: "John Doe",
  address: {
    street: "40 Main St",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};
// console.log(profile.name);

// to pull something out of an object, we assign a variable with curly braces :
const { name, address, hobbies } = profile; //pulling name out of profile
// console.log(name, address.street, hobbies[0]);

// if we want just the street
const { street, city } = profile.address;
console.log(street, city);

// ======== CLASSES ========

// ======== SUBCLASSES ========

// ======== MODULES ========
