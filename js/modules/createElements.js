import {tbody} from './elements.js';

export const createRow = (newTask, number) => {
  const tr = document.createElement('tr');
  const tdNumber = document.createElement('td');
  const tdTask = document.createElement('td');
  const tdStatus = document.createElement('td');
  const btnGroup = document.createElement('td');
  if (newTask.status === 'active') {
    if (newTask.important === 'Обычная') {
      tr.classList.add('table-light');
    } else if (newTask.important === 'Важная') {
      tr.classList.add('table-warning');
    } else if (newTask.important === 'Срочная') {
      tr.classList.add('table-danger');
    }
    tdTask.classList.add('task');
    tdStatus.textContent = 'В процессе';
  } else {
    tr.classList.add('table-success');
    if (tr.classList.contains('table-light', 'table-warning', 'table-danger')) {
      tr.classList.remove('table-light', 'table-warning', 'table-danger');
    }
    tdTask.classList.add('task', 'text-decoration-line-through');
    tdStatus.textContent = 'Выполнена';
  }
  tdNumber.textContent = number;
  tdTask.textContent = newTask.task;
  tdTask.contentEditable = 'false';
  btnGroup.insertAdjacentHTML('afterbegin', `
    <button class="btn btn-danger">
      Удалить
    </button>
    <button class="btn btn-success">
      Завершить
    </button>
    <button class="btn btn-warning btn-edit">
      Редактировать
    </button>
  `);

  tr.append(tdNumber, tdTask, tdStatus, btnGroup);
  tbody.append(tr);
};


