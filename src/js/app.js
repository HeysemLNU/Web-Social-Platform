// This is the main class that applies the implementation.
import { chatButtonClicked } from './chat.js'
// chatButtonClicked takes in 2 variables one of them is the button which creates a new chat window, the other is the div which contains all the windows.
// chatButtonClicked adds an event listener to the button and once that is clicked the function creates a new chat window and adds the chat content and chat icon to that window
// Then newly created window is added to the div that contains all the windows.
import { gameButtonClicked } from './memory.js'
// gameButtonClicked takes in 2 variables one of them is the button which creates a new game window, the other is the div which contains all the windows.
// gameButtonClicked adds an event listener to the button and once that is clicked the function creastes a new game window and adds the game content, game icon and game options to that window.
// Then newly created window is added to the div that contains all the windows.
import { alarmButtonClicked } from './alarm.js'
// alarmButtonClicked takes in 2 variables one of them is the button which creates a new alarm window, the other is the div which contains all the windows.
// alarmButtonClicked adds an event listener to the button and once that is clicked the function creates a new alarm window and adds the alarm content and alarm icon to that window
// Then newly created window is added to the div that contains all the windows.
const appOpen = document.querySelector('#applicationOpen')
const memoryButton = document.querySelector('#buttonMemory')
const chatButton = document.querySelector('#buttonChat')
const randomButton = document.querySelector('#buttonRandom')

export const createNewWindow = function () {
  const newWindow = document.createElement('div')
  newWindow.setAttribute('class', 'window')
  const closeButton = document.createElement('button')
  closeButton.setAttribute('type', 'button')
  closeButton.setAttribute('id', 'closeButtonWindow')
  closeButton.textContent = 'close'
  newWindow.appendChild(closeButton)
  return newWindow
}

export const makeItMainWindow = function (clickedWindow) {
  clickedWindow.addEventListener('mousedown', () => {
    console.log('you are at make it main window')
    for (let i = 0; i < appOpen.childNodes.length - 1; i++) {
      if (appOpen.childNodes[i].id === clickedWindow.id) {
        appOpen.insertBefore(appOpen.childNodes[i], appOpen.lastChild.nextSibling)
        break
      }
    }
  })
}

export const dragFunct = function (toBeDraged) {
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
  })
}

const mainFunc = function () {
  gameButtonClicked(memoryButton, appOpen)
  chatButtonClicked(chatButton, appOpen)
  alarmButtonClicked(randomButton, appOpen)
}
mainFunc()
