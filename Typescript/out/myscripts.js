"use strict";
let ab;
ab = '10';
function additon(num1, num2) {
    console.log('adding');
    return num1 + num2;
}
var res12 = additon(2, 3);
console.log(res12);
console.log("test");
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Manager extends Employee {
}
var emp1 = new Employee("test", 1);
