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
const makeItMainWindow = function (clickedWindow) {
  console.log('--------We Start-------------------')
  clickedWindow.addEventListener('click', () => {
    console.log('The window has been clicked')
    console.log('This many elements in the PWD ' + appOpen.childNodes.length)
    for (let i = 0; appOpen.childNodes.length - 1; i++) {
      console.log('The i currently is: ' + i)
      if (appOpen.childNodes[i].id === clickedWindow.id) {
        appOpen.insertBefore(appOpen.childNodes[i], appOpen.lastChild.nextSibling)
        console.log('The i inside the itteration currently is: ' + i)
        console.log('Inside the if statement ')
        break
      }
      console.log('Inside the for loope')
    }
    console.log('Show moved from iteratiobn')
  })
  console.log('Show not even clicked')
  console.log('--------We end-------------------')
}

const dragFunct = function (toBeDraged) {
  let isDragable = false
  let mouseCurrentPosX = 0
  let mouseCurrentPosY = 0
  const mouseMoveFunc = function (e) {
    if (isDragable) {
      const theDifferanceX = mouseCurrentPosX - e.clientX
      const theDifferanceY = mouseCurrentPosY - e.clientY
      const divsPosition = toBeDraged.getBoundingClientRect()
      toBeDraged.style.left = (divsPosition.left - theDifferanceX) + 'px'
      toBeDraged.style.top = (divsPosition.top - theDifferanceY) + 'px'
      mouseCurrentPosX = e.clientX
      mouseCurrentPosY = e.clientY
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
    dragFunct(newMemoryWindow)
    makeItMainWindow(newMemoryWindow)

    newMemoryWindow.firstChild.addEventListener('click', () => {
      for (let i = 0; appOpen.childNodes.length; i++) {
        if (appOpen.childNodes[i].id === newMemoryWindow.id) {
          appOpen.removeChild(appOpen.childNodes[i])
        }
      }
    })
    console.log(memoGameWindAmount)
    console.log('there are this many elements :' + appOpen.childNodes.length)
  })
}
const mainFunc = function () {
  memoryButtonClicked()
}
mainFunc()
