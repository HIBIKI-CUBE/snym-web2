<script lang="ts">
  import Picture from '../components/picture.svelte';
  import { onMount } from 'svelte';
  import { status } from '../stores/status';
  import { _ } from 'svelte-i18n';

  let commandsCount = 0;

  const command = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];

  const command_touch = [
    { x: [0, 1], y: [0, 1 / 3] },
    { x: [0, 1], y: [0, 1 / 3] },
    { x: [0, 1], y: [2 / 3, 1] },
    { x: [0, 1], y: [2 / 3, 1] },
    { x: [0, 1 / 3], y: [0, 1] },
    { x: [2 / 3, 1], y: [0, 1] },
    { x: [0, 1 / 3], y: [0, 1] },
    { x: [2 / 3, 1], y: [0, 1] },
    { x: [1 / 3, 2 / 3], y: [1 / 3, 2 / 3] },
    { x: [1 / 3, 2 / 3], y: [1 / 3, 2 / 3] }
  ];

  let heroElement: HTMLElement,
    spotlightElement: HTMLElement,
    pictureElement: HTMLElement,
    darkOverElement: HTMLElement,
    spotlightPosition = { x: 0, y: 0 },
    autoAnimate = true,
    isSpotlightHidden = false,
    isSpotlightEnabled = false,
    width = 0,
    height = 0;

  function spotlight() {
    const pos = {
      x: spotlightPosition.x - width / 2,
      y: spotlightPosition.y - height / 2 - scrollY
    };
    spotlightElement.style.transform = `perspective(800px)
      rotate(${(pos.x < 0 ? 180 : 0) + (Math.atan(pos.y / pos.x) * 180) / Math.PI}deg)
      scaleY(${
        1 - 0.1 * Math.sqrt(Math.pow(pos.x / (width / 2), 2) + Math.pow(pos.y / (height / 2), 2))
      })
      translateX(${Math.sqrt(Math.pow(pos.x, 2) + Math.pow(pos.y, 2))}px)
      rotateY(${
        -10 * Math.sqrt(Math.pow(pos.x / (width / 2), 2) + Math.pow(pos.y / (height / 2), 2))
      }deg)
      translateZ(50px)`;
    pictureElement.style.filter = `drop-shadow(${pos.x / 20}px ${pos.y / 5}px 5px #000)`;
  }

  function gaming(time = 0, lastTime = 0, hue = 0, duration = 3000) {
    hue += (360 / duration) * (time - lastTime || time);
    hue -= hue >= 360 ? 360 : 0;
    document.documentElement.style.setProperty('--gaming-bg', `hsl(${Math.round(hue)}, 100%, 50%)`);
    lastTime = time;
    requestAnimationFrame((time) => gaming(time, lastTime, hue, duration));
  }

  onMount(() => {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    pictureElement =
      pictureElement ||
      <HTMLElement>Array.from(heroElement.children).filter((v) => v.nodeName == 'PICTURE')[0];

    function cancelAnimation() {
      if (autoAnimate) {
        autoAnimate = false;
        requestAnimationFrame(spotlight);
      }
    }

    function updatePosition(x: number, y: number) {
      if (!isSpotlightHidden || isSpotlightEnabled) {
        spotlightPosition.x = x;
        spotlightPosition.y = y;
        requestAnimationFrame(spotlight);
      }
    }

    setTimeout(() => {
      if (!isSpotlightHidden) {
        darkOverElement.classList.remove('spotlight-mode');
        heroElement.classList.remove('spotlight-mode');
        setTimeout(() => (isSpotlightHidden = true), 1000);
        setTimeout(() => heroElement.classList.add('isMinimized', 'isAnimating'), 500);
        setTimeout(() => {
          let evt = document.createEvent('HTMLEvents');
          evt.initEvent('scroll', true, true);
          document.body.dispatchEvent(evt);
          heroElement.classList.remove('isAnimating');
          pictureElement.classList.remove('isAnimating');
        }, 2500);
      }
    }, 5000);

    ['click', 'mousemove', 'touchstart', 'touchmove'].forEach((eventType) => {
      addEventListener(eventType, (e) => {
        cancelAnimation();
        e instanceof MouseEvent && eventType.includes('move') && updatePosition(e.pageX, e.pageY);
      });
    });

    function startGaming() {
      if (++commandsCount == command.length) {
        $status.gaming = true
        requestAnimationFrame(gaming);
        heroElement.classList.add('gaming');
      }
    }

    addEventListener(
      'keydown',
      (e) => {
        if (e.key == command[commandsCount]) {
          startGaming();
        } else commandsCount = 0;
      },
      { passive: true }
    );

    heroElement.addEventListener(
      'touchstart',
      (e) => {
        const size = heroElement.getBoundingClientRect();
        const x = (e.changedTouches[0].pageX - size.left + scrollX) / size.width;
        const y = (e.changedTouches[0].pageY - size.top + scrollY) / size.height;
        const rect = command_touch[commandsCount];
        if (rect.x[0] <= x && x <= rect.x[1] && rect.y[0] <= y && y <= rect.y[1]) {
          startGaming();
        } else commandsCount = 0;
      },
      { passive: true }
    );

    addEventListener('resize', () => {
      if (!isSpotlightHidden || isSpotlightEnabled) {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        requestAnimationFrame(spotlight);
      }
    });

    addEventListener('scroll', () => {
      if (!isSpotlightHidden) {
        darkOverElement.classList.remove('spotlight-mode');
        heroElement.classList.remove('spotlight-mode');
        setTimeout(() => (isSpotlightHidden = true), 1000);
      }
    });

    heroElement.addEventListener('click', (e) => {
      if (isSpotlightEnabled) {
        darkOverElement.classList.remove('spotlight-mode');
        heroElement.classList.remove('spotlight-mode');
        setTimeout(() => (isSpotlightEnabled = false), 1000);
      } else {
        isSpotlightEnabled = true;
        darkOverElement.classList.add('spotlight-mode');
        heroElement.classList.add('spotlight-mode');
      }
      spotlightPosition.x = e.pageX;
      spotlightPosition.y = e.pageY;
      requestAnimationFrame(spotlight);
    });
  });
