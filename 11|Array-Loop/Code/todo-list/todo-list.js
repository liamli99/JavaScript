// Since there are two inputs, each array element should group two values! Thus array element should be object with property 'name' and 'dueDate'!
const todoList = [{
    name: 'make dinner',
    dueDate: '2000-01-01'
}, {
    name: 'wash dishes',
    dueDate: '2000-02-02'
}];

// When the page is loaded or refreshed, Internal/External JS code between script runs from the beginning, thus we should add this code here so that it is executed to display todoList array whenever the page is loaded or refreshed!
renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({
        // Object Shortcut - Shorthand Property
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    renderTodoList();

    inputElement.value = '';
}

// Display the array (todoList) on the page
function renderTodoList() {
    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // Object Shortcut - Destructuring
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList(); // call itself, recursion!!!
            ">Delete</button>
            `;
        todoListHTML += html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}