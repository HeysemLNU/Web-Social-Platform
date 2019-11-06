const appOpen = document.querySelector('#applicationOpen')
const memoryButton = document.querySelector('#buttonMemory')
const chatButton = document.querySelector('#buttonChat')
const randomButton = document.querySelector('#buttonRandom')

const createNewWindow = function () {
  const newWindow = document.createElement('div')
  newWindow.setAttribute('class', 'window')
  const closeButton = document.createElement('button')
  closeButton.setAttribute('type', 'button')
  closeButton.setAttribute('id', 'closeButtonWindow')
  closeButton.textContent = 'close'
  newWindow.appendChild(closeButton)
  return newWindow
}
// App Window

// Functions

const dragFunct = function (toBeDraged) {
  let isDragable = false
  let mouseCurrentPosX = 0
  let mouseCurrentPosY = 0
  const mouseMoveFunc = function (e) {
    if (isDragable) {
      const theDifferanceX = mouseCurrentPosX - e.clientX
      const theDifferanceY = mouseCurrentPosY - e.clientY
      const divsPosition = toBeDraged.getBoundingClientRect()
      console.log('Read this: ' + (divsPosition.left - theDifferanceX))
      console.log('Read this2: ' + (divsPosition.top - theDifferanceY))
      console.log((divsPosition.left - theDifferanceX) + 'px')
      console.log((divsPosition.top - theDifferanceY) + 'px')
      toBeDraged.style.left = (divsPosition.left - theDifferanceX) + 'px'
      toBeDraged.style.top = (divsPosition.top - theDifferanceY) + 'px'
      mouseCurrentPosX = e.clientX
      mouseCurrentPosY = e.clientY

      console.log('The current position is for X while move  ' + e.clientX)
      console.log('The current position is for Y while move ' + e.clientY)
      console.log('The poss differance for x ' + theDifferanceY)
      console.log('The poss differance for y ' + theDifferanceX)
    }
  }

  toBeDraged.addEventListener('mousedown', (e) => {
    mouseCurrentPosX = e.clientX
    mouseCurrentPosY = e.clientY
    isDragable = true
  })
  window.addEventListener('mousemove', (e) => {
    mouseMoveFunc(e)
  })
  window.addEventListener('mouseup', () => {
    isDragable = false
    window.removeEventListener('mousemove', mouseMoveFunc)
  })
}
const memoryButtonClicked = function () {
  let memoGameWindAmount = 0
  memoryButton.addEventListener('click', () => {
    memoGameWindAmount++
    const newMemoryWindow = createNewWindow()
    newMemoryWindow.setAttribute('id', memoGameWindAmount)
    console.log('the id of the window is: ' + newMemoryWindow.id)
    appOpen.appendChild(newMemoryWindow)
    // const toRemove = memoGameWindAmount--
    dragFunct(newMemoryWindow)

    newMemoryWindow.firstChild.addEventListener('click', () => {
      for (let i = 0; appOpen.childNodes.length; i++) {
        if (appOpen.childNodes[i].id === newMemoryWindow.id) {
          appOpen.removeChild(appOpen.childNodes[i])
        }
      }
      // memoGameWindAmount--
    })
    console.log(memoGameWindAmount)
    console.log('there are this many elements :' + appOpen.childNodes.length)
  })
}
const mainFunc = function () {
  memoryButtonClicked()
}
mainFunc()
