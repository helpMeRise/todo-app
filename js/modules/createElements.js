import {tbody} from './elements.js';

export const createRow = (newTask, number) => {
  const tr = document.createElement('tr');
  const tdNumber = document.createElement('td');
  const tdTask = document.createElement('td');
  const tdStatus = document.createElement('td');
  const btnGroup = document.createElement('td');
  if (newTask.status === 'active') {
    tr.classList.add('table-light');
    tdTask.classList.add('task');
    tdStatus.textContent = 'В процессе';
  } else {
    tr.classList.add('table-success');
    tdTask.classList.add('task', 'text-decoration-line-through');
    tdStatus.textContent = 'Выполнена';
  }
  tdNumber.textContent = number;
  tdTask.textContent = newTask.task;
  btnGroup.insertAdjacentHTML('afterbegin', `
    <button class="btn btn-danger">
      Удалить
    </button>
    <button class="btn btn-success">
      Завершить
    </button>
  `);

  tr.append(tdNumber, tdTask, tdStatus, btnGroup);
  tbody.append(tr);
};


