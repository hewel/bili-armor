import { writable } from 'svelte/store'
import { forEachObjIndexed, has } from 'ramda'
import defConfig from './config.default'
import titleTexts from './titleTexts'
import initial from '../initial'

function init() {
  forEachObjIndexed((checked, key) => {
    if (has(key, initial)) {
      initial[key](checked)
    }
  }, defConfig)
}

function createConfig() {
  const { subscribe, set, update } = writable(defConfig)
  let prevConfig = null
  init()
  return {
    subscribe,
    switch: (key) =>
      update((n) => {
        const checked = !n[key]
        if (has(key, initial)) {
          initial[key](checked)
        }
        prevConfig = n
        return {
          ...n,
          [key]: checked,
        }
      }),
    getPrev: () => prevConfig,
    setDef: () => set(defConfig),
  }
}

export const config = createConfig()

export { defConfig, titleTexts }
