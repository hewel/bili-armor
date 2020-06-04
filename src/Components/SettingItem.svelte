<script>
  import Switch from './Switch.svelte'
  import clsx from 'clsx'

  export let checked = false
  export let title
</script>

<div class={clsx('_ba-flex', '_ba-justify-between', '_ba-items-center')}>
  <span class="_ba-text-sm">{title}</span>
  <Switch {checked} />
</div>
