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

<div class={clsx('_ba-flex', '_ba-justify-between', '_ba-items-center')}>
  <span class="_ba-text-sm">{title}</span>
  <Switch bind:checked on:active={handleActive} />
</div>
