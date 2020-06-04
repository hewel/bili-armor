<script>
  import { createEventDispatcher } from 'svelte'
  import clsx from 'clsx'

  const dispatch = createEventDispatcher()

  export let checked = false

  const handleSwitchClick = ev => {
    ev.preventDefault()
    checked = !checked
    dispatch('active', checked)
  }
</script>

<div
  class={clsx('_ba-relative', '_ba-h-4', '_ba-w-8', '_ba-inline-block', '_ba-cursor-pointer')}
  on:click={handleSwitchClick}>
  <span
    class={clsx('_ba-absolute', '_ba-w-full', '_ba-h-full', '_ba-rounded-full', '_ba-shadow-inner', '_ba-left-0', '_ba-top-0', '_ba-z-0', '_ba-transition-colors', '_ba-duration-150', checked ? '_ba-bg-gray-400' : '_ba-bg-gray-200')} />
  <span
    class={clsx('_ba-inline-flex', '_ba-items-center', '_ba-absolute', '_ba-left-0', '_ba-h-full', '_ba-w-4', '_ba-transition-transform', '_ba-duration-150', '_ba-ease-out', '_ba-z-10', '_ba-transform', checked ? '_ba-translate-x-4' : '_ba-translate-x-0')}>
    <span
      class={clsx('_ba-inline-block', '_ba-rounded-full', '_ba-w-4', '_ba-h-4', '_ba-shadow', checked ? '_ba-bg-pink-400' : '_ba-bg-gray-500')} />
  </span>
</div>
