<script lang="ts">
  export let title: string = null;
</script>

<section
  class="
    frame
    {$$props.class || ''}
    {$$props.liquid ? 'liquid' : ''}
    {$$props.rigid ? 'rigid' : ''}
  "
  id={$$props.id}
>
  <div class="frame-content" style={$$props.style}>
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
    background-position: top left
    background-size: 100% 2em
    background-clip: border-box
    box-sizing: border-box
    border: calc(2em * 20 / 171) solid
    border-image: linear-gradient(to left, transparent 0%, transparent 25%, #00ff3a 25%, #00ff3a 100%);
    border-image-slice: 1
    border-width: 0px 0px calc(2em * 20 / 171) calc(2em * 20 / 171)
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
