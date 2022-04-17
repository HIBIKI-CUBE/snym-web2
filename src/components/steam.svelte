<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import Picture from '../components/picture.svelte';

  import '@splidejs/svelte-splide/css';

  const sizeSet = [2000, 1750, 1500, 1250, 1000, 750, 500, 250];
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let options = {
    type: 'loop',
    easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
    drag: 'free',
    snap: true,
    autoplay: true,
    speed: 800,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    reducedMotion: {
      type: 'fade'
    }
  };
</script>

<a href="https://store.steampowered.com/app/1920210/PREDATOR_AND_WRECK/">
  <div class="display">
    <Splide {options} aria-label="PREDATOR AND WRECK 捕食者と崩壊のスクリーンショット">
      {#each imgs as img}
        <SplideSlide>
          <Picture
            imgClass="slide_img"
            alt="PREDATOR AND WRECK 捕食者と崩壊のスクリーンショット {img}"
            imageTypes={['webp', 'jpg']}
            sizes="(orientation: portrait) 56vw, 81vw"
            {sizeSet}
            fallbackSize={1000}
            srcName="ss{img}"
          />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
  <div class="stand" />
  <h2 class="steam_text">Steamはこちら</h2>
</a>

<style lang="stylus">
  :global(.slide_img)
    width: 100%
  
  a
    position: relative
    display: block
    width: 100%
  
  .display
    width: 100%
    padding: 2vw
    margin-top: 2em
    box-sizing: border-box
    filter: drop-shadow(#244d1a 0 0 20px)
    background-color: #050505
    border-radius: 5px
    position: relative
    z-index 1
    &:after
      content: "SNYM"
      position: absolute
      font-size: 0.8vw
      line-height: 2vw
      width: calc(100% - 2em * 2)
      text-align: center
      font-weight: bold
      color: #aaaaaa
  
  .stand
    height: 6vw
    width: 50%
    margin: 0 auto 2em
    background: linear-gradient(0deg, rgba(32,32,32,1) 0%, rgba(56,56,56,1) 25%, rgba(33,33,33,1) 30%, rgba(47,47,47,1) 35%, rgba(23,23,23,1) 100%);
    clip-path: polygon(27% 0, 73% 0, 70% 70%, 100% 100%, 0 100%, 30% 70%);
  
  .steam_text
    position: absolute
    bottom: 0
    text-align: center
    height: 6vw
    line-height: 6vw
    margin: 0
    width: 100%
    font-size: calc(2.5vw * 1.5)
</style>
