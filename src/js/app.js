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
// function for the memory game
const insertImage = function () {
  const memoryGameIconOne = document.createElement('img')
  memoryGameIconOne.id = 'fotoOne'
  memoryGameIconOne.setAttribute('class', 'memoryGamePics1')
  memoryGameIconOne.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconTwo = document.createElement('img')
  memoryGameIconTwo.id = 'fotoTwo'
  memoryGameIconTwo.setAttribute('class', 'memoryGamePics2')
  memoryGameIconTwo.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconThree = document.createElement('img')
  memoryGameIconThree.id = 'fotoThree'
  memoryGameIconThree.setAttribute('class', 'memoryGamePics3')
  memoryGameIconThree.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconFour = document.createElement('img')
  memoryGameIconFour.id = 'fotoFour'
  memoryGameIconFour.setAttribute('class', 'memoryGamePics4')
  memoryGameIconFour.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconFive = document.createElement('img')
  memoryGameIconFive.id = 'fotoFive'
  memoryGameIconFive.setAttribute('class', 'memoryGamePics5')
  memoryGameIconFive.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconSix = document.createElement('img')
  memoryGameIconSix.id = 'fotoSix'
  memoryGameIconSix.setAttribute('class', 'memoryGamePics6')
  memoryGameIconSix.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconOneEx = document.createElement('img')
  memoryGameIconOneEx.id = 'fotoOneEx'
  memoryGameIconOneEx.setAttribute('class', 'memoryGamePics1')
  memoryGameIconOneEx.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconTwoEx = document.createElement('img')
  memoryGameIconTwoEx.id = 'fotoTwoEx'
  memoryGameIconTwoEx.setAttribute('class', 'memoryGamePics2')
  memoryGameIconTwoEx.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconThreeEx = document.createElement('img')
  memoryGameIconThreeEx.id = 'fotoThreeEx'
  memoryGameIconThreeEx.setAttribute('class', 'memoryGamePics3')
  memoryGameIconThreeEx.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconFourEx = document.createElement('img')
  memoryGameIconFourEx.id = 'fotoFourEx'
  memoryGameIconFourEx.setAttribute('class', 'memoryGamePics4')
  memoryGameIconFourEx.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconFiveEx = document.createElement('img')
  memoryGameIconFiveEx.id = 'fotoFiveEx'
  memoryGameIconFiveEx.setAttribute('class', 'memoryGamePics5')
  memoryGameIconFiveEx.setAttribute('src', 'memoryGameImage/questionMark.png')
  const memoryGameIconSixEx = document.createElement('img')
  memoryGameIconSixEx.id = 'fotoSixEx'
  memoryGameIconSixEx.setAttribute('class', 'memoryGamePics6')
  memoryGameIconSixEx.setAttribute('src', 'memoryGameImage/questionMark.png')

  const allTheImagesArray = []

  // console.log(memoryGameIconOne.className) printing in classes do work which is good
  // The top is goinmg to be in another

  allTheImagesArray.push(memoryGameIconOne)
  allTheImagesArray.push(memoryGameIconTwo)
  allTheImagesArray.push(memoryGameIconThree)
  allTheImagesArray.push(memoryGameIconFour)
  allTheImagesArray.push(memoryGameIconFive)
  allTheImagesArray.push(memoryGameIconSix)
  allTheImagesArray.push(memoryGameIconOneEx)
  allTheImagesArray.push(memoryGameIconTwoEx)
  allTheImagesArray.push(memoryGameIconThreeEx)
  allTheImagesArray.push(memoryGameIconFourEx)
  allTheImagesArray.push(memoryGameIconFiveEx)
  allTheImagesArray.push(memoryGameIconSixEx)

  console.log(allTheImagesArray.length)
  return allTheImagesArray
}
const memoryGameChangePicks = function (gameImageArray, gameWindowToAppend) {
  let previousImageSelected = false
  let classNameOfThePrevious = null
  let idOfThePrevious = null
  let memoGameTries = 0
  let pairsFound = 0
  let imageOnePpermision = true
  let imageTwopermision = true
  let imageThreepermision = true
  let imageFourpermision = true
  let imageFivepermision = true
  let imageSixpermision = true

  for (let i = 0; i < gameImageArray.length; i++) {
    gameImageArray[i].addEventListener('click', () => {
      if (gameImageArray[i].className === 'memoryGamePics1') {
        if (imageOnePpermision === true) {
          console.log('Is anything selected: ' + previousImageSelected)
          
          setTimeout(() => { gameImageArray[i].setAttribute('src', 'memoryGameImage/questionMark.png') }, 1000)
          gameImageArray[i].setAttribute('src', 'memoryGameImage/img1.jpg')
          if (previousImageSelected === true) {
            console.log('Second Image is about to be selected')
            console.log('Checking if the first one was a match to IMG1')
            if (classNameOfThePrevious === gameImageArray[i].className && idOfThePrevious !== gameImageArray[i].id) {
              console.log('first one was a match to IMG1')
              for (let z = 0; z < gameImageArray.length; z++) {
                console.log('Going in a loop to find IMG1 in an array')
                if (gameImageArray[z].className === classNameOfThePrevious) {
                  console.log('Found it disable clicking and turn the image to Thumbs up in 2 secs')
                  imageOnePpermision = false
                  setTimeout(() => { gameImageArray[z].setAttribute('src', 'memoryGameImage/match.png')
                  idOfThePrevious = null
                  classNameOfThePrevious = null
                  previousImageSelected = false
                }, 1000)
                }
              }
              pairsFound++
            } else {
              console.log('first one was not a match to IMG1')
              idOfThePrevious = null
              classNameOfThePrevious = null
              previousImageSelected = false
              memoGameTries++
            }
          } else {
            console.log('First Image is about to be selected')
            idOfThePrevious = gameImageArray[i].id
            classNameOfThePrevious = gameImageArray[i].className
            previousImageSelected = true
            console.log('First Image Has been selected as IMG1')
          }
          memoGameTries++
        }
      } else if (gameImageArray[i].className === 'memoryGamePics2') {
        if (imageTwopermision === true) {
          setTimeout(() => { gameImageArray[i].setAttribute('src', 'memoryGameImage/questionMark.png') }, 1000)
          gameImageArray[i].setAttribute('src', 'memoryGameImage/img2.jpg')
          if (previousImageSelected === true) {
            if (classNameOfThePrevious === gameImageArray[i].className && idOfThePrevious !== gameImageArray[i].id) {
              for (let z = 0; z < gameImageArray.length; z++) {
                if (gameImageArray[z].className === classNameOfThePrevious) {
                  imageTwopermision = false
                  setTimeout(() => { gameImageArray[z].setAttribute('src', 'memoryGameImage/match.png')
                  idOfThePrevious = null
                  classNameOfThePrevious = null
                  previousImageSelected = false
                }, 1000)
              
                }
              }
              pairsFound++
            } else {
              previousImageSelected = false
              memoGameTries++
              idOfThePrevious = null
              classNameOfThePrevious = null
              previousImageSelected = false
            }
          } else {
            idOfThePrevious = gameImageArray[i].id
            classNameOfThePrevious = gameImageArray[i].className
            previousImageSelected = true
          }
          memoGameTries++
        }
      } else if (gameImageArray[i].className === 'memoryGamePics3') {
        if (imageThreepermision === true) {
          setTimeout(() => { gameImageArray[i].setAttribute('src', 'memoryGameImage/questionMark.png') }, 2000)
          gameImageArray[i].setAttribute('src', 'memoryGameImage/img3.jpg')
        }
      } else if (gameImageArray[i].className === 'memoryGamePics4') {
        if (imageFourpermision === true) {
          setTimeout(() => { gameImageArray[i].setAttribute('src', 'memoryGameImage/questionMark.png') }, 2000)
          gameImageArray[i].setAttribute('src', 'memoryGameImage/img4.jpg')
        }
      } else if (gameImageArray[i].className === 'memoryGamePics5') {
        if (imageFivepermision === true) {
          setTimeout(() => { gameImageArray[i].setAttribute('src', 'memoryGameImage/questionMark.png') }, 2000)
          gameImageArray[i].setAttribute('src', 'memoryGameImage/img5.jpg')
        }
      } else if (gameImageArray[i].className === 'memoryGamePics6') {
        if (imageSixpermision === true) {
          setTimeout(() => { gameImageArray[i].setAttribute('src', 'memoryGameImage/questionMark.png') }, 2000)
          gameImageArray[i].setAttribute('src', 'memoryGameImage/img6.jpg')
        }
      }
    })
  }
  const containerPics = document.createElement('div')
  containerPics.setAttribute('class', 'picContainer')
  for (let i = 0; i < gameImageArray.length; i++) {
    containerPics.appendChild(gameImageArray[i])
  }
  gameWindowToAppend.appendChild(containerPics)
}

const makeItMainWindow = function (clickedWindow) {
  clickedWindow.addEventListener('click', () => {
    for (let i = 0; appOpen.childNodes.length - 1; i++) {
      if (appOpen.childNodes[i].id === clickedWindow.id) {
        appOpen.insertBefore(appOpen.childNodes[i], appOpen.lastChild.nextSibling)
        break
      }
    }
  })
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
    memoryGameChangePicks(insertImage(), newMemoryWindow)
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
  })
}
const mainFunc = function () {
  memoryButtonClicked()
}
mainFunc()
