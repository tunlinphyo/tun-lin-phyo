export const openCard = elem => {
  document.querySelector('.technical--layer').classList.add('show')

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

  // elem.querySelector('.technical--card_end h4').animate(
  //   [
  //     { 
  //       // fontSize: '1rem', 
  //       fontWeight: 'var(--weight-3)' 
  //     },
  //     { 
  //       // fontSize: '2rem', 
  //       fontWeight: 'var(--weight-5)' 
  //     },
  //   ],
  //   { duration: 500, easing: 'ease' }
  // )
}

export const closeCard = elem => {
  document.querySelector('.technical--layer').classList.remove('show')

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

  // elem.querySelector('.technical--card_end h4').animate(
  //   [
  //     { 
  //       // fontSize: '2rem', 
  //       fontWeight: 'var(--weight-5)' 
  //     },
  //     { 
  //       // fontSize: '1rem', 
  //       fontWeight: 'var(--weight-3)' 
  //     },
  //   ],
  //   { duration: 500, easing: 'ease' }
  // )
}

export const openEnd = elem => {
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

export const closeEnd = elem => {
  elem.querySelector('.technical--card_more').textContent = 'More...'
  elem.querySelector('.technical--content').style.opacity = 0

  const parent = elem.parentElement
  parent.style.height = 'initial'
}
