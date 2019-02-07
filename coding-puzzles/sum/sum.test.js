const sum = require('./sum')
test('function is defined', () => {
  expect(typeof sum).toEqual('function')
})

test('should ', () => {
  expect(sum(1, 3)).toBe(4)
})
test('should', () => {
  expect(sum(9, 19)).toBe(28)
})
test('should be equal', () => {
  expect(sum(9, 20)).toEqual(29)
})
test('should be equal to', () => {
  expect(sum(9, -9)).toEqual(0)
})

