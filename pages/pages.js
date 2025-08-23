const arrowButton = document.querySelector('#expand_button')
const listElement = document.querySelector('#list')

arrowButton.addEventListener('click', () => {
    arrowButton.classList.toggle('active')
    listElement.classList.toggle('active')
})