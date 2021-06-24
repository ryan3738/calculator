const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

const operand1 = []
const operand2 = []
const displayArray = []
const regOpertor = /^(\+|-|\*|\/|=|%)$/
const regNumber = /^[0-9]*$/
const regDecimal = /\./
const regNumpad = /Numpad/
let result = null
let operator = null
const maxDisplayLength = 14

// Create functions for each operator
const add = function (x, y) {
  return Number(x) + Number(y)
}

const subtract = function (x, y) {
  return Number(x) - Number(y)
}

const multiply = function (x, y) {
  return Number(x) * Number(y)
}
const divide = function (x, y) {
  if (Number(y) === 0) {
    return 'NO!'
  }
  return Number(x) / Number(y)
}

const percent = function (x) {
  return Number(x) / 100
}

// Create function that populates display with buttons that are pressed
function updateDisplay(value) {
  if (displayArray.length <= maxDisplayLength) {
    display.style.fontSize = '2.25rem'
  }
  if (displayArray.length > maxDisplayLength) {
    display.style.fontSize = '1.125rem'
  }
  if (value === undefined) {
    displayArray.pop()
    display.innerHTML = displayArray.join('')
    return
  }
  displayArray.push(value)
  display.innerHTML = displayArray.join('')
}

function operateCleanup() {
  operand1.length = 0
  operand2.length = 0
  const resultArray = String(result).split('')
  operand1.push(...resultArray)
  operator = null
  displayArray.length = 0
  operand1.forEach((digit) => {
    updateDisplay(digit)
  })
}

function operate() {
  // do stuff
  if (operand1.length === 0 || operand2.length === 0 || operator === null) {
    return
  }
  if (operator === '+') {
    result = add(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
  }
  if (operator === '-') {
    result = subtract(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
  }
  if (operator === '*') {
    result = multiply(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
  }
  if (operator === '/') {
    result = divide(operand1.join(''), operand2.join(''))
    operateCleanup()
  }
}

function makePercent() {
  if (operand1.length > 0) {
    operator = this.value
    result = percent(operand1.join(''))
    operateCleanup()
  }
}

function addOperand(value) {
  if (value === '=') {
    return
  }
  if (operator !== null) {
    if (value === 'Backspace') {
      operand2.pop()
      updateDisplay()
      return
    }
    operand2.push(value)
    updateDisplay(value)
    return
  }
  if (operator === null && result === null) {
    if (value === 'Backspace') {
      operand1.pop()
      updateDisplay()
      return
    }
    operand1.push(value)
    updateDisplay(value)
  }
}

function clearAll() {
  operand1.length = 0
  operand2.length = 0
  displayArray.length = 0
  result = null
  operator = null
  display.innerHTML = displayArray.join('')
}

function addOperator(value) {
  if (operator !== null && operand2.length !== 0) {
    operate()
    operator = value
    updateDisplay(operator)
    return
  }
  if (operator !== null) {
    operator = value
    displayArray[displayArray.length - 1] = operator
    display.innerHTML = displayArray.join('')
    return
  }
  if (operator === null) {
    operator = value
    updateDisplay(operator)
  }
}

function filterInput(value) {
  if (value === 'allClear' || value === 'Escape') {
    clearAll()
    return
  }
  if (value === '=' || value === 'Enter') {
    operate()
    return
  }
  if (value === 'Backspace') {
    addOperand(value)
    return
  }
  if (value === '%') {
    makePercent()
    return
  }
  if (value === '.') {
    if (regDecimal.test(displayArray)) {
      return
    }
    addOperand(value)
    return
  }
  if (regNumber.test(value)) {
    addOperand(value)
    return
  }
  if (regOpertor.test(value)) {
    addOperator(value)
  }
}

function filterEvent() {
  if (this.type === 'button') {
    filterInput(this.value)
  }
}

function filterKeyPress(value) {
  // const buttons = document.querySelectorAll('button')
  buttons.forEach((button) => button.blur())
  filterInput(value)
}

document.addEventListener(
  'keydown',
  (event) => {
    const name = event.key
    const { code } = event
    filterKeyPress(name)
    if (regNumpad.test(code)) {
      event.preventDefault()
    }
    // Console log the key name and key code on keydown
    // console.log(`Key pressed ${name} \r\n Key code value: 5${code}`)
  },
  false
)

// display.addEventListener('click', )
buttons.forEach((button) => button.addEventListener('click', filterEvent))
