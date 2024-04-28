const todoInput= document.querySelector('.input');
const colletion=document.querySelector('.colletion');
const todoform=document.querySelector('.todo-form');

todoform.addEventListener('submit',(e) => {
    e.preventDefault();
    let todoValue=todoInput.value;
    if (todoValue !=='');{
    addToDOM(todoValue);
    todoInput.value='';
}
});
function addToDOM(value){
    const li= document.createElement('li');
    const todoTitle = document.createElement('spam');
    const deleteButton= document.createElement('button');

    todoTitle.innerText= value;
    deleteButton=innerText= 'Borrar';

    li.classList.add('.colletion-item');

    
    deleteButton.addEventListener('click', (e) => {

    });

    li.appendChild(todoTitle);
    li.appendChild(deleteButton);

    colletion.appendChild(li);

}

