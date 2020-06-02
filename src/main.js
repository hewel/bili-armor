import App from './App.svelte'
import './style.css'

const mainEl = document.createElement('div')
mainEl.classList.add('bili-armor', '_ba-ml-auto', '_ba-mr-4')
document.querySelector('.nav-user-center').before(mainEl)

const app = new App({
  target: mainEl,
  props: {
    name: 'world!',
  },
})

export default app
