const calculator = require('./calculator')

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0)
  })

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4)
  })

  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8)
  })
})

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6)
  })
})

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8)
  })

  test.skip('multiplies several numbers', () => {
    expect(calculator.multiply([2, 4, 6, 8, 10, 12, 14])).toBe(645120)
  })
})

describe('power', () => {
  test('raises one number to the power of another number', () => {
    expect(calculator.power(4, 3)).toBe(64) // 4 to third power is 64
  })
})

describe('divide', () => {
  test('divide two numbers', () => {
    expect(calculator.divide(8, 2)).toBe(4)
  })

  test('divide by zero', () => {
    expect(calculator.divide(4, 0)).toBe('NO!')
  })
})
