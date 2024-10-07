let greet : string = "Hello world";
console.log(greet);

let glag:boolean = false;
console.log(glag);

function greetBirthday(name:string, age:number) : string{
    return `Happy Birthday ${name}, you have turned ${age}`;
}

console.log(greetBirthday("bheem",20));


// when a variable can have more than two dataTypes.

// ************************************************

let password:number | string = 123456789;

password = "newPassword";

console.log(password);

function GreetBirthday(name:string, age:number) : string | number{
    if(age > 10){
        return `Happy Birthday ${name}, you have turned ${age}`;
    }else{
        return age;
    }
}

// ***************************************************


// Typescript on object
// *****************************************************

interface student{
    id : number | string,
    name: string,
    isGraduated: boolean | number,
    // optional properties
    isPresent ? : boolean
}

let stud1: student = {
    id: 1,
    name: "stud1",
    isGraduated: true
}

// *********************************************************

// Typescript on Array

let arr : number[] = [1,2,3,4,5,6];

let arr2 : boolean[] = [true, false, true];

let mixTypedArr : (boolean | number | string)[] = [1,23,4, true, false, "hello" ,"world"];

interface Student{
    id : number | string,
    name: string,
    isGraduated: boolean | number,
    // optional properties
    isPresent ? : boolean,
    // add(): number,
}

let Stud1: Student = {
    id: 1,
    name: "stud1",
    isGraduated: true,

}

let Stud2: Student = {
    id: 1,
    name: "stud1",
    isGraduated: true
}
let Stud3: Student = {
    id: 1,
    name: "stud1",
    isGraduated: true
}

let classroom : Student[] = [Stud1, Stud2, Stud3]


// there is one more thing similar to interface that is type

type newStudent = {
    id: number | boolean,
    name: string,
    add(): number,
}

let obj1 = {
    id:1,
    name: "raju"
}

let obj2 = {
    id:2,
    name:"bheem"
}

console.log(obj1,obj2)

// Note => 1). The differce between interface and type is that if we give any function to interface
//         then it is mandatory to define that function in their child also but we can skip that
//         function if we use type 


//          2). with interface we can use keyword extends.


// ***************** what is extends *****************

interface Aniaml{
    name: string,
    hasWings: boolean,
}

interface Mammals extends Aniaml{
    isNocturnal: boolean
}

interface Aves extends Aniaml{
    bipedal: boolean
}

let cat1 : Mammals = {
    name: "snowball",
    hasWings: false,
    isNocturnal: true
}