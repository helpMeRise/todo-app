import {createApp} from './createApp.js';
import {overlay} from './modal.js';

export const tbody = createApp();
export const modal = overlay();
export const modalForm = modal.querySelector('.modal-form');
export const form = document.querySelector('form');
export const table = document.querySelector('table');
export const input = document.querySelector('.form-control');
