let ab: string;

ab = '10';

function additon(num1: number, num2: number) :number {
    console.log('adding');
    return num1 + num2;
}

var res12 = additon(2,3);
console.log(res12);
console.log("test");

class Employee {
    name: string;
    id: number;
    
    constructor(name:string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Manager extends Employee {}

var emp1 = new Employee("test", 1);
