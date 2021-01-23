let a = 10;
console.log(typeof(a));

a = '10';
console.log(typeof(a));

function add(num1, num2) {
    // if(typeof(num1) == 'number' && typeof(num2) == 'number')
        return num1 + num2;
}

var test = true && false;

var res1 = add(2,3);
console.log(res1);

var res2 = add("2", "3");
console.log(res2);

var name = "test";
var age = "age";

var user = {
    'name' : "test",
    'age' : 10,
    'address' : {
        'line1' : 'test'
    },
    'education qualification' : ['test', 'rest']
};


console.log(user['name']);
console.log(user.name); // shortcut
console.log(user['education qualification']);

user['education qualification'] = "tess";

var address = user['address'];

// address['line1'], address.line1;

for(var i = 0 ; i < 10 ; i++) {

}


var val1 = 10; 

var val2 = "10";

if(val1 === val2) {
    console.log("yes both are equal");
}else {
    console.log("yes both are not equal");
}

while(i < 10) {}

var d = [1,2,4,5,6];


d.slice(3) // => 3 starting index

d.slice(1,3)// from index 1 to index 3


var obj1 = {
    name : 'test',
    age : 10
};

var obj2 = {
    name : 'test',
    age : 10
};

// Obj => string

// String = > obj


if( JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("yes both are equal");
}else {
    console.log("yes both are not equal");
}

// var headingElem = document.getElementById('headings');
// console.log(headingElem);
// headingElem.classList = ['class1' , 'class2'];

// headingElem.innerHTML = `<h1> Content CHanged by JS </h1>`;

function changeContent() {
    var divElem = document.getElementById('placeholder');
    divElem.innerHTML = `<h1> Chnaged Content </h1>`;
}
