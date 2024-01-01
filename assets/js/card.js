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
        this.layer.classList.add('show')

        const domRect = elem.querySelector('.technical--card-card').getBoundingClientRect()
        elem.classList.add('opened')

        const endRect = elem.querySelector('.technical--card-card').getBoundingClientRect()

        const parent = elem.parentElement
        parent.style.height = `${domRect.height}px`

        elem.animate(
            [
                {
                    top: `${domRect.y}px`,
                    left: `${domRect.x}px`,
                    width: `${domRect.width}px`,
                    height: `${domRect.height}px`,
                    zIndex: 0,
                },
                {
                    top: `${endRect.y}px`,
                    left: `${endRect.x}px`,
                    width: `${endRect.width}px`,
                    height: `${endRect.height}px`,
                    zIndex: 9,
                },
            ],
            { duration: 500, easing: 'ease' }
        )

        await Promise.allSettled(
            elem.getAnimations().map(animation =>
                animation.finished
            )
        )
        this.openEnd(elem)
    }

    async closeCard(elem) {
        this.layer.classList.remove('show')

        const domRect = elem.querySelector('.technical--card-card').getBoundingClientRect()
        elem.classList.remove('opened')

        const endRect = elem.querySelector('.technical--card-card').getBoundingClientRect()

        elem.animate(
            [
                {
                    top: `${domRect.y}px`,
                    left: `${domRect.x}px`,
                    width: `${domRect.width}px`,
                    height: `${domRect.height}px`,
                    position: 'fixed',
                    zIndex: 9,
                },
                {
                    top: `${endRect.y}px`,
                    left: `${endRect.x}px`,
                    width: `${endRect.width}px`,
                    height: `${endRect.height}px`,
                    position: 'fixed',
                    zIndex: 0,
                },
            ],
            { duration: 500, easing: 'ease' }
        )
        await Promise.allSettled(
            elem.getAnimations().map(animation =>
                animation.finished
            )
        )
        this.closeEnd(elem)
    }


    openEnd(elem) {
        elem.querySelector('.technical--card_more').textContent = 'Close'
        elem.querySelector('.technical--content').style.opacity = 1

        elem.querySelector('.technical--content').animate(
            [
                { opacity: 0, transform: 'scale(.5)', transformOrigin: 'left' },
                { opacity: 1, transform: 'scale(1)', transformOrigin: 'left' },
            ],
            { duration: 200, easing: 'ease' }
        )
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
