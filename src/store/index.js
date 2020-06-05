import { writable } from 'svelte/store'
import defConfig from './config.default'
import titleTexts from './titleTexts'

function createConfig() {
  const { subscribe, set, update } = writable(defConfig)
  let prevConfig = null

  return {
    subscribe,
    switch: (key) =>
      update((n) => {
        prevConfig = n
        return {
          ...n,
          [key]: !n[key],
        }
      }),
    getPrev: () => prevConfig,
    setDef: () => set(defConfig),
  }
}

export const config = createConfig()

export { defConfig, titleTexts }
