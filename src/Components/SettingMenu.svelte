<script>
  import { slide } from 'svelte/transition'
  import { quintOut, quintIn } from 'svelte/easing'

  export let isMenuShow
</script>

{#if isMenuShow}
  <div
    in:slide={{ duration: 300, easing: quintOut }}
    out:slide={{ duration: 200, easing: quintIn }}
    class="_ba-absolute _ba-w-40 _ba-bg-white _ba-shadow-md _ba-z-50 _ba-right-0
    _ba-rounded-sm _ba-top-12">
    menu
  </div>
{/if}
