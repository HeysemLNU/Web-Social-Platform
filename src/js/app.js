import { chatButtonClicked } from './chat.js'
import { memoryButtonClickedTry } from './memory.js'
import { alarmButtonClicked } from './alarm.js'
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
// App Window

// Functions
// function for the memory game

export const makeItMainWindow = function (clickedWindow) {
  clickedWindow.addEventListener('click', () => {
    for (let i = 0; appOpen.childNodes.length - 1; i++) {
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
    window.removeEventListener('mousemove', mouseMoveFunc)
  })
}

const mainFunc = function () {
  memoryButtonClickedTry(memoryButton, appOpen)
  chatButtonClicked(chatButton, appOpen)
  alarmButtonClicked(randomButton, appOpen)
}
mainFunc()
