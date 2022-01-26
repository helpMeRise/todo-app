
export const getStorage = key => {
  if (localStorage.getItem(key) === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const setStorage = (login, task) => {
  const data = getStorage(login);
  localStorage.setItem(login, task);
  data.push(JSON.parse(localStorage.getItem(login)));
  localStorage.setItem(login, JSON.stringify(data));
};
