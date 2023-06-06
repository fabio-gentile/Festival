let list = document.querySelectorAll('.home-artiste .bg .wrapper .list ul li')
const slide = document.querySelector('.home-artiste .bg')
listArray = Array.prototype.slice.call(list);
listArray.splice(list.length - 1, 1)
let index = 0, last = null
listArray[index].classList.add('active')
slide.classList.add(listArray[0].getAttribute('data-name') + '-bg')

const changeBg = (number) => {
    if(number == listArray.length) number = 0
    slide.classList = 'bg'
    last = listArray[number].getAttribute('data-name') + '-bg'
    listArray[index].classList.remove("active")
    index = number % listArray.length
    listArray[index].classList.add("active")
    slide.classList.add(listArray[index].getAttribute('data-name') + '-bg')
}

// Timer, toutes les 3 secondes (valeur par défaut)
const time = 3000
if(time>0){
    const timerSwitch = () => {
        changeBg(index + 1)
    }
    let timer = setInterval(timerSwitch,time)

    slide.addEventListener('mouseover',()=>{
        clearInterval(timer)
    })
    slide.addEventListener('mouseout',()=>{
        timer = setInterval(timerSwitch,time)
    })
}

listArray.forEach((element, index) => {
    element.addEventListener('mouseover', () => {
        slide.classList.add(element.getAttribute('data-name') + '-bg')
        changeBg(index)
    })
})