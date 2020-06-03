import { css } from 'emotion/dist/emotion.umd.min'

function compatibleStyles() {
  const avatarDecorate = document.querySelector('.vp-container .avatar-decorate')
  avatarDecorate.classList.add(
    css`
      max-width: inherit;
    `
  )
}

export default compatibleStyles