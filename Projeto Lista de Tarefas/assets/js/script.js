const form = document.querySelector('#form');
const input = document.querySelector('#input');
const tarefasUl = document.querySelector('#tarefas');

const tarefas = JSON.parse(localStorage.getItem('tarefas'));

if (tarefas) {
    tarefas.forEach((tarefa) => {
        addTarefa(tarefa);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTarefa();
});

function addTarefa(tarefa) {
    let tarefaTxt = input.value;

    if(tarefa) {
        tarefaTxt = tarefa.text;
    }

    if(tarefaTxt) {
        const tarefaEl = document.createElement('li');
        if (tarefa && tarefa.concluido) {
            tarefaEl.classList.add('concluido');
        }

        tarefaEl.innerHTML = tarefaTxt;

        tarefaEl.addEventListener('click', () => {
            tarefaEl.classList.toggle('concluido');
            attLocalStorage();
        });

        tarefaEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            tarefaEl.remove();
            attLocalStorage();
        });

        tarefasUl.appendChild(tarefaEl);
        input.value = '';
        attLocalStorage();
    }
}

function attLocalStorage() {
    const tarefasEl = document.querySelectorAll('li');

    const tarefas = [];

    tarefasEl.forEach((tarefaEl) => {
        tarefas.push({
            text: tarefaEl.innerHTML,
            concluido: tarefaEl.classList.contains('concluido'),
        });
    });

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}