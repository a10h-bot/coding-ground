function doSomething(obj = { Name: 'Anand', hello: 'World!' }) {
  return obj['hello']
}
console.log(doSomething())