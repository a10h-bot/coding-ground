const array = [4, 5, 8, 9, 7, 4, 6, 3];

const map = (collection, fn) => {
  return collection.reduce((acc, item) => {
    return acc.concat(fn(item));
  }, []);
};
const filter = (collection, fn) => {
  return collection.reduce((acc, item) => {
    if (fn(item)) {
      return acc.concat(item);
    }

    return acc;
  }, []);
};

console.log(map(array));
