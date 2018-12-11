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
// console.log(street, city);

// ======== CLASSES ========

// class Person {
//   constructor() {
//     console.log("ran");
//     this.name = "JOHN";
//   }
// }

class Person {
  constructor(name_to_pass_in, age) {
    this.name = name_to_pass_in;
    this.age = age;
  }

  //methods
  greet() {
    return `hello, my name is ${this.name} and I am ${this.age}`;
  }
}
// now that we created the class (the blueprint) we have to instantiate a NEW object using this class)
const person_1 = new Person("JOHN", 22);
const person_2 = new Person("George", 33); //the console.log runs bc the constructor runs it when we instanciate the obj from the class

// console.log(person_2.name, person_2.age);
// console.log(person_2.greet());

// ======== SUBCLASSES ========
class Customer extends Person {
  // if we want to inherit the properties of Person we have to use a func called SUPER
  constructor(name, age, balance) {
    // pass in the properties you want to use that belong to Person
    // they are part of the parent constructor
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}`;
  }
}

const customer1 = new Customer("Kevin", 32, 300);
console.log(customer1.info());
// console.log(customer1.name);

// ======== MODULES ========

// // file 1 (file1.js)
// const name = 'Jeff';
// // if we want that variable available in file2.js we can export it/anything (obj, classed etc..)
// export const name = 'jeff';
// export const numns = [1,2,3];
// export default Person;

// // file 2 (file2.js)
// import { name, nums } from './file1';
// import Person from './file1';

// console.log(name);
// =>> jeff
