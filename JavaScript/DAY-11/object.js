let user = {
    name:"Rahul",
    age:25,
    hobbies:["Dancing", "Singing", "Coding"],
    salary:25000,
    Greetings () {
        console.log("Hello From Rahul")
    },
    "user name":"rahul0111"
}
// console.log(user.name);
// console.log(user.salary);
// user.Greetings();
console.log(user["user name"]);

const {name, age, salary } = user;
console.log(name);
console.log(age);
console.log(salary);

const copyUser = {...user};
console.log(copyUser);



