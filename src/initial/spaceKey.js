const handelKeyDown = (event) => {
  const isInput =
    event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA'
  if (isInput) {
    return
  }
  if (event.keyCode === 32) {
    const playerEl = document.querySelector('.bilibili-player-video video')
    if (playerEl) {
      event.preventDefault()
      playerEl.paused ? playerEl.play() : playerEl.pause()
    }
  }
}

const bindListener = () => {
  document.body.addEventListener('keydown', handelKeyDown)
}

const unbindListener = () => {
  document.body.removeEventListener('keydown', handelKeyDown)
}
export { bindListener, unbindListener }
