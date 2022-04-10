<script lang="ts">
  /** 半角スペースで分割した文字列 */
  export let string = '';
</script>

{#if string.includes('\n')}
  {#each string.split('\n') as line}
    <div>
      {#each line.split(' ') as chunk}
        <span>{chunk}</span>
      {/each}
    </div>
  {/each}
{:else}
  {#each string.split(' ') as chunk}
    <span>{chunk}</span>
  {/each}
{/if}

<style lang="stylus">
  span
    display: inline-block
</style>
