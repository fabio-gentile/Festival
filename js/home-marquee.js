const Marquee = ( selector, speed ) => {
    const parentSelector = document.querySelector( '.home-marquee' )
    const clone = parentSelector.innerHTML
    const firstElement = parentSelector.children[0]
    let i = 0

    parentSelector.insertAdjacentHTML( 'beforeend', clone )
    parentSelector.insertAdjacentHTML( 'beforeend', clone )

    setInterval( () => {
        firstElement.style.marginLeft = `-${i}px`
        // console.log(firstElement.style.marginLeft = `-${i}px`)
        if ( i > firstElement.clientWidth ) {
            i = 0
        }
        i = i + speed
        // console.log(i)
    }, 0 )
}

window.addEventListener( 'load', Marquee( '.marquee', .2 ) )