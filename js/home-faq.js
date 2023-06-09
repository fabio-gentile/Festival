const questions = document.querySelectorAll('.home-faq .wrapper .question .title')

questions.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.parentElement.classList.toggle('active')
        const title = element.querySelector('.title')
        title.scrollIntoView({ behavior: 'auto', block: 'center' })
    })
})

