const appOpen = document.querySelector('#applicationOpen')
const memoryButton = document.querySelector('#buttonMemory')
const chatButton = document.querySelector('#buttonChat')
const randomButton = document.querySelector('#buttonRandom')
let memoGameWindAmount = 0
// App Window
const newWindow = document.createElement('div')
//newWindow.setAttribute('draggable','true')
newWindow.setAttribute('id', 'window')
const closeButton = document.createElement('button')
closeButton.setAttribute('type', 'button')
closeButton.setAttribute('id', 'closeButtonWindow')
closeButton.textContent = 'close'
newWindow.appendChild(closeButton)

// Functions
const dragFunct = function (toBeDraged){
  let isDragable = false
  let mouseCurrentPosX = 0
  let mouseCurrentPosY = 0
  const mouseMoveFunc = function (e){
    if(isDragable){
    let theDifferanceX = mouseCurrentPosX - e.clientX
    let theDifferanceY = mouseCurrentPosY - e.clientY
    const divsPosition = toBeDraged.getBoundingClientRect()
    console.log("Read this: " +  (divsPosition.left - theDifferanceX) )
    console.log("Read this2: " +  (divsPosition.top -theDifferanceY) )
    console.log((divsPosition.left - theDifferanceX)  + "px")
    console.log((divsPosition.top -theDifferanceY) + "px")
    toBeDraged.style.left = (divsPosition.left - theDifferanceX)  + 'px'
    toBeDraged.style.top = (divsPosition.top - theDifferanceY) + 'px'
    mouseCurrentPosX = e.clientX
    mouseCurrentPosY = e.clientY

   console.log('The current position is for X while move  '+e.clientX)
   console.log('The current position is for Y while move '+e.clientY)
   console.log('The poss differance for x '+theDifferanceY)
   console.log('The poss differance for y '+theDifferanceX)
    }
 }
  
  toBeDraged.addEventListener('mousedown',(e) => {
     mouseCurrentPosX = e.clientX
     mouseCurrentPosY = e.clientY
     isDragable = true
   
  })
  window.addEventListener('mousemove', (e) =>{
    mouseMoveFunc(e)
  })
  window.addEventListener('mouseup',() => {
    isDragable = false
    window.removeEventListener('mousemove',mouseMoveFunc)
  })
}
const memoryButtonClicked = function () {
  const newMemoryWindow = newWindow
  memoryButton.addEventListener('click', () => {
    appOpen.appendChild(newMemoryWindow)
    memoGameWindAmount++
    const positionObj = newMemoryWindow.getBoundingClientRect()
    console.log('your current position is: '+ positionObj.left)
    const toRemove = memoGameWindAmount--
    newMemoryWindow.firstChild.addEventListener('click', () => {
      appOpen.removeChild(appOpen.childNodes[toRemove])
      memoGameWindAmount--
    })
    console.log(memoGameWindAmount)
  })
  dragFunct(newMemoryWindow)
}
memoryButtonClicked()