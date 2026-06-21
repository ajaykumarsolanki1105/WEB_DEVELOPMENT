// console.log("This is a DOM :", document);

// console.log("This is body : ", document.body);

// console.log("This is head : ", document.head);

// console.log("This is title : ", document.title);

// console.log("This is a url : ", document.URL); 


// Selecting the elements

// id selector
let Box1 = document.getElementById("div-1");
// console.log("This is first div : ", Box1);

// Box1.style.backgroundColor = "red";
// Box1.style.padding = "20px";

// class selector

// let Boxes = document.getElementsByClassName("Box");

// console.log("all Boxes : ", Boxes);

// for (let i = 0; i < Boxes.length; i++) {
//     Boxes[i].style.backgroundColor = "teal";
//     Boxes[i].style.padding = "20px";
//     Boxes[i].style.color = "white";
// }

// tag selectors

// let Paragraphs = document.getElementsByTagName("p");
// console.log("This is Paragraphs : ", Paragraphs);

// for (let i = 0; i < Paragraphs.length; i++) {
//     Paragraphs[i].style.backgroundColor = "teal";
//     Paragraphs[i].style.padding = "20px";
//     Paragraphs[i].style.color = "white";
// }

// Qurery Selectors 

// let elements = document.querySelector(".container #div-3");

// elements.style.backgroundColor = "purple";
// elements.style.color = "white";
// elements.style.padding = "20px"

// elements.textContent = "This is third Box";
// elements.innerHTML = "<h2> The Code Yatra </h2>";

// console.log("Third Box : ", elements);


// let image1 = document.getElementById("image-1");

// image1.src = "./clock.jpg";
// image1.width = "600";


// let container = document.getElementById("box");

// let div5 = document.createElement("div");
// div5.innerText = "Box-5 this is new";
// div5.style.backgroundColor = "teal";
// div5.style.padding = "20px"
// console.log(div5);

// let box4 = document.getElementById("div-4");

// box4.remove()

// container.appendChild(div5);


// let box4 = document.getElementById("div-4");
// box4.classList.add("rounded");


// let Boxes = document.getElementsByClassName("Box");

// for (let i = 0; i < Boxes.length; i++) {
//     Boxes[i].classList.add("rounded");
    
// }

// second way
let button = document.getElementById("changeColor");

button.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = randomColor;
})


// first way 

// let ChangeColor = () => {


//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let randomColor = `rgb(${red}, ${green}, ${blue})`;

//     document.body.style.backgroundColor = randomColor;

// }






