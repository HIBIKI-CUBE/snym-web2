<script lang="ts">
  import { elements } from '../stores/elements';
  export let target: HTMLElement | number,
    beforeScroll: Function | null = () => {},
    afterScroll: Function | null = () => {};

  const scroll_duration = 400; //ms

  let abort_scroll = false;

  function easeInOutCubic(x: number) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  function startScroll() {
    requestAnimationFrame((time: number) =>
      smoothScroll(
        time,
        time,
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        typeof target == 'number'
          ? target
          : target.getBoundingClientRect().top -
              parseFloat(getComputedStyle(target).marginTop) -
              $elements.header.clientHeight
      )
    );
  }

  function smoothScroll(time: number, start_time: number, origin: number, destination: number) {
    if (time == start_time) {
      beforeScroll();
      requestAnimationFrame((time) => smoothScroll(time, start_time, origin, destination));
      return;
    }
    if (abort_scroll) {
      abort_scroll = false;
      return;
    }
    scrollTo({
      top:
        origin +
        (destination || origin * -1) * easeInOutCubic((time - start_time) / scroll_duration)
    });
    if (time - start_time > scroll_duration) {
      afterScroll();
      return;
    }
    requestAnimationFrame((time) => smoothScroll(time, start_time, origin, destination));
  }
</script>

<svelte:window
  on:touchstart={() => (abort_scroll = true)}
  on:touchend={() => (abort_scroll = false)}
/>

<!-- svelte-ignore a11y-missing-attribute -->
<a class={$$props.class || ''} on:click={startScroll}>
  <slot />
</a>

<style lang="stylus">
  a
    cursor: pointer
</style>
