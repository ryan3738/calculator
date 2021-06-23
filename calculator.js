const add = function (x, y) {
  return x + y
}

const subtract = function (x, y) {
  return x - y
}

const multiply = function (x, y) {
  return x * y
}
const divide = function (x, y) {
  if (y === 0) {
    return 'NO!'
  }
  return x / y
}

const power = function (x, y) {
  return x ** y
}

export { add, subtract, multiply, divide, power }
