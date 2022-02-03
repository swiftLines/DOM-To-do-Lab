//Cached Element References
const inpElement = document.getElementById('in')
const btnElement = document.getElementById('submit-button')
const ulElement = document.getElementById("todo-list")

btnElement.addEventListener('click', function(evt) {
    const newLi = document.createElement('li')

    newLi.textContent = inpElement.value

    if (inpElement.value !== "") {
    document.getElementById('todo-list').appendChild(newLi)

    inpElement.value = ""
    }
})

const resetBtn = document.createElement('button')
resetBtn.innerHTML = "Reset"
//append
const body = document.querySelector('body')
body.appendChild(resetBtn)