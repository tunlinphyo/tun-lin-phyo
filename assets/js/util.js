
function random(max = 360) {
  return (Math.random() * max).toFixed()
}

export function changeHue() {
  document.querySelector(":root").style.setProperty('--hue', random())
}