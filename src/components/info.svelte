<script lang="ts">
  import Frame from '../components/frame.svelte';
  import Line from '../components/line.svelte';

  const info = fetch('https://snym.microcms.io/api/v1/info', {
    headers: {
      'X-MICROCMS-API-KEY': import.meta.env.VITE_API_KEY as string
    }
  });
</script>

<Frame title="お知らせ">
  <p>
    {#await (async () => {
      return (await info).json();
    })() then res}
      <Line content={res.contents[0].content} mdMode />
    {/await}
  </p>
</Frame>
