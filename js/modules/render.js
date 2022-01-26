
import {createRow} from './createElements.js';
import {tbody} from './elements.js';


export const renderTasks = data => {
  data.forEach((task, index) => {
    createRow(task, index + 1);
  });
};

export const tasksNumberChange = () => {
  const tasks = tbody.querySelectorAll('tr');
  tasks.forEach((item, index) => {
    item.cells[0].textContent = `${index + 1}`;
  });
};
