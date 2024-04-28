const todoInput = document.querySelector('.input');
const collection = document.querySelector('.collection');
const todoForm = document.querySelector('.todo-form');
let todos = [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let todoValue = todoInput.value;
    if (todoValue !== '') {
        addToDOM(todoValue);
        todos.push(todoValue);
        storeTodoOnLocalStorage();
        todoInput.value = '';
    }
});

function addToDOM(value) {
    const li = document.createElement('li');
    const todoTitle = document.createElement('span'); 
    const deleteButton = document.createElement('button');

    todoTitle.innerText = value;
    deleteButton.innerText = 'Borrar'; 

    li.classList.add('collection-item'); 

    deleteButton.addEventListener('click', (e) => {
        
        e.target.parentElement.remove();
        
        const index = todos.indexOf(value);
        if (index !== -1) {
            todos.splice(index, 1);
            storeTodoOnLocalStorage();
        }
    });

    li.appendChild(todoTitle);
    li.appendChild(deleteButton);

    collection.appendChild(li);
}

function storeTodoOnLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
