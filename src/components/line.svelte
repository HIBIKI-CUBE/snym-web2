<script lang="ts">
  import { elements } from '../stores/elements';
  import InPageLink from './inPageLink.svelte';
  import { locale } from 'svelte-i18n';

  /** 半角スペースで分割した文字列(スペース２つで通常のスペースを表示) */
  export let content: string = '',
    mdMode = false,
    spaceSplit = false,
    noLine = false;

  function processMd(input: string) {
    let result: string[] = [input];
    if (!input.match(/\[.+?\]\(.+?\)/g)) {
      return result;
    }
    input.match(/\[.+?\]\(.+?\)/g).forEach((v) => {
      const tmp = result.pop().split(v);
      tmp.splice(1, 0, v);
      result = result.concat(tmp);
    });
    return result;
  }

  function splitDualSpace(input: string) {
    return (
      spaceSplit
        ? input
          .replace(/\ \ /g, '\t ')
          .split(' ')
          .map((v) => v.replace(/\t/g, ' '))
        : [input]
    );
  }
</script>

{#if mdMode}
  {#if content.includes('\n')}
    {#each content.split('\n') as line}
      <div>
        {#each processMd(line) as rawChunk}
          {#if rawChunk.match(/\[.+?\]\(.+?\)/)}
            {#if rawChunk.match(/\((#.+?)\)/)}
              <a href=".#" data-target={rawChunk.match(/\((#.+?)\)/)[1]}>
                {#each splitDualSpace(rawChunk.match(/\[(.*?)\]/)[1]) as chunk}
                  <span class="chunk {noLine && 'noLine'}">{chunk}</span>
                {/each}
              </a>
            {:else}
              <a href={rawChunk.match(/\((.+?)\)/)[1]}>
                {#each splitDualSpace(rawChunk.match(/\[(.*?)\]/)[1]) as chunk}
                  <span class="chunk {noLine && 'noLine'}">{chunk}</span>
                {/each}
              </a>
            {/if}
          {:else}
            {#each splitDualSpace(rawChunk) as chunk}
              <span class="chunk {noLine && 'noLine'}">{chunk}</span>
            {/each}
          {/if}
        {/each}
      </div>
    {/each}
  {:else}
    {#each processMd(content) as rawChunk}
      {#if rawChunk.match(/\[.+?\]\(.+?\)/)}
        {#if rawChunk.match(/\((#.+?)\)/)}
          <InPageLink target={$elements[rawChunk.match(/\(#(.+?)\)/)[1]]}>
            {#each splitDualSpace(rawChunk.match(/\[(.*?)\]/)[1]) as chunk}
              <span class="chunk {noLine && 'noLine'}">{chunk}</span>
            {/each}
          </InPageLink>
        {:else}
          <a href={rawChunk.match(/\((.+?)\)/)[1]}>
            {#each splitDualSpace(rawChunk.match(/\[(.*?)\]/)[1]) as chunk}
              <span class="chunk {noLine && 'noLine'}">{chunk}</span>
            {/each}
          </a>
        {/if}
      {:else}
        {#each splitDualSpace(rawChunk) as chunk}
          <span class="chunk {noLine && 'noLine'}">{chunk}</span>
        {/each}
      {/if}
    {/each}
  {/if}
{:else if content.includes('\n')}
  {#each content.split('\n') as line}
    <div>
      {#each splitDualSpace(line) as chunk}
        <span class="chunk {noLine && 'noLine'}">{chunk}</span>
      {/each}
    </div>
  {/each}
{:else}
  {#each splitDualSpace(content) as chunk}
    <span class="chunk {noLine && 'noLine'}">{chunk}</span>
  {/each}
{/if}

<style lang="stylus">
  a
    text-decoration: none
    white-space: normal!important

  .chunk
    display: inline-block
    white-space: pre-wrap

    :global(a) &:not(.noLine)
      text-decoration: underline
</style>
