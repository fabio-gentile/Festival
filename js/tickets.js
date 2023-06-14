const tickets = document.querySelectorAll('#tickets .wrapper .container .box')
tickets.forEach(tickets => {
    const ticket = tickets.querySelectorAll('.content')

    const init = () => {
        ticket.forEach(() => {
            const increment = tickets.querySelector('.basket .add .increment')
            // if(e.parentNode.classList.contains("weekend")){
            //     increment.innerText = 1
            // } else{
            increment.innerText = 0
            // }
        })
    }

    const active = () => {
        ticket.forEach(e => {
            const increment = tickets.querySelector('.basket .add .increment')
            if(increment.innerText > 0){
                e.parentNode.classList.add('active')
            } else{
                e.parentNode.classList.remove('active')
            }
        })
    }
    const add = () => {
        ticket.forEach(() => {
            const minus = tickets.querySelector('.basket .add .fa-minus')
            const plus = tickets.querySelector('.basket .add .fa-plus')
            const increment = tickets.querySelector('.basket .add .increment')
            minus.addEventListener('click', () => {
                if(increment.innerText > 0){
                    increment.innerText = parseInt(increment.innerText) - 1
                } else{
                    increment.innerText = 0
                }
                active()
            })
            plus.addEventListener('click', () => {
                increment.innerText = parseInt(increment.innerText) + 1
                active()
            })
        })
    }
    init()
    active()
    add()

})
