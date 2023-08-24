"use strict";
//basic types
let id = 5; //numbers
let company = "Kenneth Karani"; //strings
let isPublished = true; //boolean
let x = 'Hello'; //any type
let age;
age: 30;
let ids = [1, 2, 3, 4, 5, 6]; //arrays
let arr = [1, 2, "Hello", 'B'];
//tuple
let person = [1, "Hello", false, 2];
//array tuple
let employee;
employee = [
    [1, "Kelly"],
    [2, "John"],
    [3, "Jill"]
];
//Union Types
//unions : a union formed from two or more other types, representing values that may be
//any one of those types. Holds more than one type
let pid = 22;
pid = "Hello";
//Enum
//An enum is a special "class" that represents a group of constants (unchangeable variables)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["North"] = 1] = "North";
    Direction1[Direction1["South"] = 2] = "South";
    Direction1[Direction1["West"] = 3] = "West";
    Direction1[Direction1["East"] = 4] = "East";
})(Direction1 || (Direction1 = {}));
//console.log(Direction1.East)//displays 4 when 1 is assigned to North
//Objects in Typescript
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
const car2 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
//type Assertion
let cid = 1;
let customerId = cid; //implicitly defines customer id into a number and cannot be reassigned to 
//other value
//customerId = true will cause an error
//alternatively you can assert the type like this....
let CustomerID = cid;
//Fuctions
function AddNum(x, y) {
    return x + y; //return a value of type number
}
//void
function log(message) {
    console.log(message);
}
log(2); //can only accept string and numbers 
const user2 = {
    id: 1,
    name: 'John'
};
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
class Person1 {
    //constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //method
    register() {
        return `${this.name} is now registered`;
    }
}
//parentClass
class Person {
    //constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //method
    register() {
        return `${this.name} is now registered`;
    }
}
const James = new Person(1, "James Kamau");
//sub class or Child Class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, "Ken", "Developer");
emp.register();
//Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['Jackie', 'Miranda', 'Johannes']);
numArray.push('hello'); //can push a string to an array of numbers
//a generic function
function getArray2(items) {
    return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4, 5]);
let strArray3 = getArray2(['Jackie', 'Miranda', 'Johannes']);
// numArray2.push('hello') -- cannot push a string into an numbers array
//strArray3.push(5) -- cannot push a number into a strings array
