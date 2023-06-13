export const getStorage = (key) => {
  const storage = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
  return storage;
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
