// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js'

export function projectTimeline() {
    const project = document.querySelector('.project--list')
    const timeline = document.querySelector('.project--timeline_bar')

    const top = project.offsetTop - window.innerHeight
    const bottom = top + project.clientHeight
    const end = project.clientHeight

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY
        const start = scrollY - top
        let width = 0
        if (scrollY < top) {
            width = 0
        } else if (scrollY > bottom) {
            width = 100
        } else if (scrollY > top && scrollY < bottom) {
            width = Math.min(start / end * 100, 100)
        } 
        timeline.style.width = `${width}%`
    })
}

export function customClock(callback, options) {
    let previousTime = 0

    function innerCallback(currentTime) {
        const elapsedTime = currentTime - previousTime
        
        if (elapsedTime >= options.interval) {
            callback()
            previousTime = currentTime
        }
        
        requestAnimationFrame(innerCallback)
    }

    requestAnimationFrame(innerCallback)
}

export function toggleImage(images, index = 0) {
    images.forEach(img => img.classList.remove('show'))
    images[index].classList.add('show')

    if (index < images.length - 1) return index + 1
    else return 0
}