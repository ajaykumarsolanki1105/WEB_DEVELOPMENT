// Print Statements 

// console.log("Hello World.... 😎");

// console.warn("This is warning... ajay");

// console.error("this is main error");

// let array1 = [10,20,30,45,60];

// console.log(array1);

// console.table(array1);


// Variables 

// var, let, const

var name = "AJay";
var name = "mit";

// console.log(name);


let userName = "AJay Solanki";
userName = "Agastya....";


// console.log(userName);


let user_name = "Amit"
let user$ = 56;

const userAccountNumber = "4464646464";
// const userAccountNumber = "123456789";


// console.log(userAccountNumber);

// Number
let salary = 10000;
let myAadharCardNumber = 414716130832;
let marks = 89.9;
let bankAccountNumber = 10202000105689132122n; //bigInt

// console.log(typeof bankAccountNumber);

// strings 

let firstName = "Ajay";
let lastName = 'Solanki';

let str = 'let"s start the course';
// console.log(typeof firstName);

// Boolean 

let userLogOut = true;
let isUserLogin = false;
// console.log( typeof isUserLogin);

// Null 

let MultiVerse = null;
// console.log( typeof MultiVerse);

// Undefined

let myGirlfriends; 
// console.log(typeof myGirlfriends);

// NaN

let password = "ajaysolanki";
// console.log(typeof parseInt(password));

// array 

let employees = ["ajay", "amit", 45, 60, [45,6,5,6,5]];
// console.table(employees);

// object 

let user = {
    name : "ajay solanki",
    salary : 450000,
    age : 23
}

// console.log(user.name);



// Airthmatic Operation

let Number_1 = 50;
let Number_2 = 20;

// console.log(Number_1 + Number_2);
// console.log(Number_1 - Number_2);
// console.log(Number_1 * Number_2);
// console.log(Number_1 / Number_2);
// console.log(Number_1 % Number_2);
// console.log(Number_1 ** Number_2); // root square

// Assignment Operator

// Number_1 = Number_2;

// console.log(Number_1 += 45); // 20 + 45 = 65
// console.log(Number_1 *= 45); // 65 * 45 = 2925
// console.log(Number_1 -= 45); // 2925 - 45 = 2880
// console.log(Number_1 /= 45); // 2880/45 = 64


// Comparision Oprators

// console.log(Number_1 == Number_2); //false
// console.log(Number_1 < Number_2); // false
// console.log(Number_1 > Number_2); // true
// console.log(Number_1 <= Number_2); // false
// console.log(Number_1 >= Number_2); // true
// console.log(Number_1 != Number_2); // true

// Logical Operators 


// console.log((Number_1 == Number_2) && (Number_1 > Number_2)); // false
// console.log((Number_1 == Number_2) || (Number_1 > Number_2)); // true

// console.log(!false);

// function declaration or functinon defenation
function addition (a, b) {
    console.log("Sum of two Number : ", a + b);
    console.log("138 : ", this);

}

// addition(12, 12);

// function calling

// addition(50,60);
// addition(80,80);
// addition(100,100);
// addition(456, 897);

// anonymous function
let power = function (a) {
    console.log("the power is: ", a**2);   
}

// power(8);
// power(25);
// power(10);

// arrow function

    // const getUserName = (name) => {
    //  return "Hello Welcome, " + name ;
    // }
    
    const getUserName = (name = "ajay solanki") => "Hello Welcome, " + name ;

    console.log(getUserName());
    


// getUserName("ajay");
// getUserName("thanga bali");














