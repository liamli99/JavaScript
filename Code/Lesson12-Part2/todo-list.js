const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });
    renderTodoList();

    inputElement.value = '';
}

function renderTodoList() {
    let todoListHTML = '';
    // use arrow function
    todoList.forEach((todoObject) => {
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    })
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
    // This is how we modify multiple elements with same class name!
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            // Closure! 'forEach' provides 'index', 'addEventListener' is inside 'forEach' which also has access to 'index'!
            todoList.splice(index, 1);
            renderTodoList();
        })
    })
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});