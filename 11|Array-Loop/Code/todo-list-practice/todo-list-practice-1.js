const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    // Display the array in the console
    console.log(todoList);

    // This is a trick to empty the input box after clicking the add button!
    inputElement.value = '';
}
