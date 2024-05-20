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
    // forEach instead of for loop
    todoList.forEach(function(todoObject, index) {
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${index}, 1);
                // call itself, recursion!!!
                renderTodoList();
            ">Delete</button>
            `;
        todoListHTML += html;
    })
    // for (let i = 0; i < todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     const { name, dueDate } = todoObject;

    //     const html = `
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <button class="delete-todo-button" onclick="
    //             todoList.splice(${i}, 1);
    //             // call itself, recursion!!!
    //             renderTodoList();
    //         ">Delete</button>
    //         `;
    //     todoListHTML += html;
    // }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}