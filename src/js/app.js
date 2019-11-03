const appOpen = document.querySelector('#applicationOpen')
const memoryButton = document.querySelector('#buttonMemory')
const chatButton = document.querySelector('#buttonChat')
const randomButton = document.querySelector('#buttonRandom')
const newWindow = document.createElement('div')
newWindow.setAttribute('id', 'window')
// Functions
const memoryButtonClicked = function () {
  memoryButton.addEventListener('click', () => {
    appOpen.appendChild(newWindow)
  })
}
memoryButtonClicked()
