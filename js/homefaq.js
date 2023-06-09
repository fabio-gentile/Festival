const questions = document.querySelectorAll('.home-faq .wrapper .question')

questions.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.classList.toggle('active')
        const title = element.querySelector('.title')
        title.scrollIntoView({ behavior: 'auto', block: 'center' })
    })
})

