// This class implements the Memory Game app.
import { createNewWindow, dragFunct, makeItMainWindow } from './app.js'
// createNewWindow function returns a div which represents a window. It is a plain windows with only a close button, contents will be filled in this class.
// dragFuntion allows the window to be dragged.
// makeItMainWindow makes sure that the window clicked on is on top of all the other windows.
const turnSound = new Audio('sound/memo.mp3')
const mainFunc = function (row, cols, gameWindow) {
  let memoGameTries = 0
  let previousIMGSelected = false
  let imageOnePpermision = true
  let imageTwopermision = true
  let imageThreepermision = true
  let imageFourpermision = true
  let imageFivepermision = true
  let imageSixpermision = true
  let imageSevenpermision = true
  let imageEightpermision = true
  let classNaPrevious = null
  let idOfPrev = null
  const showTries = document.createElement('div')

  const arrayPics = []
  const containerPics = document.createElement('div')
  containerPics.setAttribute('class', 'picContainer')
  containerPics.setAttribute('id', 'container')
  let atag
  const imgTemplate = document.querySelectorAll('#applicationOpen template')[0]
  const allPics = packAndMix(row, cols)
  allPics.forEach(function (pic, index) {
    atag = document.importNode(imgTemplate.content.firstElementChild, true)
    atag.setAttribute('class', 'atag')
    atag.firstChild.setAttribute('class', 'memoryGamePics' + pic)
    atag.firstChild.setAttribute('id', index) // If not nesesary remove
    arrayPics.push(atag)
    atag.addEventListener('click', function (event) {
      const imgClicked = event.target.nodeName === 'IMG' ? event.target : event.target.firstChild
      const imgString = 'memoryGameImage/' + pic + '.jpg'
      let permisionCh = null
      if (imgClicked.className === 'memoryGamePics1') { permisionCh = imageOnePpermision } else if (imgClicked.className === 'memoryGamePics2') { permisionCh = imageTwopermision } else if (imgClicked.className === 'memoryGamePics3') { permisionCh = imageThreepermision } else if (imgClicked.className === 'memoryGamePics4') { permisionCh = imageFourpermision } else if (imgClicked.className === 'memoryGamePics5') { permisionCh = imageFivepermision } else if (imgClicked.className === 'memoryGamePics6') { permisionCh = imageSixpermision } else if (imgClicked.className === 'memoryGamePics7') { permisionCh = imageSevenpermision } else { permisionCh = imageEightpermision }
      if (permisionCh === true) { // WORK ON THIS
        memoGameTries++
        showTries.textContent = 'Tries: ' + memoGameTries
        setTimeout(() => { imgClicked.setAttribute('src', 'memoryGameImage/0.png') }, 1000)
        turnSound.play()
        imgClicked.setAttribute('src', imgString)
        if (previousIMGSelected === true) {
          console.log('Is there permision to countinue 2:  ' + previousIMGSelected)
          if (classNaPrevious === imgClicked.className && idOfPrev !== imgClicked.id) {
            console.log('In bthis care they had same class but different id')
            for (let z = 0; z < arrayPics.length; z++) {
              console.log('Printing class name pls sir; ' + arrayPics[z].firstChild.className)
              if (arrayPics[z].firstChild.className === classNaPrevious) {
                console.log('Found with same class name to change the picture')
                console.log(imgClicked.className)
                if (imgClicked.className === 'memoryGamePics1') { imageOnePpermision = false } else if (imgClicked.className === 'memoryGamePics2') { imageTwopermision = false } else if (imgClicked.className === 'memoryGamePics3') { imageThreepermision = false } else if (imgClicked.className === 'memoryGamePics4') { imageFourpermision = false } else if (imgClicked.className === 'memoryGamePics5') { imageFivepermision = false } else if (imgClicked.className === 'memoryGamePics6') { imageSixpermision = false } else if (imgClicked.className === 'memoryGamePics7') { imageSevenpermision = false } else { imageEightpermision = false }
                setTimeout(() => {
                  console.log('THIS IS IMPORTANT FAM')
                  arrayPics[z].firstChild.setAttribute('src', 'memoryGameImage/match.png')
                  idOfPrev = null
                  classNaPrevious = null
                  previousIMGSelected = false
                }, 1000)
              }
            }
          } else {
            console.log('first one was not a match')
            idOfPrev = null
            classNaPrevious = null
            previousIMGSelected = false
          }
        } else {
          console.log('First Image is about to be selected')
          idOfPrev = imgClicked.id
          classNaPrevious = imgClicked.className
          previousIMGSelected = true
          console.log(previousIMGSelected)
          console.log('First Image Has been selected')
        }
      }
    })
  })
  for (let z = 0; z < arrayPics.length; z++) {
    containerPics.appendChild(arrayPics[z])
  }
  containerPics.appendChild(showTries)
  console.log(allPics.length)
  gameWindow.appendChild(containerPics)
}
const packAndMix = function (row, cols) {
  let i
  const intArray = []
  for (i = 1; i <= (row * cols) / 2; i++) {
    intArray.push(i)
    intArray.push(i)
  }
  for (let i = intArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tempor = intArray[i]
    intArray[i] = intArray[j]
    intArray[j] = tempor
  }
  return intArray
}

