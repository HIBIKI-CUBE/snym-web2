<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  export let rootMargin = '30%',
    id: string,
    title: string = 'YouTube動画の埋め込み';

  let element;
  let intersecting = false;
</script>

<div class="responsive-wrapper">
  {#if intersecting}
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/{id}"
      frameborder="0"
      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
      allowfullscreen
      loading="lazy"
      {title}
    >
      {title}
    </iframe>
  {:else}
    <IntersectionObserver {element} bind:intersecting {rootMargin}>
      <a href="https://www.youtube.com/watch?v={id}">
        <div class="temp" bind:this={element}>{title}</div>
      </a>
    </IntersectionObserver>
  {/if}
</div>

<style lang="stylus">
.responsive-wrapper
  position relative
  padding-top calc((9 / 16) * 100%)
  width 100%

iframe, .temp
  width 100%
  height 100%
  position absolute
  top 0
  left 0
  background-color var(--bg)
</style>
