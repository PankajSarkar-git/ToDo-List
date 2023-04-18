// selectors
const toDoInput = document.querySelector(".todo-text");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


// Save localStorage

// const updateLSdata = ()=> {
//     const todoData = document.querySelector(".todo");
//     todoArry = [];
//     todoData.forEach((singleTodo) => {
//         return todoArry.push(singleTodo.value)
//     })
//     localStorage.setItem('todoArry', JSON.stringify(todoArry));
// }



// function
const addToDo = (event) => {
    //prevent from from subbmitting
    event.preventDefault();
    // todo div 
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    // create li 
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);
    // add todo to localStorage
    // saveLocalTodos(toDoInput.value);
    // updateLSdata();

    // create check mark button 
    const chackButton = document.createElement('button');
    chackButton.innerHTML = '<i class= "fas fa-check"></i>';
    chackButton.classList.add("chack-button");
    toDoDiv.appendChild(chackButton);
    // create delete button 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class= "fas fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    toDoDiv.appendChild(deleteButton);
    // append toDoDiv in toDoList
    toDoList.appendChild(toDoDiv);
    // clear todo input value
    toDoInput.value = "";

}

const deleteChack = (Element) => {
    const item = Element.target;
    console.log(item);
    // deletTOdo
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        // remove 
        todo.addEventListener("transitionend", () => {
            todo.remove();
        })
    }
    // chack marck 

    if (item.classList[0] === "chack-button") {
        const toDo = item.parentElement;
        toDo.classList.toggle("completed");
    }


}

// const filterToDo = (e) => {
//     const todos = toDoList.childNodes;
//     // console.log(todos);
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 // todo.style.display = 'flex';
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = 'flex';

//                 }
//                 else{
//                     todo.style.display = 'none';

//                 }

//         }
//     })

// }


// const saveLocalTodos = (todo) => {
//     let todos;
//     if(localStorage.getItem("todos")){
//         todos = [];

//     }
//     else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));

// }


// getting data back from localStorage

// const backTodo = JSON.parse(localStorage.getItem("todoArry"));


// Event Listener
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteChack);
// filterOption.addEventListener("click",filterToDo);


