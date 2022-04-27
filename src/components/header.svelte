<script lang="ts">
  import Picture from '../components/picture.svelte';
  import InPageLink from './inPageLink.svelte';
  import { elements } from '../stores/elements';

  setTimeout(() => (checkbox.checked = false), 1500);

  const targets = [
    {
      id: 'story',
      label: 'あらすじ'
    },
    {
      id: 'game_info',
      label: 'ゲーム情報'
    },
    {
      id: 'trailer',
      label: 'トレーラー'
    },
    {
      id: 'team',
      label: 'Snymとは'
    },
    {
      id: 'member',
      label: 'メンバー'
    }
  ];

  let checkbox;
</script>

<header bind:this={$elements.header}>
  <Picture
    imgClass="logo"
    target="top"
    title="クリックするとページの先頭に戻ります"
    alt="Snym(スナイム)のPREDATOR AND WRECK 捕食者と崩壊 | プレデター・アンド・レックの画像"
    imageTypes={['webp', 'png']}
    sizes="11.5vh"
    srcName="team_logo"
  />
  <input
    type="checkbox"
    class="ui_button button_checkbox"
    checked={true}
    name="button_checkbox"
    id="button_checkbox"
    bind:this={checkbox}
  />
  <label for="button_checkbox" class="button" title="クリックするとナビゲーションを開閉できます">
    <svg class="button_svg" viewBox="0 0 24 24" fill="white">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </svg>
  </label>
  <nav>
    <label for="button_checkbox" class="list_items title">
      <h3 class="title"><span class="break-scope">ナビゲーション</span>を閉じる</h3>
    </label>
    {#each targets as target}
      <InPageLink
        class="list_items"
        target={$elements[target.id]}
        beforeScroll={() => (checkbox.checked = false)}
      >
        {target.label}
      </InPageLink>
    {/each}
  </nav>
</header>

<svelte:head>
  <style>
    .logo {
      display: inline-block;
      height: 100%;
      width: auto;
      object-fit: contain;
    }
  </style>
</svelte:head>

<style lang="stylus">
vendor(prop, args)
  {prop} args
  -webkit-{prop} args
  -moz-{prop} args

header
  position fixed
  top 0
  align-items center
  justify-content space-between
  width 100vw
  padding calc(var(--base-size) / 6) calc(var(--base-size) / 2 +  env(safe-area-inset-left)) calc(var(--base-size) / 6) calc(var(--base-size) / 2 +  env(safe-area-inset-right))
  height calc(var(--base-size) + env(safe-area-inset-top))
  box-sizing border-box
  color var(--ui-text-color)
  background-color var(--ui-bg)
  vendor(backdrop-filter, blur(10px))
  z-index 5000

.button
  margin 0
  position fixed
  top 0
  right 0
  z-index 7000
  border none
  box-sizing border-box
  height var(--base-size)
  display inline-flex
  align-items center
  justify-content center
  background-color var(--ui-over-bg)
  transition-property padding
  transition-duration 200ms
  transition-delay 0ms
  transition-timing-function ease-out
  @media screen and (orientation: landscape)
    animation-name fold_button
    animation-duration 200ms
    animation-timing-function ease-out
    animation-delay 0ms
    animation-fill-mode both

  &:before
    content ''
    display block
    position absolute
    top 0px
    left calc(var(--base-size) * -1.0)
    border-style solid
    border-width var(--base-size) calc(var(--base-size) / 2) 0px calc(var(--base-size) / 2)
    border-color transparent
    border-right-color var(--ui-over-bg)

  @media screen and (orientation: landscape)
    &:hover
      background-color var(--ui-over-bg-hover)

    &:hover:before
      border-right-color var(--ui-over-bg-hover)

@css{
.button{
  padding: 0 max(env(safe-area-inset-right), calc(var(--base-size) / 2)) 0 calc(var(--base-size) / 2);
}
#button_checkbox:checked ~ .button{
  padding: 0 calc(var(--base-size) / 2) 0;
}
}

