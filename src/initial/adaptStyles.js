import { css } from 'emotion/dist/emotion.umd.min'

const adaptTooltip = () => {
  document.querySelector('.vp-container .avatar-decorate').classList.add(
    css`
      max-width: inherit;
    `
  )
}

function adaptStyles() {
  adaptTooltip()
}

export default adaptStyles
