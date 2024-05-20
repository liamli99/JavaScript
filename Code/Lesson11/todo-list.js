const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    // Practice 1: console.log(todoList);
    renderTodoList();

    // This is a trick to empty the input box after clicking the add button!
    inputElement.value = '';
}

function renderTodoList() {
    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const html = `<p>${todoList[i]}</p>`;
        todoListHTML += html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}