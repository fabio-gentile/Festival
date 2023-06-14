const containers = document.querySelectorAll("#line-up .wrapper .container")
containers[0].classList.add("active")
containers.forEach(container => {
    const sort = () => {
        // DOMContentLoaded : attend que la page se charge
        document.addEventListener("DOMContentLoaded", function() {
            const cards = container.querySelectorAll(".card");
            const cardsArray = Array.from(cards);

            cardsArray.sort((a,b) => {
                const classNameA = a.querySelector(".card-img").classList[1];
                const classNameB = b.querySelector(".card-img").classList[1];
                return classNameA.localeCompare(classNameB);
            } )

            const parent = cardsArray[0].parentNode;
            cardsArray.forEach(card => {
                parent.appendChild(card);
            })
        });
    }
    sort()
})

const days = document.querySelectorAll('#line-up .wrapper .days li')
days.forEach((e, i) => {
    e.addEventListener('click', () => {
        containers.forEach((container, k) => {
            if(container.classList.contains('active')){
                container.classList.remove('active')
                days[k].classList.remove('active')
            }
        })
        containers[i].classList.add('active')
        days[i].classList.add('active')
    })
})
