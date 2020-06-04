<script>
  import { createEventDispatcher } from 'svelte'
  import clsx from 'clsx'
  import Switch from './Switch.svelte'

  const dispatch = createEventDispatcher()

  export let checked = false
  export let title
  export let key

  const handleActive = () =>
    dispatch('switch', {
      key,
      checked,
    })
</script>

<div
  class={clsx('_ba-flex', '_ba-justify-between', '_ba-items-center', '_ba-py-2', '_ba-text-gray-700')}>
  <span class="_ba-text-xs">{title}</span>
  <Switch bind:checked on:active={handleActive} />
</div>
