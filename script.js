
const input = document.querySelector("#todoIbput");
const ul = document.querySelector("#showList");


let toDos = ["Todo list" , "Portfolio" , "Weather app" , "Ecommers web" , "Naat player"] ;


function myTodos(event){
    event.preventDefault();

    toDos.push(input.value);

    showTodos();
    
}


function showTodos(){

    ul.innerHTML = "";

    for (let i = 0; i < toDos.length; i++) {

        ul.innerHTML += `<li>${toDos[i]} <button onclick="deleteTodos(${i})"> Delete</button></li>`;
        
    }

}

showTodos();


function deleteTodos(index) {

    toDos.splice(index ,1);

    showTodos();

}

