const addFrom = document.querySelector('.add');
const list = document.querySelector('.todos');


const geneateTemplate = (todo) => {

    const html = ` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;

}

addFrom.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addFrom.add.value.trim();

    if(todo.lenght ){
            geneateTemplate(todo);
            addFrom.reset();
    }



});