import App from './App.svelte'
import './style.css'

const mainEl = document.createElement('div')
mainEl.classList.add('bili-armor', '_ba-ml-3')
document.querySelector('.nav-user-center').appendChild(mainEl)

const app = new App({
  target: mainEl,
  props: {
    name: 'world!',
  },
})

export default app
