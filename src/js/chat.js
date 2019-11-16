
import { createNewWindow, dragFunct, makeItMainWindow } from './app.js'
let nameIsGiven = false
let userNameChat = null
const keyForChat = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'

const messageManagement = function (theMainDiv) {
  // In here we create the web socket
  const webSock = new WebSocket('ws://vhost3.lnu.se:20080/socket/')
  //
  const nameUsedForChat = JSON.parse(localStorage.getItem(localStorage.key(0))).name
  const messageWindow = document.createElement('div')
  messageWindow.setAttribute('class', 'theMessageWindows')
  theMainDiv.appendChild(messageWindow)
  const areaToTypeMessage = document.createElement('textarea')
  areaToTypeMessage.setAttribute('class', 'chatInputArea')
  areaToTypeMessage.setAttribute('rows', '5')
  theMainDiv.appendChild(areaToTypeMessage)
  const messageSendButton = document.createElement('input')
  messageSendButton.setAttribute('value', 'Send')
  messageSendButton.setAttribute('type', 'submit')
  messageSendButton.addEventListener('click', () => {
    const theMessage = {
      type: 'message',
      data: areaToTypeMessage.value,
      username: nameUsedForChat,
      key: keyForChat
    }
    webSock.send(JSON.stringify(theMessage))
    areaToTypeMessage.value = ''
  })
  theMainDiv.appendChild(messageSendButton)
  webSock.onmessage = function (event) {
    const timeStamp = new Date()
    const theObjRecieved = JSON.parse(event.data)
    if (theObjRecieved.type !== 'heartbeat') {
      const putTimeStamp = '(' + timeStamp.getFullYear() + '-' + timeStamp.getMonth() + '-' + timeStamp.getDay() + '{' + timeStamp.getHours() + ':' + timeStamp.getMinutes() + '}' + ')'
      console.log(putTimeStamp)
      const theMessageDiv = document.createElement('div')
      theMessageDiv.textContent = theObjRecieved.username + ':   ' + theObjRecieved.data + '      ' + putTimeStamp
      messageWindow.appendChild(theMessageDiv)
      messageWindow.insertBefore(theMessageDiv, messageWindow.firstChild)
    }
  }
}
const chatApplication = function (windowToBeAplied) {
  const mainDiv = document.createElement('div')
  mainDiv.setAttribute('id', 'chatMainDiv')
  if (nameIsGiven === false) {
    const questionText = document.createElement('div')
    questionText.textContent = 'Please Write Your Username'
    mainDiv.appendChild(questionText)
    const typeArea = document.createElement('textarea')
    typeArea.setAttribute('class', 'chatInputArea')
    typeArea.setAttribute('rows', '1')
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
      nameIsGiven = true
      chatApplication(windowToBeAplied)
    })
    mainDiv.appendChild(submitButton)
  } else {
    messageManagement(mainDiv)
    console.log('Well done TO me')
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
    chatApplication(newMemoryWindowChat)
    appMainWindow.appendChild(newMemoryWindowChat)
    dragFunct(newMemoryWindowChat)
    makeItMainWindow(newMemoryWindowChat)
    newMemoryWindowChat.firstChild.addEventListener('click', () => {
      for (let i = 0; appMainWindow.childNodes.length; i++) {
        if (appMainWindow.childNodes[i].id === newMemoryWindowChat.id) {
          appMainWindow.removeChild(appMainWindow.childNodes[i])
        }
      }
    })
  })
}