</script>

<section bind:this={heroElement} class="spotlight-mode hero">
  <Picture
    class="hero_picture {autoAnimate ? 'isAnimating' : ''}"
    imgId="hero_img"
    imgClass="hero_img"
    alt={$_('hero_alt')}
    imageTypes={['webp', 'png']}
    sizes="70vw"
    srcName={$_('hero_src')}
    loadLazy={false}
  />
</section>

<div bind:this={darkOverElement} id="dark-over" class="spotlight-mode">
  <div bind:this={spotlightElement} id="spotlight" class={autoAnimate ? 'isAnimating' : ''} />
</div>
<section class="shadow spotlight-mode isAnimating isMinimized gaming">
  <picture class="shadow hero_picture isAnimating"><img class="shadow hero_img" alt="" /></picture>
</section>

<style lang="stylus">
  .shadow
    display none

  .hero
    background-color: black
    :global(.hero_picture)
      filter drop-shadow(0px 0px 5px #000)
      will-change filter
      transform translateZ(0)
      padding 0 15vw
      :global(.hero_img)
        width: 70vw;
        height: 100%;
        object-fit: contain;
    :global(.hero_picture.isAnimating)
      animation spotlight-shadow-animation 4s ease-in-out infinite both alternate

  #dark-over
    position fixed
    top 0
    z-index 3000
    perspective 800px
    display flex
    width 100vw
    height 100vh
    justify-content center
    align-items center
    background #000000D8
    mix-blend-mode hard-light
    pointer-events none
    opacity 0
    transition-property opacity
    transition-duration 1s

    &.spotlight-mode
      opacity 1

    @media screen and (orientation: portrait)
      display none

  #spotlight
    width 10vw
    height 10vw
    background #EEDA
    border-radius 50%
    filter blur(10px)

    &.isAnimating
      animation spotlight-animation 4s ease-in-out infinite both alternate

  section
    height 50vh
    z-index 1000
    display flex
    justify-content center
    position relative
    @media screen and (orientation: landscape)
      height calc(100vh - var(--base-size) - env(safe-area-inset-bottom))
      &.isAnimating
        transition height 2s ease-in-out
      &.isMinimized
        height calc(70vw / var(--hero-img-width) * var(--hero-img-height) * 2)

    &:before
      content ''
      z-index -1
      width 100%
      height 100%
      display block
      position absolute
      top var(--base-size)
      left 0
      opacity 0
      transition-property opacity
      transition-duration 1s
      @media screen and (orientation: landscape)
        background linear-gradient(0deg, transparent, #333 40%, #333 60%, transparent);
      ^[0].spotlight-mode^[1..1]
        opacity 1
      ^[0].isMinimized^[1..1]
        height calc(70vw / var(--hero-img-width) * var(--hero-img-height) * 2)

    &.gaming:after
      content ''
      width 100vw
      height 50vh
      z-index 2000
      @media screen and (orientation: landscape)
        height calc(100vh - var(--base-size) - env(safe-area-inset-bottom))
        ^[0].isAnimating^[1..1]
          transition height 2s ease-in-out
        ^[0].isMinimized^[1..1]
          height calc(70vw / var(--hero-img-width) * var(--hero-img-height) * 2)
      display block
      position absolute
      mix-blend-mode multiply
      background-color: var(--gaming-bg)
      // animation gaming-snym_logo 5s linear infinite

  @keyframes spotlight-animation
    0%
      transform perspective(800px) scaleY(0.9) translateX(calc(-50vw + 50%)) rotateY(10deg) translateZ(50px) translateY(calc(var(--base-size) / 2))
    50%
      transform perspective(800px) scaleY(1) translateX(0) rotateY(0deg) translateZ(50px) translateY(calc(var(--base-size) / 2))
    100%
      transform perspective(800px) scaleY(0.9) translateX(calc(50vw - 50%)) rotateY(-10deg) translateZ(50px) translateY(calc(var(--base-size) / 2))

  @keyframes spotlight-shadow-animation
    0%
      filter drop-shadow(-20px 0px 5px #000)
    50%
      filter drop-shadow(0px 0px 5px #000)
    100%
      filter drop-shadow(20px 0px 5px #000)

  @keyframes gaming-snym_logo
    0%
      filter hue-rotate(0deg)
    100%
      filter hue-rotate(359deg)
</style>
