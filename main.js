import "./assets/css/style.css"
import { openCard, closeCard, openEnd, closeEnd } from "./assets/js/card"
import { customClock, toggleImage, projectTimeline } from "./assets/js/project"

window.onload = () => {
    projectTimeline()

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

    const yomiImgs = document.querySelectorAll('.project--display .yomi')
    const hanablishImgs = document.querySelectorAll('.project--display .hanabishi')
    const inhouseImgs = document.querySelectorAll('.project--display .inhouse')
    let yomiIndex = 0, hanabishiIndex = 0, inhouseIndex = 0
    customClock(
        () => {
            yomiIndex = toggleImage(yomiImgs, yomiIndex)
            hanabishiIndex = toggleImage(hanablishImgs, hanabishiIndex)
            inhouseIndex = toggleImage(inhouseImgs, inhouseIndex)
        }, 
        {interval: 2000 }
    )

}
