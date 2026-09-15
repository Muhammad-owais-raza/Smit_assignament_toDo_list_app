
const input = document.querySelector("#todoIbput");
const ul = document.querySelector("#showList");


let toDos = JSON.parse(localStorage.getItem("todos")) || [] ;


function myTodos(event){
    event.preventDefault();

    toDos.push(input.value);

    const arrayString = JSON.stringify(toDos);
    localStorage.setItem("todos", arrayString);

    showTodos();

    input.value = "";
    
}

function showTodos(){

    ul.innerHTML = "";

    for (let i = 0; i < toDos.length; i++) {

        ul.innerHTML += `<li>${toDos[i]} <button onclick="editTodos(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
        <button onclick="deleteTodos(${i})"><i class="fa-solid fa-trash-can"></i></button></li>`;
        
    }

}

showTodos();




function deleteTodos(index) {

    toDos.splice(index ,1);

    const arrayString = JSON.stringify(toDos);
    localStorage.setItem("todos", arrayString);

    showTodos();

}

function editTodos(index) {
    let update = prompt("Enter new value " , toDos[index]);

    toDos[index] = update;

    const arrayString = JSON.stringify(toDos);
    localStorage.setItem("todos", arrayString);

    showTodos();
}

