// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

function filterList(array) {
  return array.filter(e => {
    return typeof e === 'number'
  })
}

console.log(filterList([1, 2, 'a', 'b']));
console.log(filterList([1, 'a', 'b', 0, 15]));
console.log(filterList([1, 2, 'aasf', '1', '123', 123]));