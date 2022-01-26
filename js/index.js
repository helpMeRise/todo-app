import {getStorage} from './modules/storage.js';
import {renderTasks} from './modules/render.js';
import {events} from './modules/events.js';
import {login} from './modules/authorization.js';

const data = [
];


const init = () => {
  renderTasks(getStorage(login));
  events(data);
};
init();


