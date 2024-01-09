export default class Gallery {
    constructor(elem) {
        this.elem = document.querySelector(elem)
        this.leftImages = this.elem.querySelectorAll('.left > .image')
        this.rightImages = this.elem.querySelectorAll('.right > .image')

        this.run()
    }

    run() {
        const FRAME_INCREACE = 1
        let currentNum = 0
        let increase = true
        let leftIndex = 0
        let rightIndex = 0

        leftIndex = this.increaseIndex(this.leftImages, leftIndex)
        rightIndex = this.increaseIndex(this.rightImages, rightIndex)

        const checkTime = () => {
            if (increase) {
                if (currentNum < 110) {
                    currentNum += FRAME_INCREACE
                } else {
                    increase = false
                    rightIndex = this.increaseIndex(this.rightImages, rightIndex)
                }
            } else {
                if (currentNum > -10) {
                    currentNum -= FRAME_INCREACE
                } else {
                    increase = true
                    leftIndex = this.increaseIndex(this.leftImages, leftIndex)
                }
            }

            this.setCssProperty(currentNum)
            requestAnimationFrame(checkTime)
        }

        requestAnimationFrame(checkTime)
    }

    increaseIndex(imgElems, activeIndex) {
        this.setActive(imgElems, activeIndex)
        if (activeIndex == imgElems.length - 1) activeIndex = 0
        else activeIndex += 1
        return activeIndex
    }

    setActive(imgElems, activeIndex) {
        Array.from(imgElems).forEach((img, index) => {
            if (index == activeIndex) {
                img.style.zIndex = '1'
            } else {
                img.style.zIndex = '-1'
            }
        })
    }

    setCssProperty(num) {
        this.elem.style.setProperty('--pos', num + '%')
    }
}