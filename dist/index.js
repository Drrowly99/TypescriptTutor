"use strict";
let id = 4;
let string = 'this is a string';
let x = 39;
let bool = false;
let ids = [5, 5, 3, 2,];
let idz = ['5', '4', 5];
//Tuple
let person = [1, 'divine', true];
//Tuple array
let employee;
employee = [
    [1, 'DIDI', true],
    [5, 'top', false],
    [6, 'forbe', true]
];
employee.forEach(e => {
    if (e[0] == 5) {
        console.log(e);
    }
});
console.log(employee.length);
//Union
let uid = 22 + 'string';
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 4] = "up";
    Direction[Direction["down"] = 5] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
const user = {
    mid: 1,
    name: 'john'
};
// Type Assertion
let cid = '1';
//let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(9,7))
function log(message) {
    console.log(message);
}
log('message is dope ' + 100 + ' ' + 'plus');
const user1 = {
    mid: 1,
    name: 'john'
};
const add = (x, y) => x + y;
let math = (x, y) => {
    return x + y;
};
function sub(x, y) {
    return x - y;
}
class Person {
    constructor(mid, name) {
        this.mid = mid;
        this.name = name;
    }
    register() {
        return `${this.name} is a developer to the core`;
    }
}
const Iso = new Person(5, 'Divine Edet');
const philip = new Person(5, 'Philip Ita');
console.log(philip.register());
//Extending classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(5, 'Mufasa', 'programmer');
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numarr = getArray([1, 2, 3, 4, 5]);
let stringarr = getArray(['tom', 'Ford', 'elect']);
// <numarr.push('tit')>
