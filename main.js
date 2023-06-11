import "./assets/css/style.css"
import { openCard, closeCard, openEnd, closeEnd } from "./assets/js/card"
// import { customClock, toggleImage, projectTimeline } from "./assets/js/project"

window.onload = () => {
    document.body.style.overflow = 'hidden'

    const cards = document.querySelectorAll('.technical--card-inner') 
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('opened')) closeCard(card)
            else openCard(card)
        })
        card.addEventListener('transitionend', () => {
            if (card.classList.contains('opened')) openEnd(card)
            else closeEnd(card)
        })
    })

    setTimeout(() => welcomeOut(), 2000)
}

function welcomeOut() {
    const welcome = document.querySelector('.welcome')
    const elem = welcome.querySelector('.intro--title')

    const startRect = elem.getBoundingClientRect()
    welcome.classList.remove('init')
    const endRect = elem.getBoundingClientRect()

    elem.animate(
        [
            { 
                top: `${startRect.y}px`, 
                left: `${startRect.x}px`, 
                fontSize: 'clamp(2rem, 12vw, 6rem)',
                webkitFontSize: 'clamp(2rem, 12vw, 6rem)',
                userSelect: 'text',
                fontWeight: 'var(--weight-6)',
                position: 'fixed',
                zIndex: 0,
              },
              { 
                top: `${endRect.y}px`, 
                left: `${endRect.x}px`, 
                fontSize: '1.4rem',
                webkitFontSize: '1.4rem',
                userSelect: 'text',
                fontWeight: 'var(--weight-3)',
                position: 'fixed',
                zIndex: 9,
              },
        ],
        { duration: 700, easing: 'ease' }
    )

    elem.addEventListener('transitionend', () => {
        document.body.style.overflow = 'initial'
        document.querySelector('.intro--container').classList.add('show-child')
    })
    
}
