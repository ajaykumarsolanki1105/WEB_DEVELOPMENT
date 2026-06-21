let inputTask  = document.getElementById("inputTask");
let addTask = document.getElementById("addTask");
let taskList =  document.getElementById("taskList");

addTask.addEventListener("click", (event) => {
    event.preventDefault();

    const task  = inputTask.value.trim();
    if(task === "") return ;

    const li = document.createElement("li");
    li.textContent = task;

    const del = document.createElement("button");
    del.textContent = "DELETE";
    del.style.backgroundColor = "red";
    del.style.padding = "10px";
    del.addEventListener("click", () => li.remove());

    li.appendChild(del);
    taskList.appendChild(li);
    inputTask.value = "";

});