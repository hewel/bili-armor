import { css } from 'emotion'

const className = css`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 36px !important;
  font-size: 24px;
  border-radius: 8px;
`
let uploadInnerHTML = null

const applyStyle = () => {
  const uploadBtn = document.querySelector('.mini-upload')
  if (uploadBtn) {
    uploadBtn.classList.add(className)
    uploadInnerHTML = uploadBtn.innerHTML
    uploadBtn.innerHTML = `icon__upload`
  }
}

const removeStyle = () => {
  const uploadBtn = document.querySelector('.mini-upload')
  if (uploadBtn) {
    uploadBtn.classList.remove(className)
    if (uploadInnerHTML) {
      uploadBtn.innerHTML = uploadInnerHTML
    }
  }
}

export { applyStyle, removeStyle }
