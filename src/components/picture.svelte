<script lang="ts">
  export let target = null,
    title = null,
    alt: Required<string>,
    imageTypes = ['png'],
    sizes = '',
    sizeSet = [1500, 1250, 1000, 750, 500, 250, 200, 150, 100, 50],
    fallbackSize = 1000,
    directory = '/',
    srcName = '',
    imgClass = null,
    imgId = null;

  function generateSrcset(imageType: String) {
    return sizeSet.map((v) => `${directory}${srcName}-${v}w.${imageType}`).join(', ');
  }
</script>

<picture data-target={target} class={$$props.class} {title}>
  {#each imageTypes as imageType}
    <source type="image/{imageType}" {sizes} srcset={generateSrcset(imageType)} />
  {/each}
  <img
    id={imgId}
    class={imgClass}
    src="{directory}{srcName}-{fallbackSize}w.{imageTypes.slice(-1)[0]}"
    {alt}
  />
</picture>
