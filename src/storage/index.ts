export const localStorage = () => {
  const add = (key: string, obj: Object) =>
    window.localStorage.setItem(key, JSON.stringify(obj));

  const remove = (key: string) => window.localStorage.removeItem(key);

  const find = (key: string) => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  };

  return { add, remove, find };
};
