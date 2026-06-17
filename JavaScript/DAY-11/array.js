

// console.table(fruits);

// console.log(fruits[1]);

// forEach loop

// fruits.forEach(function (fruit, index, arra) {
//     console.log(index, fruit, arra);
    
//     console.log(fruit)
// })

let fruits = ["Apple", "Banana", "Cherry", "Mango"];

// fruits.push(["Ford", "BMW"]);

// fruits.pop();
// let removedValue = fruits.pop();

// fruits.shift();
// console.log(fruits);
// fruits.unshift("Ajay solanki");
// console.log(fruits);

// console.log(fruits);

let include = fruits.includes("Banana")
let index = fruits.indexOf("Mango")

// console.log(include);
// console.log(index);

let numbers = [1,2,3,4,5,6,7,8,9]

let BigNum = numbers.find((num) => num > 5);
// console.log(BigNum);

// const sqaure = numbers.map(function(num){
//     return num * num;
// });

// const sqaure = numbers.map((num) => num * num);
// const even = numbers.filter(num => num % 2 == 0) 
// const odd = numbers.filter(num => num % 2 != 0) 

let TotalAmount = numbers.reduce((pre, current, cindex, array) => {
    return pre + current;
})

// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// let result = numbers.slice(2,7);
// console.table(numbers)
// let result = numbers.splice(4,3, "NewAddedElement" );
// console.log(result);
let flataaray = numbers.flat(2)
// console.log(flataaray);
// let joina = flataaray.join(" / ");
// console.log(joina);

// let text = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";
// let newArray = text.split(",");
// console.log(newArray);

let numbers2 = [10,11,12];

console.log(numbers.concat(numbers2));
console.log(numbers.concat(80,90,100));

















