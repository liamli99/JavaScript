const todoList = [{
    name: 'make dinner',
    dueDate: '2000-01-01'
}, {
    name: 'wash dishes',
    dueDate: '2000-02-02'
}];

renderTodoList();

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

// Display the array (todoList) on the page
// We prefer regular function when creating functions because it is easier to read and enables hoisting!
function renderTodoList() {
    let todoListHTML = '';
    
    // for (let i = 0; i < todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     const { name, dueDate } = todoObject;

    //     const html = `
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <button class="delete-todo-button" onclick="
    //             todoList.splice(${i}, 1);
    //             renderTodoList(); // call itself, recursion!!!
    //         ">Delete</button>
    //         `;
    //     todoListHTML += html;
    // }

    // Use forEach: execute the provided function on each array element!
    // It provides parameters 'value' (item value), 'index' (item index), and 'array' (the whole array) to callback, you can choose not to use these parameters or only part of these parameters! 
    // The parameter names don't matter, but the order of these parameters matters!
    // We prefer arrow function when creating callback!
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

    // Use addEventListener instead of onclick!
    // We should add event listener to delete button at this exact location: (1) After the above code, because we can only add event listener when delete button exists on the page! (2) Inside renderTodoList function, because we should add event listener whenever delete button is generated!
    // Since we want to add event listener to all delete buttons, we should use querySelectorAll! Note that querySelector gets an object and querySelectorAll gets an array of objects!
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList(); // recursion
        })
    })
}

// Use addEventListener instead of onclick!
document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);