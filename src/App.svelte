<script>
  import { onMount } from 'svelte'
  import { SlidersIcon } from 'svelte-feather-icons'
  import clsx from 'clsx'
  import initial from './initial'
  import SettingMenu from './Components/SettingMenu.svelte'

  const mainClassNames = clsx(
    '_ba-absolute',
    '_ba-top-0',
    '_ba-right-0',
    '_ba-h-14',
    '_ba-mr-2',
    '_ba-flex',
    '_ba-items-center',
    '_ba-z-1000'
  )
  const btnClassNames = clsx(
    '_ba-inline-flex',
    '_ba-justify-center',
    '_ba-items-center',
    '_ba-w-6',
    '_ba-h-6',
    '_ba-bg-white',
    '_ba-rounded-full',
    '_ba-shadow',
    '_ba-cursor-pointer',
    '_ba-text-sm',
    '_ba-text-gray-900',
    '_ba-transition',
    '_ba-duration-200',
    '_ba-ease-in-out',
    'hover:_ba-text-pink-400'
  )

  let isMenuShow = false

  onMount(() => {
    initial()
  })
  const handleToolBtnClick = () => {
    isMenuShow = !isMenuShow
  }
</script>

<main class={mainClassNames}>
  <span
    class={btnClassNames}
    class:_ba-shadow-inner={isMenuShow}
    class:_ba-bg-gray-100={isMenuShow}
    on:click={handleToolBtnClick}>
    <SlidersIcon class="_ba-icon" />
  </span>
  <SettingMenu {isMenuShow} />
</main>
