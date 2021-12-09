let displayBox = document.querySelector(".zero-display")
let list = document.querySelectorAll(".show-display")
list.forEach(item => {
    item.addEventListener("click" , showDisplay)
})
function showDisplay(event) {
    let x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x
    }
    else {
        return displayBox.innerHTML += x
    }
}

document.querySelector(".all-clear").addEventListener("click",clearAll)

function clearAll() {
    displayBox.innerHTML = 0
}

document.querySelector(".clear").addEventListener("click", clearLast)
function clearLast() {
    if (displayBox.innerText.length == 1) {
        displayBox.innerHTML = 0
    }else {
        displayBox.innerHTML = displayBox.innerHTML.substring(0 , displayBox.innerHTML.length - 1)
    }
}


document.querySelector(".calculate").addEventListener("click", calculate)
function calculate() {
    displayBox.innerHTML = eval(displayBox.innerHTML)
} 