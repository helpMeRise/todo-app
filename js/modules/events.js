import {createRow} from './createElements.js';
import {
  tbody,
  form,
  table,
  input,
} from './elements.js';
import {getStorage, setStorage} from './storage.js';
import {taskSuccess, taskRemove} from './tasksControl.js';
import {tasksNumberChange} from './render.js';
import {login} from './authorization.js';

export const events = (data) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    newTask.status = 'active';
    data.push(newTask);
    createRow(newTask, getStorage(login).length + 1);
    setStorage(login, JSON.stringify(newTask));
    form.reset();
    document.querySelector('.btn-primary').setAttribute('disabled', 'disabled');
  });
  document.querySelector('.btn-primary').setAttribute('disabled', 'disabled');
  input.addEventListener('input', e => {
    if (input.value === '') {
      document.querySelector('.btn-primary')
          .setAttribute('disabled', 'disabled');
    } else {
      document.querySelector('.btn-primary')
          .removeAttribute('disabled', 'disabled');
    }
  });
  table.addEventListener('click', e => {
    const target = e.target;
    const tasks = [...tbody.rows];
    if (target.closest('.btn-success')) {
      tasks.forEach(item => {
        if (target.closest('tr') === item) {
          taskSuccess(item);
        }
      });
    }
    if (target.closest('.btn-danger')) {
      tasks.forEach((item, index) => {
        if (target.closest('tr') === item) {
          taskRemove(item, index);
        }
      });
    }
    tasksNumberChange();
  });
};
