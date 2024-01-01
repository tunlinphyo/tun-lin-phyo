import ScrollBase from "./scroll-base"

export default class ScrollTimeline extends ScrollBase {
    constructor(elem, allElem) {
        super(elem)
        this.elems = this.elem.querySelectorAll(allElem)
    }

    onScroll() {
        Array.from(this.elems).forEach(elem => {
            this.titleScrollTimeline(elem)
        })
    }

    titleScrollTimeline(elem) {
        const rect = elem.getBoundingClientRect()
        const dataDesc = elem.getAttribute('data-description')
        let start, end
        if (dataDesc == 'desc') {
            start = window.innerHeight * 0.5
            end = window.innerHeight * 0.75
        } else if (dataDesc == 'intro') {
            start = window.innerHeight * 0.5
            end = window.innerHeight * 0.7
        } else if (dataDesc == 'p-body') {
            start = window.innerHeight * 0.65
            end = window.innerHeight * 0.95
        } else if (dataDesc == 'p-link') {
            start = window.innerHeight * 0.8
            end = window.innerHeight * 0.85
        } else if (dataDesc == 'p-tech') {
            start = window.innerHeight * 0.65
            end = window.innerHeight * 0.85
        } else {
            start = window.innerHeight * 0.75
            end = window.innerHeight * 1
        }
    
        const range = this.mapRange(rect.top, start, end, 100, 0)
        elem.style.setProperty('--bg-size', `${Math.max(0, range)}%`)
    }

    getElementPositions() {
        console.log('ELEM POSITION')
    }
}