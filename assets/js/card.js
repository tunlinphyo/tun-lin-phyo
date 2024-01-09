import anime from 'animejs/lib/anime.es.js'
import disableScroll from 'disable-scroll'

export default class ToggleCard {
    constructor(elem) {
        this.elem = document.querySelector(elem)
        this.cards = this.elem.querySelectorAll('.technical--card-inner')
        this.layer = document.querySelector('.technical--layer')
        this.handleClick = this.handleClick.bind(this)

        this.subscribe()
    }

    handleClick(event) {
        const card = event.target.closest(".technical--card-inner")
        if (card.classList.contains('opened')) this.closeCard(card)
        else this.openCard(card)
    }

    async openCard(elem) {
        disableScroll.on()
        const domRect = elem.querySelector('.technical--card-card').getBoundingClientRect()
        elem.classList.add('opened')

        const endRect = elem.querySelector('.technical--card-card').getBoundingClientRect()

        const parent = elem.parentElement
        parent.style.height = `${domRect.height}px`

        const animation = anime({
            targets: elem,
            position: 'fixed',
            top: [`${domRect.y}px`, `${endRect.y}px`],
            left: [`${domRect.x}px`, `${endRect.x}px`],
            width: [`${domRect.width}px`, `${endRect.width}px`],
            height: [`${domRect.height}px`, `${endRect.height}px`],
            zIndex: [9, 9],
            begin: () => {
                elem.style.pointerEvents = 'none'
                this.layer.classList.add('show')
            },
            // easing: 'easeOutElastic',
            easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
            duration: 500,
        });

        animation.finished.then(() => {
            this.animateSkills(elem)
            elem.style.pointerEvents = 'auto'
            elem.removeAttribute('style')
            this.openEnd(elem)
        })
    }

    async closeCard(elem) {
        disableScroll.off()
        const domRect = elem.querySelector('.technical--card-card').getBoundingClientRect()
        elem.classList.remove('opened')

        const endRect = elem.querySelector('.technical--card-card').getBoundingClientRect()
        elem.style.position = 'fixed'

        const animation = anime({
            targets: elem,
            top: [`${domRect.y}px`, `${endRect.y}px`],
            left: [`${domRect.x}px`, `${endRect.x}px`],
            width: [`${domRect.width}px`, `${endRect.width}px`],
            height: [`${domRect.height}px`, `${endRect.height}px`],
            zIndex: [9, 0],
            begin: () => {
                elem.style.pointerEvents = 'none'
                this.layer.classList.remove('show')
            },
            // easing: 'easeOutElastic',
            easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
            duration: 500,
        });

        animation.finished.then(() => {
            elem.style.position = 'initial'
            elem.style.pointerEvents = 'auto'
            elem.removeAttribute('style')
            this.closeEnd(elem)
        })
    }

    animateSkills(elem) {
        console.log('SKILLS')
        elem.querySelector('.technical--content').style.opacity = 1

        anime({
            targets: elem.querySelector('.technical--content'),
            opacity: [0, 1],
            scale: [.5, 1],
            easing: 'easeOutExpo',
            duration: 500
        })
    }

    openEnd(elem) {
        elem.querySelector('.technical--card_more').textContent = 'Close'
    }

    closeEnd(elem) {
        elem.querySelector('.technical--card_more').textContent = 'More...'
        elem.querySelector('.technical--content').style.opacity = 0

        const parent = elem.parentElement
        parent.style.height = 'initial'
    }

    subscribe() {
        Array.from(this.cards).forEach(card => {
            card.addEventListener("click", this.handleClick)
        })
    }

    unsubscribe() {
        Array.from(this.cards).forEach(card => {
            card.removeEventListener("click", this.handleClick)
        })
    }
}
