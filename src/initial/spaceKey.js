import MethodVideo from '../methods/video'

const handelKeyDown = (event) => {
  const isInput =
    event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA'
  if (isInput) {
    return
  }
  if (event.keyCode === 32) {
    const video = new MethodVideo()
    if (video._checkEl()) {
      event.preventDefault()
      video.paused ? video.play() : video.pause()
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
