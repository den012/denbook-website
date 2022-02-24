const textEl = document.getElementById('text')

const text = "Work in progress..."
let index = 1
let speed = 300 / 1

writeText()

function writeText(){
    textEl.innerText = text.slice(0,index)
    index++

    if(index > text.length)
    {
        index = 1
    }

    setTimeout(writeText, speed)
}