const questions = document.querySelectorAll('.wrapper .question .title')

questions.forEach((element) => {
    element.addEventListener('click', () => {
        element.parentElement.classList.toggle('active')
        const title = element.querySelector('.title')
        title.scrollIntoView({ behavior: 'auto', block: 'center' })
    })
})

