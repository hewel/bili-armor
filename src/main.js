import App from './App.svelte'
import './style.css'

const mainEl = document.createElement('div')
mainEl.classList.add('bili-armor')
document.body.appendChild(mainEl)

const app = new App({
  target: mainEl,
})

export default app
