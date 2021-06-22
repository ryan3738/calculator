// Create a webpage with a 16x16 grid of square divs

const container = document.querySelector('#container')
const clearButton = document.querySelector('#clearButton')
const blackButton = document.querySelector('#blackButton')
const whiteButton = document.querySelector('#whiteButton')
const rainbowButton = document.querySelector('#rainbowButton')
const shadeButton = document.querySelector('#shadeButton')
const slider = document.querySelector('#gridSizeSlider')
const output = document.querySelector('#gridSizeValue')
let colorSelection = 'black'
let gridSize = slider.value

// Outputs
output.innerHTML = slider.value

// Turns all of the gridItems to white
const clearGrid = () => {
  const gridItems = container.querySelectorAll('div')
  gridItems.forEach((gridItem) => gridItem.removeAttribute('style'))
}

function changeColorSelection() {
  colorSelection = this.value
  console.log('colorSlection', colorSelection)
}

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor}`
}

// const shadeGrid = () => {

// }

function changeBackgroundColor() {
  if (colorSelection === 'black') {
    this.style.backgroundColor = 'black'
  }
  if (colorSelection === 'white') {
    this.style.backgroundColor = 'white'
  }
  if (colorSelection === 'rainbow') {
    this.style.backgroundColor = getRandomColor()
  }
  if (colorSelection === 'shade') {
    console.log('this.style.opacity', this.style.opacity)
    const currentOpacity = Number(this.style.opacity)
    console.log('Currenty Opacity', currentOpacity)
    if (this.style.opacity === '') {
      this.style.opacity = '0.9'
    }
    if (currentOpacity !== '' && currentOpacity > 0) {
      console.log(`${currentOpacity + 0.1}`)
      this.style.opacity = `${currentOpacity - 0.1}`
    }

    // this.style.backgroundColor = getRandomColor()
  }
}

// Remove the old grid
function removeGrid() {
  console.log('Removing the grid...')
  const oldGrid = container.querySelectorAll('div')
  oldGrid.forEach((gridItem) => gridItem.remove())
}

// Make the new grid
function makeGrid() {
  const gridArea = gridSize * gridSize
  document.documentElement.style.setProperty('--grid-size', gridSize)

  for (let i = 0; i < gridArea; i += 1) {
    const grid = document.createElement('div')
    grid.id = i
    grid.className = 'gridItem'
    grid.addEventListener('mouseover', changeBackgroundColor)
    container.appendChild(grid)
  }
}

// Change the grid size
function changeGridSize() {
  output.innerHTML = this.value
  gridSize = this.value
  removeGrid()
  makeGrid()
}

// Make the intial grid
// window.onload = makeGrid
makeGrid()

clearButton.addEventListener('click', clearGrid)
blackButton.addEventListener('click', changeColorSelection)
whiteButton.addEventListener('click', changeColorSelection)
rainbowButton.addEventListener('click', changeColorSelection)
shadeButton.addEventListener('click', changeColorSelection)
slider.addEventListener('mouseup', changeGridSize)
slider.addEventListener('mouseup', changeGridSize)
