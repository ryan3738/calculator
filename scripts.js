const display = document.querySelector('#display')
const allClearButton = document.querySelector('#allClearButton')
const deleteButton = document.querySelector('#deleteButton')
const percentButton = document.querySelector('#percentButton')
const divideButton = document.querySelector('#divideButton')
const multiplyButton = document.querySelector('#multiplyButton')
const minusButton = document.querySelector('#minusButton')
const plusButton = document.querySelector('#plusButton')
const decimalButton = document.querySelector('#decimalButton')
const equalButton = document.querySelector('#equalButton')
const zeroButton = document.querySelector('#zeroButton')
const oneButton = document.querySelector('#oneButton')
const twoButton = document.querySelector('#twoButton')
const threeButton = document.querySelector('#threeButton')
const fourButton = document.querySelector('#fourButton')
const fiveButton = document.querySelector('#fiveButton')
const sixButton = document.querySelector('#sixButton')
const sevenButton = document.querySelector('#sevenButton')
const eightButton = document.querySelector('#eightButton')
const nineButton = document.querySelector('#nineButton')

const operand1 = [];
const operand2 = [];
const displayArray = [];
let result = null;
let operator = null;
const maxDisplayLength = 14;

//Create functions for each operator

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
    if (y === 0) {
        return 'NO!'
    }
    return Number(x) / Number(y)
}

const power = function (x, y) {
    return Number(x) ** Number(y)
}
const percent = function (x) {
    return Number(x) / 100
}

//Create function that populates display with buttons that are pressed
function updateDisplay(value) {
    displayArray.push(value)
    while (displayArray.length > maxDisplayLength) {
        displayArray.pop()
    }
    display.innerHTML = displayArray.join('')
}

function operateCleanup() {
    operand1.length = 0
    operand2.length = 0
    const resultArray = String(result).split('')
    operand1.push(...resultArray)
    operator = null
    displayArray.length = 0
    operand1.forEach((digit)=>{
        updateDisplay(digit)
    })
}

function operate(){
//do stuff
    if (operand1.length === 0 || operand2.length === 0 || operator === null){
    return
}
if (operator === '+'){
    result  = add(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
}
if (operator === '-'){
    result  = subtract(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
}
if (operator === '*'){
    result  = multiply(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
}
if (operator === '/'){
    result  = divide(operand1.join(''), operand2.join(''))
    operateCleanup()
    return
}
}

function makePercent() {
    if(operand1.length > 0){
        operator = this.value
        result = percent(operand1.join(''))
        operateCleanup()
    }
}

function makedelete() {

}

function addOperand() {
    if (operator !== null) {
        value = this.value
        operand2.push(value)
        updateDisplay(value)
        return
    }
    if (operator === null && result === null) {
        value=this.value
        operand1.push(value)
        updateDisplay(value)
        return
    }

}

function clearAll() {
    operand1.length = 0
    operand2.length = 0
    displayArray.length = 0
    result = null
    operator = null;
    display.innerHTML = displayArray.join('')
}

function addOperator() {
    if (operator !== null && operand2.length !== 0){
        operate()
        operator = this.value
        updateDisplay(operator)
        return
    }
    if (operator !== null){
        operator = this.value
        displayArray[displayArray.length - 1] = operator
        display.innerHTML = displayArray.join('')
        return

    }
    if(operator === null){
        operator = this.value
        updateDisplay(operator)
        return
    }
}

// display.addEventListener('click', )
allClearButton.addEventListener('click', clearAll)
// deleteButton.addEventListener('click', deleteOperand)
percentButton.addEventListener('click', makePercent)
divideButton.addEventListener('click', addOperator)
multiplyButton.addEventListener('click', addOperator)
subtractButton.addEventListener('click', addOperator)
addButton.addEventListener('click', addOperator)
decimalButton.addEventListener('click', addOperand)
equalButton.addEventListener('click', operate)
zeroButton.addEventListener('click', addOperand)
oneButton.addEventListener('click', addOperand)
twoButton.addEventListener('click', addOperand)
threeButton.addEventListener('click', addOperand)
fourButton.addEventListener('click', addOperand)
fiveButton.addEventListener('click', addOperand)
sixButton.addEventListener('click', addOperand)
sevenButton.addEventListener('click', addOperand)
eightButton.addEventListener('click', addOperand)
nineButton.addEventListener('click', addOperand)
