//querySelector() Devuelve el primer elemento del documento 

const addForm = document.querySelector('.add');
 //al agregaron un valor el metodo trim permite eliminarlo

	
const newToDo = addForm.add.value.trim();
//bloque de codigo que genera una nueva lista

const list = document.querySelector('.to-dos');
const generateTemplate = toDo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newToDo = addForm.add.value.trim();
    generateTemplate(newToDo);
});

// condicion que no permite elementos vacios
if(newToDo.length) {
    generateTemplate(newToDo);
    addForm.trim();
}
// condicion que resetea los valores de la lista
if(newToDo.length) {
    generateTemplate(newToDo);
    addForm.reset();
}
//evenyo click para eliminar 
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

