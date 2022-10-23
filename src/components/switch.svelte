<script lang="ts">
  import { onMount } from 'svelte';
  import Picture from '../components/picture.svelte';
  import { _ } from 'svelte-i18n';
  import JoyCon from './joy-con.svelte';

  let anchor, body;
  let open = false,
    switch_and_play = false;

  onMount(() => {
    anchor.addEventListener('click', () => {
      open = true;
      setTimeout(() => {
        open = false;
      }, 2000);
    });

    let observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting && entries[0].intersectionRatio > 0.2) {
          switch_and_play = true;
        } else {
          switch_and_play = false;
        }
      },
      { threshold: [0, 1] }
    );
    observer.observe(body);
  });

  const iconSizeSet = [400, 350, 300, 250, 200, 150, 100, 50];
</script>

<svelte:window on:pageshow={() => (open = false)} />

<div class="switch" class:open class:switch_and_play>
  <div class="joy-con-container">
    <JoyCon L {switch_and_play} />
    <JoyCon R {switch_and_play} />
  </div>

  <a
    href={$_('switch_link')}
    class="switch_home-anchor"
    bind:this={anchor}
  >
    <div class="body" bind:this={body}>
      <div class="display">
        <div class="switch_cover" />
        <div class="icons">
          <div class="switch_icon" />
          <div class="switch_icon active new">
            {#each ['switch_real', 'switch_phantom'] as className}
              <Picture
                imgClass={className}
                alt={$_('switch_alt')}
                imageTypes={['webp', 'jpg']}
                sizes="25vw"
                sizeSet={iconSizeSet}
                fallbackSize={iconSizeSet[0]}
                srcName={$_('switch_src')}
              />
            {/each}
          </div>
          {#each Array(10) as _}
            <div class="switch_icon" />
          {/each}
        </div>
        <h2>{$_('go_to_nintendo_store')}</h2>
      </div>
    </div>
  </a>
</div>

<style lang="stylus">
  $body_width = 65.25vw
  $display_width = $body_width * 0.881
  $icon_width = $display_width * 256 /1280
  .switch
    position: relative;
    left: ((100vw - $body_width) / 2)
    width $body_width
    --switch-width: $display_width
    color #7f5
    @media (prefers-color-scheme: light)
      a
        color #387828
    font-size: 2.5vw
    filter: drop-shadow(#244d1a 0 0 10px)
    margin: 2em 0
    z-index: 2

    .joy-con-container
      width: 100%
      display: flex
      justify-content space-between

    .body
      width: $body_width
      height: (($body_width / 1042) * 601)
      position: relative;
      border-radius: 5px
      background-color: #050505;
      display: flex;
      justify-content: center
      align-items: center
      margin: 0 auto

      .display
        width: $display_width
        height: $display_width / 16 * 9
        background-color: #2d2d2d
        @media (prefers-color-scheme: light)
          background-color: #ebebeb
        text-align: center
        position: relative
        padding-top: (($display_width * 194/1280) - ($icon_width * 0.27))
        box-sizing: border-box

  .icons
    display: flex
    overflow-x: scroll
    -ms-overflow-style: none
    scrollbar-width: none
    padding: (($icon_width * 0.27) / 2) ($display_width * 105.5/1280)

    &::-webkit-scrollbar
      display: none

    &:after
      content: ""
      display: block
      width: (100% * 1220/1280)
      height: calc(max(100% * 1/1280, 1px))
      background-color: #fff
      @media (prefers-color-scheme: light)
        height: calc(max(100% * 3/1280, 1.5px))
        background-color: #b5b5b5
      position: absolute
      bottom: (144/1280 * 100%)
      left: (30/1280 * 100%)

  .switch_icon
    --icon_width: $icon_width
    width: $icon_width
    height: $icon_width
    background-color: #888
    border: solid 0px #2d2d2d
    @media (prefers-color-scheme: light)
      border-color: #ebebeb
    border-width: (0.02 * $icon_width) 0px
    border-radius: (0.02 * $icon_width)
    flex-shrink: 0
    position: relative
    margin: (0.02 * $icon_width) 0
    will-change: transform, opacity

    &:after
      content: ""
      display: block
      width: 100%
      height: 100%
      box-sizing: border-box
      border: solid (0.02 * $icon_width) #2d2d2d
      @media (prefers-color-scheme: light)
        border-color: #ebebeb

    &.active
      border-width: (0.02 * $icon_width)
      animation: .5s cubic-bezier(.5,0,.8,1) infinite alternate switch_blink
      z-index: 10
      @media (prefers-color-scheme: light)
        animation-name: switch_blink-light
        box-shadow: 0 (0.01 * $icon_width) 1px #ccc

    &.new
      opacity: 0

      &~.switch_icon
        transform: translate(calc(-0.02 * var(--icon_width) - var(--icon_width)), 0px)
        margin-right: (0.02 * $icon_width)
        .switch_and_play &
          transform: translate(calc(-0.02 * var(--icon_width) - var(--icon_width)), 0px)
          margin-right: (0.02 * $icon_width)
          animation: calc(28s/60) ease forwards calc(28s/60) switch_slide

      .switch_and_play &
        animation: calc(28s/60) ease forwards calc(28s/60) switch_add, .5s cubic-bezier(.5,0,.8,1) infinite alternate calc(28s/60) switch_blink
        @media (prefers-color-scheme: light)
          animation: calc(28s/60) ease forwards calc(28s/60) switch_add, .5s cubic-bezier(.5,0,.8,1) infinite alternate calc(28s/60) switch_blink-light

    :global(img)
      --icon_width: $icon_width
      width: calc(100% - (0.04 * var(--icon_width)))
      height: calc(100% - (0.04 * var(--icon_width)))
      position: absolute
      top: (0.02 * $icon_width)
      left: (0.02 * $icon_width)
      border: none
      .switch_and_play &:global(.switch_real)
        animation: calc(28s/60) ease forwards calc(28s/60) switch_fade

  :global(.switch_phantom)
    visibility: hidden
    opacity: 0.8
    transform: scale(1)
    transition: calc(16s/60) cubic-bezier(0,.1,.35,1)
    transition-property: opacity, transform
    .open &
      visibility: visible
      opacity: 0.1
      transform: scale(1.27)

  .switch_cover
    width: 100%
    height: 100%
    position: absolute
    background-color: #101010
    z-index: 50
    top: 0
    opacity: 0
    visibility: hidden
    transition: opacity calc(12s/60) ease-out calc(16s/60)
    .open &
      visibility: visible
      opacity: 1

@keyframes switch_slide{
  0%{
    transform: translate(calc(-0.02 * var(--icon_width) - var(--icon_width)), 0px)
  }
  42.85%, 100%{
    transform: translate(calc(-0.02 * 0vw - 0vw), 0px)
  }
}

@keyframes switch_add{
  0%, 42.85%{
    opacity: 0
  }
  100%{
    opacity: 1
  }
}

@keyframes switch_fade{
  0%, 71.42%{
    opacity: 0
  }
  100%{
    opacity: 1
  }
}

@keyframes switch_blink{
  from{
    border-color: #21a1ca
  }
  to{
    border-color: #8bf8fa
  }
}

@keyframes switch_blink-light{
  from{
    border-color: #0aa8ae
  }
  to{
    border-color: #51facf
  }
}
</style>
