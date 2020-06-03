<script>
  import { onMount } from 'svelte'
  import { icons } from 'feather-icons'
  import clsx from 'clsx'
  import initial from './initial'

  import SettingMenu from './Components/SettingMenu.svelte'

  let isMenuShow = false
  let iconColor = '#4A5568'

  onMount(() => {
    initial()
  })
  const handleToolBtnClick = () => {
    isMenuShow = !isMenuShow
  }
  const handleToolBtnHover = (out = false) => () => {
    iconColor = out ? '#4A5568' : '#F687B3'
  }
</script>

<main class="_ba-h-9 _ba-mr-1 _ba-flex _ba-items-center _ba-relative">
  <span
    class="_ba-inline-flex _ba-justify-center _ba-items-center _ba-w-6 _ba-h-6
    _ba-bg-white _ba-rounded-full _ba-shadow-md _ba-cursor-pointer"
    class:_ba-shadow-inner={isMenuShow}
    on:click={handleToolBtnClick}
    on:mouseover={handleToolBtnHover()}
    on:mouseout={handleToolBtnHover(true)}>
    {@html icons.sliders.toSvg({ width: 12, height: 12, color: iconColor })}
  </span>
  <SettingMenu {isMenuShow} />
</main>
