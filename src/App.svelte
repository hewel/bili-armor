<script>
  import { onMount } from 'svelte'
  import { icons } from 'feather-icons'
  import initial from './initial'

  onMount(() => {
    initial()
  })
</script>

<main>
  <span
    class="_ba-inline-flex _ba-justify-center _ba-items-center _ba-w-9 _ba-h-9
    _ba-bg-white _ba-left-0 _ba-top-1/2 _ba-z-150 _ba-rounded-full _ba-shadow-sm">
    {@html icons.sliders.toSvg({ width: 16, height: 16, color: '#4A5568' })}
  </span>
  <div />
</main>
