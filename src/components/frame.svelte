<script lang="ts">
  export let title: string = null,
    element: HTMLElement | null = null;
</script>

<section
  class="
    frame
    {$$props.class || ''}
    {$$props.liquid ? 'liquid' : ''}
    {$$props.rigid ? 'rigid' : ''}
  "
  id={$$props.id}
  bind:this={element}
>
  <div class="frame-content">
    {#if title}
      <h3 class="title">{title}</h3>
    {/if}
    <div class="content {$$props.flex ? 'flex' : ''}">
      <slot />
    </div>
  </div>
</section>

<style lang="stylus">
.frame
  position: relative
  margin: 4em 0 4em
  display: inline-block
  &:not(.rigid)
    width: 100%
  @media screen and (max-aspect-ratio: 9/8)
    flex 0 0 100%
  &:before, &:after
    content ''
    display block
    height: 2em
    width: 100%
    position: absolute
    background-image: url(/frame-corner.svg)
    background-position: top right
    background-repeat no-repeat
    background-origin: border-box
    box-sizing: border-box
    border: solid
    border-width: 0px 0px calc(2em * 20 / 171) calc(2em * 20 / 171)
    border-image: linear-gradient(to left, #0000 0%, #0000 calc(2em*305/171), #00ff3a calc(2em*305/171), #00ff3a 100%);
    border-image-slice: 1
  &:before
    top: -2em
    transform: rotate(180deg)
  &:after
    bottom: -2em

  @media screen and (min-aspect-ratio: 9/8)
    &.liquid
      flex 1
      margin-right calc(var(--article-width) * 0.05)

  .frame-content
    margin: auto
    width: 100%
    height: 100%
    box-sizing border-box
    border: solid #00ff3a
    border-width: 0px calc(2em * 20 / 171)
    .title
      padding-left: 3ch
      font-size: 1.2em
      line-height: 2em
      margin: 0
      display: flex
      align-items: center
    .content
      padding:0 2ch
      &.flex
        display: flex
        flex-flow: column
        justify-content: center
        align-items: center
    :global(p)
      margin 0
</style>
