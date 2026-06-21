// console.log("Hello Developer's ...");

// alert box

// alert("How are you ?");

// confirm box

// let message = confirm("Are you sure you want to login ?"); // return true or false 
// alert(message);

// prompt box

// let age = prompt("What is your age ?", 18);
// alert(`Your age is : ${age}`);


// if, if else, else if, nested if else

// let age = 24;

// if (age > 18) { 
//     console.log("You can able to drive the car 👍");
// } else {
//     console.log("Please Give the exam for driving license...❌");
    
// }

// let marks = 41;

// if(marks >= 90) {
//     console.log("Outstanding ❤️");
    
// } else if (marks >= 80) {
//     console.log("Very Good 👍");
    
// } else if (marks >= 60) {
//     console.log("It is good 🤦‍♂️");
    
// } else {
//     console.log("You still have to work on the subject 🧑‍💻");
    
// }

// let age = 8;
// let hasLicense = true;
// if(age >= 18) {
//     if(hasLicense) {
//         console.log("Yes, he or she can drive...");
//     } else {
//         console.log("Please contact to the nearest RTO..");
//     }
// } else {
//     console.log("Please wait untill you turn 18..");
// }

// let age = 10;

// ternary operator (condition ? if true- execute st - 1 : if false execute st -2)
// let message = age >= 19 ? "yes, you're adult" : "no, you're not adult";
// console.log(message);


// let day = "Monday";

// switch (day) {
//     case 'Monday':
//         console.log("Today is Monday.....");
//         break;
//     case 'Tuesday':
//         console.log("Today is Tuesday....");
//         break;
//     case 'Wednesday':
//         console.log("Today is Wednesday....");
//         break;
//     case 'Thursday':
//         console.log("Today is Thursday....");
//         break;
//     case 'Friday':
//         console.log("Today is Friday....");
//         break;
//     case 'Saturday':
//         console.log("Today is Saturday....");
//         break;
//     case 'Sunday':
//         console.log("Today is Sunday....");
//         break;
    
//     default: console.log("Invaild Input");
//         break;
// }

let Names = ["Ajay", "Amit", "Samir", "Suraj", "flksdhfkgkhsdk"];

// console.log(Names.length);
// console.log(Names[2]);



// for (let i = 0; i < Names.length; i++) {
   
//         console.log(`iteration number : ${i}`);
//         console.log(`hello ${Names[i]}`);
    
// }

// for of loop (array)

// for (const name of Names) {
//     console.log("Your Name is : ", name);
// }


// for in loop (object)

// let User = {
//     Name : "Ajay Solanki",
//     Age : 24,
//     Roll : 108,
//     Div : "5A16"
// }

// for (const myKey in User) {
//     if (!Object.hasOwn(User, myKey)) continue;
    
//     // console.log(myKey);
//     console.log(`${myKey} - ${User[myKey]}`);
// }

let number = 1;
let Flag = true;

// while (Flag) {
//     let Gnumber = prompt("Guess the Number ?");
//     if(number == Gnumber) {
//         alert("You are Win")
//         Flag = false;
//     } else {
//         alert("Wrong, Guess again !");
//     }
// }

//infinte loop
// while(true) { 
//     console.log("I love you guys ❤️");
// }

do {

    console.log("Number : ", number);
    number++;

} while (number < 0);