//Cached Element References
//const inpElement = document.getElementById('id')
const btnElement = document.getElementById('submit-button')
const ulElement = document.getElementById("todo-list")

btnElement.addEventListener('click', function(evt) {
    const newLi = document.createElement('li')

    const inpElement = document.getElementById('in')

    newLi.textContent = inpElement.value

    document.querySelector('ul').appendChild(newLi)

    inpElement.value = ""

    
})