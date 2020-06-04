<script>
  import { afterUpdate, onDestroy } from 'svelte'
  import { get } from 'svelte/store'
  import { quintOut, quintIn } from 'svelte/easing'
  import { slide } from 'svelte/transition'
  import { map, has, keys } from 'ramda'
  import clsx from 'clsx'
  import SettingItem from './SettingItem.svelte'
  import { config, titleTexts } from '../store'

  const menuClassNames = clsx(
    '_ba-absolute',
    '_ba-w-56',
    '_ba-bg-white',
    '_ba-shadow-md',
    '_ba-z-50',
    '_ba-right-0',
    '_ba-rounded-sm',
    '_ba-top-16',
    '_ba-px-4',
    '_ba-py-2'
  )

  export let isMenuShow
  let settings
  const defConfig = get(config)
  const SettingList = map(
    (key) => ({
      key,
      checked: defConfig[key],
      title: has(key, titleTexts) ? titleTexts[key] : key,
    }),
    keys(defConfig)
  )
  const unsubscribe = config.subscribe((value) => {
    settings = value
  })

  afterUpdate(() => {})
  onDestroy(() => unsubscribe())
</script>

{#if isMenuShow}
  <div
    in:slide={{ duration: 300, easing: quintOut }}
    out:slide={{ duration: 200, easing: quintIn }}
    class={menuClassNames}>
    <p class="_ba-text-base _ba-font-medium _ba-text-gray-800 _ba-my-2">
      Bili Armor 设置
    </p>
    {#each SettingList as props}
      <SettingItem
        {...props}
        checked={settings[props.key]}
        on:switch={(e) => config.switch(e.detail.key)} />
    {/each}
  </div>
{/if}
