import {login} from './authorization.js';
import {getStorage} from './storage.js';

export const taskSuccess = (task) => {
  task.classList.add('table-success');
  task.classList.remove('table-light');
  task.cells[0];
  task.cells[2].textContent = 'Выполнена';
  task.cells[1].classList.add('text-decoration-line-through');

  const data = getStorage(login);
  data.map(item => {
    if (item.task === task.cells[1].textContent) {
      item.status = 'done';
    }
  });
  localStorage.setItem(login, JSON.stringify(data));
};

export const taskRemove = (task, number) => {
  const data = getStorage(login);
  data.splice(number, 1);
  localStorage.setItem(login, JSON.stringify(data));
  task.remove();
};
