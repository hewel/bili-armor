class MethodVideo {
  constructor() {
    this.videoEl = this._queryEL()
  }

  play() {
    if (this._checkEl()) {
      this.videoEl.play()
    }
    return this
  }
  pause() {
    if (this._checkEl()) {
      this.videoEl.pause()
    }
    return this
  }

  get paused() {
    if (this._checkEl()) {
      return this.videoEl.paused
    }
    return null
  }

  get el() {
    if (this._checkEl()) {
      return this.videoEl
    }
    return null
  }
  _queryEL() {
    return document.querySelector('.bilibili-player-video').querySelector('video')
  }
  _checkEl() {
    const el = this._queryEL()
    if (el) {
      this.videoEl = el
    }
    return !!el
  }
}

export default MethodVideo
