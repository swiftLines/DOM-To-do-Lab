//Cached Element References
const inpElement = document.getElementById('in')
const btnElement = document.getElementById('submit-button')
const ulElement = document.getElementById("todo-list")
const span = document.querySelector('span')


btnElement.addEventListener('click', function(evt) {
    const newLi = document.createElement('li')

    newLi.textContent = inpElement.value

    if (inpElement.value !== "") {
    document.getElementById('todo-list').appendChild(newLi)

    inpElement.value = ""
    }
})

//create reset button
const resetBtn = document.createElement('button')
resetBtn.innerHTML = "Reset"
//append
span.appendChild(resetBtn)

//make reset button functional
resetBtn.addEventListener('click', function(evt) {
    //clear ulElement
    ulElement.innerHTML = ''
})

//Delete an Item on Click

ulElement.addEventListener('click', function(evt) {
    let liElement = document.querySelector('li')
    liElement.remove(evt.target)
})


