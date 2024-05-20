// Since there are two inputs, each array element should group two values! Thus array element should be object with property 'name' and 'dueDate'!
const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({
        // Object shortcut - shorthand property
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    renderTodoList();

    // This is a trick to empty the input box after clicking the add button!
    inputElement.value = '';
}

// This function generates HTML based on the todoList array!
function renderTodoList() {
    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // Object shortcut - destructuring
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        // multi-line feature of template string!
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                // call itself, recursion!!!
                renderTodoList();
            ">Delete</button>
            `;
        todoListHTML += html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}