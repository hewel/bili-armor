<script>
  import { quintOut, quintIn } from 'svelte/easing'
  import { slide } from 'svelte/transition'
  import clsx from 'clsx'
  import Switch from './Switch.svelte'

  const menuClassNames = clsx(
    '_ba-absolute',
    '_ba-w-40',
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
</script>

{#if isMenuShow}
  <div
    in:slide={{ duration: 300, easing: quintOut }}
    out:slide={{ duration: 200, easing: quintIn }}
    class={menuClassNames}>
    <p>menu</p>
    <Switch />
  </div>
{/if}
