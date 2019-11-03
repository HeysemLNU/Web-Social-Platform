const appOpen = document.querySelector('#applicationOpen')
const memoryButton = document.querySelector('#buttonMemory')
const chatButton = document.querySelector('#buttonChat')
const randomButton = document.querySelector('#buttonRandom')
let memoGameWindAmount = 0
// App Window
const newWindow = document.createElement('div')
newWindow.setAttribute('id', 'window')
const closeButton = document.createElement('button')
closeButton.setAttribute('type', 'button')
closeButton.setAttribute('id', 'closeButtonWindow')
closeButton.textContent = 'close'
newWindow.appendChild(closeButton)

// Functions
const memoryButtonClicked = function () {
  memoryButton.addEventListener('click', () => {
    const newMemoryWindow = newWindow
    appOpen.appendChild(newMemoryWindow)
    memoGameWindAmount++
    const toRemove = memoGameWindAmount--
    newMemoryWindow.firstChild.addEventListener('click', () => {
      appOpen.removeChild(appOpen.childNodes[toRemove])
      memoGameWindAmount--
    })
    console.log(memoGameWindAmount)
  })
}
memoryButtonClicked()
