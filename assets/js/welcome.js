export default class Welcome {
    constructor(elem) {
        this.welcome = document.querySelector(elem)
        document.body.style.overflow = 'hidden'
        this.out = this.out.bind(this)

        setTimeout(() => this.out(), 2000)
    }

    async out() {
        const elem = this.welcome.querySelector('.intro--title')

        const startRect = elem.getBoundingClientRect()
        this.welcome.classList.remove('init')
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

        await Promise.allSettled(
            elem.getAnimations().map(animation =>
                animation.finished
            )
        )
        document.body.style.overflow = 'initial'
        document.querySelector('.intro--container').classList.add('show-child')
        document.querySelector('.gallery').classList.add('rotate')
    }
}