export const gameButtonClicked = function (gameButton, appMainWindow) {
  let gameWindAmount = 0
  gameButton.addEventListener('click', () => {
    gameWindAmount++
    const newMemoryWindowGame = createNewWindow()
    newMemoryWindowGame.setAttribute('id', gameWindAmount)
    console.log('the id of the window is: ' + newMemoryWindowGame.id)
    const memoIcon = document.createElement('img')
    memoIcon.setAttribute('src', 'icons/MemoGameIcon.png')
    memoIcon.setAttribute('class', 'icons')
    newMemoryWindowGame.appendChild(memoIcon)
    // Start
    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('id', 'buttonContainer')
    const twoTwoButton = document.createElement('button')
    twoTwoButton.textContent = '2X2'
    twoTwoButton.addEventListener('click', () => {
      console.log(newMemoryWindowGame)
      newMemoryWindowGame.removeChild(newMemoryWindowGame.childNodes[3])
      mainFunc(2, 2, newMemoryWindowGame)
    })
    const twoFourButton = document.createElement('button')
    twoFourButton.textContent = '2X4'
    twoFourButton.addEventListener('click', () => {
      console.log(newMemoryWindowGame)
      newMemoryWindowGame.removeChild(newMemoryWindowGame.childNodes[3])
      mainFunc(2, 4, newMemoryWindowGame)
    })
    const fourFourButton = document.createElement('button')
    fourFourButton.textContent = '4X4'
    fourFourButton.addEventListener('click', () => {
      console.log(newMemoryWindowGame)
      newMemoryWindowGame.removeChild(newMemoryWindowGame.childNodes[3])
      mainFunc(4, 4, newMemoryWindowGame)
    })
    buttonContainer.appendChild(twoTwoButton)
    buttonContainer.appendChild(twoFourButton)
    buttonContainer.appendChild(fourFourButton)
    newMemoryWindowGame.appendChild(buttonContainer)
    // End
    mainFunc(4, 4, newMemoryWindowGame)
    console.log(newMemoryWindowGame)

    appMainWindow.appendChild(newMemoryWindowGame)
    dragFunct(newMemoryWindowGame)
    makeItMainWindow(newMemoryWindowGame)
    newMemoryWindowGame.firstChild.addEventListener('click', () => {
      for (let i = 0; appMainWindow.childNodes.length; i++) {
        if (appMainWindow.childNodes[i].id === newMemoryWindowGame.id) {
          appMainWindow.removeChild(appMainWindow.childNodes[i])
        }
      }
    })
  })
}
