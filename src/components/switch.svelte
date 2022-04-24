<script lang="ts">
  import { onMount } from 'svelte';
  import Picture from '../components/picture.svelte';

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
    <div class="joy-con-animation L">
      <JoyCon L />
    </div>

    <div class="joy-con-animation R">
      <JoyCon R />
    </div>
  </div>

  <a
    href="https://store-jp.nintendo.com/list/software/70010000043070.html"
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
                alt="SnymのPredator And Wreakのアイコン画像"
                imageTypes={['webp', 'jpg']}
                sizes="25vw"
                sizeSet={iconSizeSet}
                fallbackSize={iconSizeSet[0]}
                srcName="switch_icon"
              />
            {/each}
          </div>
          {#each Array(10) as _}
            <div class="switch_icon" />
          {/each}
        </div>
        <h2>My Nintendo Storeはこちら</h2>
      </div>
    </div>
  </a>
</div>

<style lang="stylus">
  .switch
    position: relative;
    component_width = 90vw
    left: ((100vw - component_width) / 2)
    width component_width
    body_width = 72.5%;
    display_width = 88%;
    --switch-width: (component_width * body_width * display_width / 100 / 100)
    --icon-width: calc(var(--switch-width) * 256/1280)
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
      
      .joy-con-animation
        width 15%
        opacity 0
        transform: translateY(-200%)
        transition: transform calc(56s/60) cubic-bezier(0.16, 1, 0.3, 1), opacity calc(14s/60) cubic-bezier(0.16, 1, 0.3, 1)

        &.R
          transition-delay: calc(5s/60)


    &.switch_and_play .joy-con-animation
      opacity 1
      transform: translateY(0vh)

    .body
      width: body_width
      height: 100%
      position: absolute;
      border-radius: 5px
      top: 0
      left: ((100% - body_width) / 2);
      background-color: #050505;
      display: flex;
      justify-content: center
      align-items: center

      .display
        width: 88%;
        aspect-ratio: 16/9
        background-color: #2d2d2d
        @media (prefers-color-scheme: light)
          background-color: #ebebeb
        text-align: center
        position: relative
        padding-top: calc(var(--switch-width) * 194/1280 - (var(--icon-width) * (1.27 - 1)))
        box-sizing: border-box

  .icons
    display: flex
    overflow-x: scroll
    -ms-overflow-style: none
    scrollbar-width: none
    padding: calc(var(--icon-width) * (1.27 - 1) / 2) calc(var(--switch-width) * 105.5/1280)

    &::-webkit-scrollbar
      display: none

    &:after
      content: ""
      display: block
      width: (100% * 1220/1280)
      height: calc(max(100% * 1/1280, 0.5px))
      background-color: #fff
      @media (prefers-color-scheme: light)
        height: calc(max(100% * 3/1280, 1.5px))
        background-color: #b5b5b5
      position: absolute
      bottom: (144/1280 * 100%)
      left: (30/1280 * 100%)

  .switch_icon
    width: var(--icon-width)
    height: var(--icon-width)
    background-color: #888
    border: solid 0px #2d2d2d
    @media (prefers-color-scheme: light)
      border-color: #ebebeb
    border-width: calc(0.02 * var(--icon-width)) 0px
    border-radius: calc(0.02 * var(--icon-width))
    flex-shrink: 0
    position: relative
    margin-top: calc(0.02 * var(--icon-width))
    margin-bottom: calc(0.02 * var(--icon-width))

    &:after
      content: ""
      display: block
      width: 100%
      height: 100%
      box-sizing: border-box
      border: solid calc(0.02 * var(--icon-width)) #2d2d2d
      @media (prefers-color-scheme: light)
        border-color: #ebebeb

    &.active
      border-width: calc(0.02 * var(--icon-width))
      animation: .5s cubic-bezier(.5,0,.8,1) infinite alternate switch_blink
      z-index: 10
      @media (prefers-color-scheme: light)
        animation-name: switch_blink-light
        box-shadow: 0 calc(0.01 * var(--icon-width)) 1px #ccc

    &.new
      opacity: 0

      &~.switch_icon
        transform: translate(calc(-0.02 * var(--icon-width) - var(--icon-width)), 0px)
        margin-right: calc(0.02 * var(--icon-width))
        .switch_and_play &
          transform: translate(calc(-0.02 * var(--icon-width) - var(--icon-width)), 0px)
          margin-right: calc(0.02 * var(--icon-width))
          animation: calc(28s/60) ease forwards calc(28s/60) switch_slide

      .switch_and_play &
        animation: calc(28s/60) ease forwards calc(28s/60) switch_add, .5s cubic-bezier(.5,0,.8,1) infinite alternate calc(28s/60) switch_blink
        @media (prefers-color-scheme: light)
          animation: calc(28s/60) ease forwards calc(28s/60) switch_add, .5s cubic-bezier(.5,0,.8,1) infinite alternate calc(28s/60) switch_blink-light

    :global(img)
      width: calc(100% - 0.04 * var(--icon-width))
      height: calc(100% - 0.04 * var(--icon-width))
      position: absolute
      top: calc(0.02 * var(--icon-width))
      left: calc(0.02 * var(--icon-width))
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
    transform: translate(calc(-0.02 * var(--icon-width) - var(--icon-width)), 0px)
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
