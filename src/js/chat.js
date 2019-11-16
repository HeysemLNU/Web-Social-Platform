
import { createNewWindow, dragFunct, makeItMainWindow } from './app.js'
const nameIsGiven = false
let userNameChat = null

const chatApplication = function (windowToBeAplied) {
  const mainDiv = document.createElement('div')
  if (nameIsGiven === false) {
    const questionText = document.createElement('div')
    questionText.textContent = 'Please Write Your Username'
    mainDiv.appendChild(questionText)
    const typeArea = document.createElement('input')
    typeArea.setAttribute('type', 'text')
    mainDiv.appendChild(typeArea)
    const submitButton = document.createElement('input')
    submitButton.setAttribute('value', 'Send')
    submitButton.setAttribute('type', 'submit')
    submitButton.addEventListener('click', () => {
      userNameChat = typeArea.value
      const saveCache = {
        name: userNameChat
      }
      localStorage.setItem('UserName', JSON.stringify(saveCache))
      while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild)
      }
    })
    mainDiv.appendChild(submitButton)
  }
  windowToBeAplied.appendChild(mainDiv)
}
export const chatButtonClicked = function (chattButtonEx, appMainWindow) {
  let chatWindAmount = 1000
  chattButtonEx.addEventListener('click', () => {
    chatWindAmount++
    const newMemoryWindowChat = createNewWindow()
    newMemoryWindowChat.setAttribute('id', chatWindAmount)
    console.log('the id of the window is: ' + newMemoryWindowChat.id)
    dragFunct(newMemoryWindowChat)
    makeItMainWindow(newMemoryWindowChat)
    chatApplication(newMemoryWindowChat)
    appMainWindow.appendChild(newMemoryWindowChat)
    newMemoryWindowChat.firstChild.addEventListener('click', () => {
      for (let i = 0; appMainWindow.childNodes.length; i++) {
        if (appMainWindow.childNodes[i].id === newMemoryWindowChat.id) {
          appMainWindow.removeChild(appMainWindow.childNodes[i])
        }
      }
    })
  })
}
