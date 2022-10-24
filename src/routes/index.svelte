<script lang="ts">
  import Line from '../components/line.svelte';
  import Frame from '../components/frame.svelte';
  import Header from '../components/header.svelte';
  import Hero from '../components/hero.svelte';
  import Youtube from '../components/youtube-iframe.svelte';
  import Switch from '../components/switch.svelte';
  import Steam from '../components/steam.svelte';
  import Footer from '../components/footer.svelte';
  import Member from '../components/member.svelte';
  import { elements } from '../stores/elements';
  import dateFormat from 'dateformat';
  import { dev } from '$app/env';
  import { addMessages, init, getLocaleFromNavigator, _, locale } from 'svelte-i18n';
  import en from '../en.json';
  import ja from '../ja.json';

  addMessages('ja', ja);
  addMessages('en', en);

  init({
    fallbackLocale: 'ja',
    initialLocale: getLocaleFromNavigator()
  });

  const promiseContent = (async () => (await fetch('/contents')).json())();
  const promiseHistory = (async () => (await fetch('/history')).json())();
</script>

<svelte:head>
  {#if !dev}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NRG67B8PR7"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-NRG67B8PR7');
    </script>
  {/if}
  <meta name="description" content={$_('head_description')} />
  <title>{$_('head_title')}</title>
  <meta name="theme-color" content="#646464" />
  <style>
    html,
    body {
      margin: 0;
      width: 100vw;
      background-color: var(--bg);
      line-height: 1.5;
      color: var(--main-text-color);
      font-family: -apple-system, 'BlinkMacSystemFont', 'Hiragino Kaku Gothic ProN', 'メイリオ',
        'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }
  </style>
</svelte:head>

<Header />
<main>
  <section id="WORKS">
    <Hero />
    <article>
      <div class="title">{$_('title')}</div>
      <h1><Line content={$_('game_title')} /></h1>
      {#await promiseContent then content}
        {#if ($locale.match(/en/) && content.info_en || content.info) && (!content.infoDue || new Date(content.infoDue).getTime() >= new Date().getTime())}
          <Frame title={$_('info')}>
            <p>
              <Line content={$locale.match(/en/) && content.info_en ? content.info_en : content.info} mdMode spaceSplit={!($locale.match(/en/) && content.info_en)} />
            </p>
          </Frame>
        {/if}
      {/await}
      <div class="flex-container">
        <Frame title={$_('story')} liquid id="story" bind:element={$elements.story}>
          {#await promiseContent then content}
            {#each ($locale.match(/en/) && content.story_en ? content.story_en : content.story).split('\n') as line}
              <p>
                <Line content={line} mdMode spaceSplit={!($locale.match(/en/) && content.story_en)} />
              </p>
            {/each}
          {/await}
        </Frame>
        <Frame title={$_('game-info')} rigid flex id="game_info" bind:element={$elements.game_info}>
          <table class="content">
            <tr>
              <td>{$_('genre')}</td>
              <td>
                <Line content={$_('game_genre')} />
              </td>
            </tr>
            <tr>
              <td>{$_('play-time')}</td>
              <td>{$_('game_play-time')}</td>
            </tr>
            <tr>
              <td>{$_('release-date')}</td>
              <td>{$_('game_release-date')}</td>
            </tr>
            <tr>
              <td>{$_('supported-hardwares')}</td>
              <td>{$_('game_supported-hardwares')}</td>
            </tr>
            <tr>
              <td>{$_('developer')}</td>
              <td>{$_('game_developer')}</td>
            </tr>
          </table>
        </Frame>
      </div>
      <div class="steam_wrapper" bind:this={$elements.buy}>
        <Steam />
      </div>
      <div />
      <div class="switch_wrapper">
        <Switch />
      </div>
      <Frame title={$_('trailer')} flex id="trailer" bind:element={$elements.trailer}>
        {#await promiseContent then content}
          <Youtube id={$locale.match(/en/) && content.youtubeID_en ? content.youtubeID_en : content.youtubeID} title={$_('trailer_title')} />
        {/await}
      </Frame>
      <section class="materials">
        <details>
          <summary>
            <h3>{$_('materials_and_environment')}</h3>
          </summary>
          <div class="flex-container">
            <div class="flex_half-on_pc">
              <h4>{$_('environment')}</h4>
              <ul>
                <li>Unity 2019.1.14f1</li>
                <li>GitHub</li>
                <li>Source Tree</li>
              </ul>
            </div>
            <div class="flex_half-on_pc">
              <h4>{$_('unity-assets')}</h4>
              <ul>
                <li>True Horror - Crawler</li>
                <li>Sci-Fi Facility</li>
                <li>Monster Pack 2</li>
                <li>DOTweenPro</li>
                <li>SpaceCraft 0</li>
                <li>TextMesh Pro</li>
                <li>ATM</li>
              </ul>
              <h4>{$_('other_materials')}</h4>
              <ul>
                <li>icooon7admin</li>
                <li>
                  <a href="http://www.shaderslab.com/demo-19---outline-3d-model.html"
                    >Outlines a 3D model with 2 passes.</a
                  >
                </li>
                <li>{$_('book')}</li>
              </ul>
            </div>
          </div>
        </details>
      </section>
      <section bind:this={$elements.team}>
        <h3 id="team">{$_('what_is_snym')}</h3>
        <div class="flex-container">
          <Frame title={$_('about')}>
            {#await promiseContent then content}
              {#each ($locale.match(/en/) && content.outline_en ? content.outline_en : content.outline).split('\n') as line}
                <p>
                  <Line content={line} mdMode spaceSplit={!($locale.match(/en/) && content.outline_en)} />
                </p>
              {/each}
            {/await}
          </Frame>
          <Frame title={$_('history')} flex>
            <table>
              {#await promiseHistory then history}
                {#each history as entry, i}
                  <tr>
                    <td>
                      <time
                        datetime={dateFormat(entry.date, `yyyy-mm${entry.showDay ? '-dd' : ''}`)}
                      >
                        {dateFormat(
                          entry.date,
                          [
                            { check: 'yyyy', format: `yyyy${$locale.match(/en/) ? '/' : '年'}` },
                            {
                              check: 'mm',
                              format: `m${$locale.match(/en/) ? (entry.showDay ? '/' : '') : '月'}`
                            },
                            { check: 'dd', format: `d${$locale.match(/ja/) ? '日' : ''}` }
                          ]
                            .map(
                              (v) =>
                                `${(() => {
                                  if (v.check == 'dd') {
                                    return entry.showDay ? v.format : '';
                                  } else {
                                    return i == 0 ||
                                      dateFormat(history[i - 1].date, v.check) !=
                                        dateFormat(entry.date, v.check)
                                      ? v.format
                                      : 'n';
                                  }
                                })()}`
                            )
                            .join('')
                        ).replace(/n/g, '')}
                      </time>
                    </td>
                    <td>
                      {#if $locale.match(/en/) ? entry.link_en : entry.link}
                        <a href={$locale.match(/en/) ? entry.link_en : entry.link}>
                          {$locale.match(/en/) && entry.content_en
                            ? entry.content_en
                            : entry.content}
                        </a>
                      {:else}
                        {$locale.match(/en/) && entry.content_en ? entry.content_en : entry.content}
                      {/if}
                    </td>
                  </tr>
                {/each}
              {/await}
            </table>
          </Frame>
        </div>
      </section>
      <Frame title={$_('guidelines')}>
        {#await promiseContent then content}
          {#each ($locale.match(/en/) && content.guideLine_en ? content.guideLine_en : content.guideLine).split('\n') as line}
            <p>
              <Line content={line} mdMode spaceSplit={!($locale.match(/en/) && content.guideLine_en)} />
            </p>
          {/each}
        {/await}
      </Frame>
      <Frame title={$_('contacts')}>
        {#await promiseContent then content}
          {#each ($locale.match(/en/) && content.contact_en ? content.contact_en : content.contact).split('\n') as line}
            <p>
              <Line content={line} mdMode spaceSplit={!($locale.match(/en/) && content.contact_en)} />
            </p>
          {/each}
        {/await}
      </Frame>
    </article>
  </section>
  <section>
    <article bind:this={$elements.member}>
      <h2 class="main_member_title" id="member">{$_('members')}</h2>
      <section>
        <h3>Snym</h3>
        <ul class="flex-container members">
          <li class="flex_half-on_pc">
            <Member name="SHOYU" id="shoyu" post={$_('shoyu_posts')} twitter="53kcal4" />
          </li>
          <li class="flex_half-on_pc">
            <Member name="NEO" id="neo" post={$_('neo_posts')} twitter="neo_97m" />
          </li>
          <li class="flex_half-on_pc">
            <Member name="I_D" id="iida" post={$_('id_posts')} twitter="GoodPaddyField7" />
          </li>
          <li class="flex_half-on_pc">
            <Member name="OK_NO" id="okno" post={$_('okno_posts')} twitter="OKNO38934114" />
          </li>
        </ul>
        <h3>{$_('collaborators')}</h3>
        <ul class="flex-container members">
          <li class="flex_half-on_pc">
            <Member name="NAMI" post={$_('nami_posts')} imageTypes={['webp', 'png']} />
          </li>
          <li class="flex_half-on_pc">
            <Member
              name="AMU"
              id="ayumu"
              post={$_('amu_posts')}
              twitter="Amu_dsgn"
              sizeSet={[24, 48, 72]}
              imageTypes={['webp', 'png']}
            />
          </li>
          <li class="flex_half-on_pc flex-container main_member_id">
            <Member name="SIHYUN" post={$_('sihyun_posts')} imageTypes={['webp', 'png']} />
          </li>
          <li class="flex_half-on_pc">
            <Member
              name="HIBIKI CUBE"
              id="hibiki_cube"
              post={$_('hibiki_posts')}
              twitter="hibiki_cube"
            />
          </li>
        </ul>
      </section>
    </article>
  </section>
</main>
{#await promiseContent}
  <Footer />
{:then content}
  <Footer year={new Date(content.updatedAt).getFullYear()} />
{:catch error}
  <Footer />
{/await}

<style lang="stylus">
  :root
    --base-size 3.5rem
    --base-size-vw 1.2vw
    --article-width 60vw
    @media screen and (orientation: portrait)
      --article-width 85vw
    --navigation-width 70vw
    --font-size-large 2vw
    --font-size-medium 2vw
    --font-size-small 2vw
    --accent-color #7f5
    --accent-text-color #fff
    --ui-bg #646464
    @supports(backdrop-filter blur(10px)) or (-webkit-backdrop-filter blur(10px)) or (-moz-backdrop-filter blur(10px))
      --ui-bg rgba(200,200,200,0.5)
    --ui-bg-hover #888
    --ui-bg-focus #888
    --ui-over-text-color #000
    --ui-over-bg #444
    --ui-over-bg-hover #555
    --ui-text-color #FFF
    --ui-text-hover-color #000
    --main-text-color rgba(255,255,255,1)
    --main-bg rgba(255,255,255,1)
    --bg rgba(0,0,0,1)
    --gaming-bg hsl(0, 100%, 50%)
    --hero-img-width 2000
    --hero-img-height 371

  // ########################################
  :global(.flex-container)
    display flex
    flex-wrap wrap
    justify-content space-between

  :global(.flex-container a)
    width: 100%

  :global(.flex_half-on_pc)
    flex 0 0 47.5%

    @media screen and (max-aspect-ratio: 9/8)
      flex 0 0 100%

  :global(.flex_half)
    flex 0 0 47.5%

  :global(.break-scope)
    display inline-block

  // :global(.liquid)
  //   flex 1
  //   margin-right calc(var(--article-width) * 0.05)

  :global(.pc-hide)
    @media screen and (max-aspect-ratio: 9/8)
      display none

  :global(a)
    color var(--accent-color)
    text-decoration underline

  :global(ul)
    margin 0
    padding 0

  :global(li)
    list-style-type none

  :global(p)
    margin 0.5em 0 0.5em

  :global(table)
    table-layout auto
    border-spacing 0px

  :global(td)
    padding 0px

  :global(td:first-child)
    padding-right 1.5ch
    text-align right
    vertical-align top
    white-space nowrap

  :global(#info+td:last-child)
    white-space nowrap

  :global(td time:not([data-notext]):after)
    content ':'
    margin-left 0.5ch
  
  .title
    font-weight: bold
    font-size: 1.17em
  
  main
    margin-top var(--base-size)
    width 100vw

  article
    padding 0 calc((100vw - var(--article-width)) / 2)
    width var(--article-width)
  
  h1
    font-size 1.8em
  
  .switch_wrapper
    position: relative
    left: calc((100vw - var(--article-width)) / 2 * -1)
    width: 100vw
    overflow-x: hidden

  .members
    flex-direction row
  
  .materials
    margin 2em 0
  
  summary
    h3
      display: inline
</style>
