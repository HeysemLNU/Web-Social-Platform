import { createNewWindow, dragFunct, makeItMainWindow } from './app.js'
const alarmSound = new Audio('sound/alarm.mp3')
const alarmSubFunc = function (theMainDiv, theHour, theMinute, theMessage) {
  let soundTheAlarm = true
  const showAlarm = document.createElement('div')
  const showAlarmTime = document.createElement('div')
  showAlarmTime.textContent = theHour + ' : ' + theMinute
  showAlarmTime.style.display = 'block'
  const showAlarmMessage = document.createElement('div')
  showAlarmMessage.textContent = theMessage
  const cancellAlarmButton = document.createElement('button')
  cancellAlarmButton.textContent = 'Cancell'
  cancellAlarmButton.addEventListener('click', () => {
    soundTheAlarm = false
  })
  showAlarm.appendChild(showAlarmTime)
  showAlarm.appendChild(showAlarmMessage)
  showAlarm.appendChild(cancellAlarmButton)
  const theTimer = setInterval(() => {
    if (soundTheAlarm === true) {
      const theCurrentTime = new Date()
      const theCurrentHour = '' + theCurrentTime.getHours()
      const theCurrentMin = '' + theCurrentTime.getMinutes()

      if (theCurrentHour === theHour && theCurrentMin === theMinute) {
        while (theMainDiv.firstChild) {
          theMainDiv.removeChild(theMainDiv.firstChild)
        }
        const alarmON = document.createElement('div')
        alarmON.setAttribute('class', 'alarmText')
        alarmON.textContent = 'Alarm!!!!'
        theMainDiv.appendChild(alarmON)
        alarmSound.play()
        clearInterval(theTimer)
      } else {

      }
    } else {
      while (theMainDiv.firstChild) {
        theMainDiv.removeChild(theMainDiv.firstChild)
      }
      const alarmCanNotf = document.createElement('div')
      alarmCanNotf.setAttribute('class', 'alarmText')
      alarmCanNotf.textContent = 'Alarm Cancelled'
      theMainDiv.appendChild(alarmCanNotf)
      clearInterval(theTimer)
      console.log('Interval cleared')
    }
  }, 1000)
  theMainDiv.appendChild(showAlarm)
}
const alarmMainFunc = function (mainWindow) {
  let hourAlarm = null
  let minuteAlarm = null
  let messageAlarm = null
  const mainDiv = document.createElement('div')
  const setUpMessage = document.createElement('div')
  setUpMessage.textContent = 'Fill in to set up an Alarm. You must give proper input else it wont work'
  setUpMessage.setAttribute('id', 'alarmWarning')
  mainDiv.appendChild(setUpMessage)
  const formForTime = document.createElement('div')
  formForTime.setAttribute('id', 'alarmForm')
  const filInHour = document.createElement('input')
  filInHour.setAttribute('value', 'hour')
  filInHour.style.display = 'block'
  formForTime.appendChild(filInHour)
  const filInMinutes = document.createElement('input')
  filInMinutes.setAttribute('value', 'minute')
  filInMinutes.style.display = 'block'
  formForTime.appendChild(filInMinutes)
  const filInMessage = document.createElement('input')
  filInMessage.setAttribute('value', 'message')
  filInMessage.style.display = 'block'
  formForTime.appendChild(filInMessage)
  const setAlarmButton = document.createElement('input')
  setAlarmButton.setAttribute('id', 'setAlarmButton')
  setAlarmButton.setAttribute('value', 'Set')
  setAlarmButton.setAttribute('type', 'submit')
  setAlarmButton.addEventListener('click', () => {
    while (mainDiv.firstChild) {
      mainDiv.removeChild(mainDiv.firstChild)
    }
    hourAlarm = filInHour.value
    minuteAlarm = filInMinutes.value
    messageAlarm = filInMessage.value
    alarmSubFunc(mainDiv, hourAlarm, minuteAlarm, messageAlarm)
    console.log(hourAlarm)
  })
  formForTime.appendChild(setAlarmButton)
  mainDiv.appendChild(formForTime)
  mainWindow.appendChild(mainDiv)
}

export const alarmButtonClicked = function (allarmButton, appMainWindow) {
  let alarmWindAmount = 2000
  allarmButton.addEventListener('click', () => {
    alarmWindAmount++
    const newMemoryWindowAlarm = createNewWindow()
    newMemoryWindowAlarm.setAttribute('id', alarmWindAmount)
    console.log('the id of the window is: ' + newMemoryWindowAlarm.id)
    alarmMainFunc(newMemoryWindowAlarm)
    const alarmIcon = document.createElement('img')
    alarmIcon.setAttribute('src', 'icons/AlarmIcon.png')
    alarmIcon.setAttribute('class', 'icons')
    newMemoryWindowAlarm.appendChild(alarmIcon)
    appMainWindow.appendChild(newMemoryWindowAlarm)
    dragFunct(newMemoryWindowAlarm)
    makeItMainWindow(newMemoryWindowAlarm)
    newMemoryWindowAlarm.firstChild.addEventListener('click', () => {
      alarmSound.pause()
      for (let i = 0; appMainWindow.childNodes.length; i++) {
        if (appMainWindow.childNodes[i].id === newMemoryWindowAlarm.id) {
          appMainWindow.removeChild(appMainWindow.childNodes[i])
        }
      }
    })
  })
}
