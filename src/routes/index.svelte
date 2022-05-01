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
  <meta
    name="description"
    content="SFホラーゲーム、PREDATOR AND WRECK 捕食者と崩壊 | プレデター・アンド・レックの公式Webサイト。東京電機大学の学生チームSnym(スナイム)が開発。Nintendo Switchにて9/16より販売開始"
  />
  <title>PREDATOR AND WRECK 捕食者と崩壊 | プレデター・アンド・レック : Snym</title>
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
      <h3>タイトル</h3>
      <h1>PREDATOR AND WRECK 捕食者と崩壊</h1>
      {#await promiseContent then content}
        {#if content.info}
          <Frame title="お知らせ">
            <p>
              <Line content={content.info} mdMode />
            </p>
          </Frame>
        {/if}
      {/await}
      <div class="flex-container">
        <Frame title="あらすじ" liquid id="story" bind:element={$elements.story}>
          {#await promiseContent then content}
            {#each content.story.split('\n') as line}
              <p>
                <Line content={line} mdMode />
              </p>
            {/each}
          {/await}
        </Frame>
        <Frame title="ゲーム情報" rigid flex id="game_info" bind:element={$elements.game_info}>
          <table class="content">
            <tr>
              <td>ジャンル</td>
              <td>
                <Line content="一人称, SF, ホラー" />
              </td>
            </tr>
            <tr>
              <td>プレイ時間</td>
              <td>約3時間</td>
            </tr>
            <tr>
              <td>リリース日</td>
              <td>2021年9月16日</td>
            </tr>
            <tr>
              <td>対応ハード</td>
              <td>PC, Nintendo Switch</td>
            </tr>
            <tr>
              <td>開発元</td>
              <td>Snym</td>
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
      <Frame title="トレーラー映像" flex id="trailer" bind:element={$elements.trailer}>
        {#await promiseContent then content}
          <Youtube
            id={content.youtubeID}
            title="PREDATOR AND WRECK、Trial版のトレーラー映像の埋め込み"
          />
        {/await}
      </Frame>
      <section class="materials">
        <details>
          <summary>
            <h3>使用素材・環境</h3>
          </summary>
          <div class="flex-container">
            <div class="flex_half-on_pc">
              <h4>環境</h4>
              <ul>
                <li>Unity 2019.1.14f1</li>
                <li>GitHub</li>
                <li>Source Tree</li>
              </ul>
            </div>
            <div class="flex_half-on_pc">
              <h4>Unityアセット</h4>
              <ul>
                <li>True Horror - Crawler</li>
                <li>Sci-Fi Facility</li>
                <li>Monster Pack 2</li>
                <li>DOTweenPro</li>
                <li>SpaceCraft 0</li>
                <li>TextMesh Pro</li>
                <li>ATM</li>
              </ul>
              <h4>その他素材</h4>
              <ul>
                <li>icooon7admin</li>
                <li>
                  <a href="http://www.shaderslab.com/demo-19---outline-3d-model.html"
                    >Outlines a 3D model with 2 passes.</a
                  >
                </li>
                <li>稿屋 隆 「泥沼を歩く」</li>
              </ul>
            </div>
          </div>
        </details>
      </section>
      <section bind:this={$elements.team}>
        <h3 id="team">チームSnym（スナイム）とは</h3>
        <div class="flex-container">
          <Frame title="概要">
            {#await promiseContent then content}
              {#each content.outline.split('\n') as line}
                <p>
                  <Line content={line} mdMode />
                </p>
              {/each}
            {/await}
          </Frame>
          <Frame title="来歴" flex>
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
                            { check: 'yyyy', format: 'yyyy年' },
                            { check: 'mm', format: 'm月' },
                            { check: 'dd', format: 'd日' }
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
                      {#if entry.link}
                        <a href={entry.link}>
                          {entry.content}
                        </a>
                      {:else}
                        {entry.content}
                      {/if}
                    </td>
                  </tr>
                {/each}
              {/await}
            </table>
          </Frame>
        </div>
      </section>
      <Frame title="連絡先">
        {#await promiseContent then content}
          {#each content.contact.split('\n') as line}
            <p>
              <Line content={line} mdMode />
            </p>
          {/each}
        {/await}
      </Frame>
    </article>
  </section>
  <section>
    <article bind:this={$elements.member}>
      <h2 class="main_member_title" id="member">制作者一覧</h2>
      <section>
        <h3>Snym</h3>
        <ul class="flex-container members">
          <li class="flex_half-on_pc">
            <Member
              name="SHOYU"
              id="shoyu"
              post="チームリーダー ・ ディレクター ・ プログラマー"
              twitter="53kcal4"
            />
          </li>
          <li class="flex_half-on_pc">
            <Member name="NEO" id="neo" post="マップ設計・サウンドクリエイター" twitter="neo_97m" />
          </li>
          <li class="flex_half-on_pc">
            <Member
              name="I_D"
              id="iida"
              post="プログラマー・テクニカルディレクター"
              twitter="GoodPaddyField7"
            />
          </li>
          <li class="flex_half-on_pc">
            <Member
              name="OK_NO"
              id="okno"
              post="ギミックプログラマー・デバッガー"
              twitter="OKNO38934114"
            />
          </li>
        </ul>
        <h3>制作協力</h3>
        <ul class="flex-container members">
          <li class="flex_half-on_pc">
            <Member name="NAMI" post="デバッガー" imageTypes={['webp', 'png']} />
          </li>
          <li class="flex_half-on_pc">
            <Member
              name="AMU"
              id="ayumu"
              post="デザイナー"
              twitter="Amu_dsgn"
              sizeSet={[24, 48, 72]}
              imageTypes={['webp', 'png']}
            />
          </li>
          <li class="flex_half-on_pc flex-container main_member_id">
            <Member name="SIHYUN" post="サウンドクリエイター" imageTypes={['webp', 'png']} />
          </li>
          <li class="flex_half-on_pc">
            <Member
              name="HIBIKI CUBE"
              id="hibiki_cube"
              post="Webクリエイター ・ アセットクリエイター"
              twitter="hibiki_cube"
            />
          </li>
        </ul>
      </section>
    </article>
  </section>
</main>
<Footer />

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
