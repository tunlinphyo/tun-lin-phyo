import anime from 'animejs/lib/anime.es.js'

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
                    fontSize: '1.1rem',
                    webkitFontSize: '1.1rem',
                    userSelect: 'text',
                    fontWeight: 'var(--weight-4)',
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
        anime({
            targets: '.show-child > *:not(.welcome)',
            opacity: [0, 1],
            translateY: ['300px', '0px'],
            easing: 'easeOutBounce',
        })


        const mediaQuery = window.matchMedia('(min-width: 501px)')
        if (mediaQuery.matches) {
            const gallery = document.querySelector('.gallery')

            const animation = anime({
                targets: gallery,
                translateX: ['-20%', '-20%'],
                rotate: ['186deg', '-6deg'],
                duration: 3000,
                begin() {
                    gallery.style.pointerEvents = 'none'
                },
                complete() {
                    gallery.style.pointerEvents = 'auto'
                }
            })

            gallery.addEventListener('click', () => {
                animation.play()
            })
        }
    }
}

