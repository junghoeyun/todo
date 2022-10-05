const todotext = document.querySelector("#todotext");
const checkbox= document.querySelector("#cb-todo");
const ifwhile = document.querySelector("#ifwhile");
const todoBoard = document.querySelector("#todo-board");

const todoButton =  todotext.next();

    todoButton.on("click", addTodo)

function addTodo(){
    const text = todotext.value();

    const li = document.querySelector("<li>");
    const checkbox = document.querySelector("<input>").attributes("type","checkbox");
    const textNode = document.querySelector("<span>").innerHTML(text);
    const button = document.querySelector("button");

    li.append(checkbox);
    li.append(textNode);
    li.append(button);



    todotext.value()="";
    todoBoard.append("li");
    button.innerhtml("x");
    checkbox.on("click",todoCheck);
}
    function todoCheck(e){
    const li = e.target.parentNode;
        if(e.target.checkbox)
            li.style.color = "lightgray";
        else
            li.style.color = "black";
        
    }

    function todoDelete(e){
        const li = e.target.parentNode;
        li.remove();
    }

