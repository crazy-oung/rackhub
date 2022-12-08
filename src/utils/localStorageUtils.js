export const setLocalStorageValue = (key, value) => {
  let val = JSON.stringify(value);
  localStorage.setItem(key, val);
};

export const getLocalStorageValue = (key) => {
  let val = localStorage.getItem(key);
  return JSON.parse(val);
};

export const removeLocalStorageValue = (key) => {
  localStorage.removeItem(key);
};
