import {getStorage} from './modules/storage.js';
import {renderTasks} from './modules/render.js';
import {events} from './modules/events.js';
import {modalForm} from './modules/elements.js';

const data = [
];

const init = (login) => {
  renderTasks(getStorage(login));
  events(data, login);
};
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  const target = e.target;
  const formData = new FormData(target);
  const login = Object.fromEntries(formData).modalName;
  modalForm.parentElement.parentElement.style.display = 'none';
  init(login);
});
