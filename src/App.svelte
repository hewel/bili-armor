<script>
  import { onMount } from 'svelte'
  import { icons } from 'feather-icons'
  import clsx from 'clsx'
  import initial from './initial'

  import SettingMenu from './Components/SettingMenu.svelte'

  let isMenuShow = false

  onMount(() => {
    initial()
  })
  const handleToolBtnClick = () => {
    isMenuShow = !isMenuShow
  }
</script>

<main class="_ba-h-9 _ba-mr-1 _ba-flex _ba-items-center _ba-relative">
  <span
    class="_ba-inline-flex _ba-justify-center _ba-items-center _ba-w-6 _ba-h-6
    _ba-bg-white _ba-left-0 _ba-top-1/2 _ba-rounded-full _ba-shadow-sm
    _ba-cursor-pointer"
    on:click={handleToolBtnClick}>
    {@html icons.sliders.toSvg({ width: 12, height: 12, color: '#4A5568' })}
  </span>
  <SettingMenu {isMenuShow} />
</main>