.button_svg
  height 60%
  transform translate(0, -2%)
  z-index 8000
  pointer-events none
  animation-name derotate_svg
  animation-duration 200ms
  animation-timing-function ease-out
  animation-delay 200ms
  animation-fill-mode both

.button_checkbox
  display none

nav
  display flex
  width var(--navigation-width)
  z-index 6000
  font-size var(--base-size-vw)
  @media screen and (orientation: portrait)
    flex-wrap wrap
    width 100vw
    z-index 4000
    font-size calc(var(--base-size) / 3)
  position fixed
  top 0
  right 0
  background-color transparent
  animation-name fold_navigation
  animation-duration 200ms
  animation-timing-function ease-out
  animation-fill-mode both

  .title
    margin 0
    line-height calc(var(--base-size) / 2)
    font-weight normal
    @media screen and (orientation: portrait)
      flex 0 0 100vw
      line-height var(--base-size)

header
  :global(.list_items)
    display block
    width 100%
    text-decoration none
    background-color var(--ui-over-bg)
    height var(--base-size)
    line-height var(--base-size)
    margin 0
    padding 0
    border none
    text-align center
    color var(--ui-text-color)
  @media screen and (orientation: portrait)
    :global(.list_items)
      flex 0 0 50vw
    :global(.list_items):last-child
      flex 0 0 100vw

  :global(.list_items):last-child
    padding-right env(safe-area-inset-right)

  :global(.list_items):hover
    @media screen and (orientation: landscape)
      background-color var(--ui-over-bg-hover)

  :global(.list_items)+:global(.list_items):before
    @media screen and (orientation: landscape)
      content ''
      position absolute
      width 1px
      top calc(var(--base-size) * 0.1)
      transform translate(-0.5px, 0)
      height calc(var(--base-size) * 0.8)
      display block
      background-color var(--ui-text-color)

  @media screen and (orientation: portrait)
    :global(.list_items)+:global(.list_items):nth-child(2):before
      content none

#button_checkbox:checked ~ nav
  animation-name expand_navigation
  animation-duration 200ms
  animation-timing-function ease-out
  animation-delay 150ms
  animation-fill-mode both

#button_checkbox:checked ~ .button > svg
  animation-name rotate_svg
  animation-duration 150ms
  animation-timing-function ease-in
  animation-delay 0ms
  animation-fill-mode both

#button_checkbox:checked ~ .button
  transition-delay 150ms
  @media screen and (orientation: landscape)
    animation-name expand_button
    animation-duration 200ms
    animation-timing-function ease-out
    animation-delay 150ms
    animation-fill-mode both

@media screen and (orientation: landscape)
  @keyframes hide_dark-over
    0%
      opacity 0
    100%
      opacity 1

  @keyframes rotate_svg
    0%
      transform rotate(45deg)
    100%
      transform rotate(270deg)

  @keyframes derotate_svg
    0%
      transform rotate(270deg)
    100%
      transform rotate(45deg)

  @keyframes expand_button
    0%
      transform translate(0, 0)
    100%
      transform translate(calc(var(--navigation-width) * -1), 0)

  @keyframes fold_button
    0%
      transform translate(calc(var(--navigation-width) * -1), 0)
    100%
      transform translate(0, 0)

  @keyframes expand_navigation
    0%
      transform translate(100%, 0%)
    100%
      transform translate(0%, 0%)

  @keyframes fold_navigation
    0%
      transform translate(0%, 0%)
    100%
      transform translate(100%, 0%)

@media screen and (orientation: portrait)
  @keyframes rotate_svg
    0%
      transform rotate(45deg)
    100%
      transform rotate(-180deg)

  @keyframes derotate_svg
    0%
      transform rotate(-180deg)
    100%
      transform rotate(45deg)

  @keyframes expand_navigation
    0%
      transform translate(0%, -100%)
    100%
      transform translate(0%, 25%)

  @keyframes fold_navigation
    0%
      transform translate(0%, 25%)
    100%
      transform translate(0%, -100%)

</style>
