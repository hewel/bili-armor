import { writable } from 'svelte/store'
import defConfig from './config.default'
import titleTexts from './titleTexts'

function createConfig() {
  const { subscribe, set, update } = writable(defConfig)

  return {
    subscribe,
    switch: (key) =>
      update((n) => ({
        ...n,
        [key]: !n[key],
      })),
    setDef: () => set(defConfig),
  }
}

export const config = createConfig()

export { defConfig, titleTexts }
