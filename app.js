var greet = "Hello world";
console.log(greet);
var glag = false;
console.log(glag);
function greetBirthday(name, age) {
    return "Happy Birthday ".concat(name, ", you have turned ").concat(age);
}
console.log(greetBirthday("bheem", 20));
// when a variable can have more than two dataTypes.
// ************************************************
var password = 123456789;
password = "newPassword";
console.log(password);
function GreetBirthday(name, age) {
    if (age > 10) {
        return "Happy Birthday ".concat(name, ", you have turned ").concat(age);
    }
    else {
        return age;
    }
}
var stud1 = {
    id: 1,
    name: "stud1",
    isGraduated: true
};
// *********************************************************
// Typescript on Array
var arr = [1, 2, 3, 4, 5, 6];
var arr2 = [true, false, true];
var mixTypedArr = [1, 23, 4, true, false, "hello", "world"];
var Stud1 = {
    id: 1,
    name: "stud1",
    isGraduated: true
};
var Stud2 = {
    id: 1,
    name: "stud1",
    isGraduated: true
};
var Stud3 = {
    id: 1,
    name: "stud1",
    isGraduated: true
};
var classroom = [Stud1, Stud2, Stud3];
var obj1 = {
    id: 1,
    name: "raju"
};
var obj2 = {
    id: 2,
    name: "bheem"
};
console.log(obj1, obj2);
