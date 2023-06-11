import "./assets/css/style.css"
import { welcomeOut } from "./assets/js/welcome"
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
