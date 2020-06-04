import { writable } from 'svelte/store'
import defConfig from './config.default'

function createConfig() {
  const { subscribe, set, update } = writable(defConfig)

  return {
    subscribe,
    switch: (key) => update((n) => !n),
    setDef: () => set(defConfig),
  }
}

export const config = createConfig()
