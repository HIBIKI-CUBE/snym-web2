<script lang="ts">
  import Picture from '../components/picture.svelte';
  import Line from '../components/line.svelte';
  import Frame from '../components/frame.svelte';
  import Header from '../components/header.svelte';
  import Hero from '../components/hero.svelte';
  import Youtube from '../components/youtube-iframe.svelte';
  import Switch from '../components/switch.svelte';
  import Steam from '../components/steam.svelte';
  import Footer from '../components/footer.svelte';
  import Member from '../components/member.svelte';

  const memberIconSizeSet = [400, 350, 300, 250, 200, 150, 100, 50];
</script>

<svelte:head>
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
      <h2>PREDATOR AND WRECK 捕食者と崩壊</h2>
      <div class="flex-container">
        <Frame title="あらすじ" liquid style="align-items:flex-start" id="story">
          <p>
            <Line
              string="宇宙 ステーション から 遭難信号 を 受信し、 爆発事故 の 調査 と 生存者 の 捜索 に 向かったが、 そこで 人間 を 捕食 する 未確認生物 に 遭遇 して しまう。"
            />
          </p>
          <p>
            <Line
              string="未確認生物 の 謎 を 解き明かし、 無事 に 脱出 する こと が できる のか。"
            />
          </p>
        </Frame>
        <Frame title="ゲーム情報" id="game_info">
          <table class="content">
            <tr>
              <td>ジャンル</td>
              <td>
                <Line string="一人称, SF, ホラー" />
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
              <td>Nintendo Switch</td>
            </tr>
            <tr>
              <td>開発元</td>
              <td>Snym</td>
            </tr>
          </table>
        </Frame>
      </div>
      <div class="steam_wrapper">
        <Steam />
      </div>
      <div class="switch_wrapper">
        <Switch />
      </div>
      <Frame title="トレーラー映像" id="trailer">
        <Youtube id="pBmCvkxQT5U" title="PREDATOR AND WRECK、Trial版のトレーラー映像の埋め込み" />
      </Frame>
      <section>
        <h3>使用素材・環境</h3>
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
      </section>
      <section>
        <h3 id="team">チームSnym（スナイム）とは</h3>
        <div class="flex-container">
          <Frame title="概要" class="flex_half-on_pc">
            <p>
              2019年8月に当時東京電機大学の1年生4人により発足。
              メインメンバー4人＋サブメンバー4人で構成された学生によるゲーム制作チームです。また、各メンバーは個々のフィールドでも精力的に活動していますので、興味のある方は下記の<a
                href="return;"
                data-target="member">メンバー紹介</a
              >より足をお運びください。
            </p>
          </Frame>
          <Frame title="来歴" class="flex_half-on_pc">
            <table>
              <tr>
                <td><time datetime="2019-08">2019年8月</time></td>
                <td>東京電機大学にて発足</td>
              </tr>
              <tr>
                <td><time datetime="2019-12">12月</time></td>
                <td
                  >C97(コミックマーケット)でSRCサークル内のブースでPREDATOR AND WRECK TRIAL
                  VERSIONを頒布</td
                >
              </tr>
              <tr>
                <td><time datetime="2020-04">2020年4月</time></td>
                <td>C98(コミックマーケット)に当選するが中止</td>
              </tr>
              <tr>
                <td><time datetime="2020-10">10月</time></td>
                <td
                  ><a href="https://twitter.com/GC_koushien/status/1313736347568332802?s=20"
                    >ゲームクリエイター甲子園 9月話題賞受賞</a
                  ></td
                >
              </tr>
              <tr>
                <td><time datetime="2020-11">11月</time></td>
                <td
                  ><a href="https://twitter.com/GC_koushien/status/1327186590469263361?s=20"
                    >ゲームクリエイター甲子園 10月話題賞受賞</a
                  ></td
                >
              </tr>
              <tr>
                <td><time datetime="2020-11" data-notext="true" /></td>
                <td>デジゲー博にてPREDATOR AND WRECK ALPHAを販売</td>
              </tr>
              <tr>
                <td><time datetime="2020-12">12月</time></td>
                <td
                  ><a href="https://twitter.com/Snym_Games/status/1340260019439247360?s=20"
                    >ゲームクリエイター甲子園でファーストインパクト様から企業賞を受賞</a
                  >
                </td>
              </tr>
              <tr>
                <td><time datetime="2020-12" data-notext="true" /></td>
                <td
                  ><a href="https://twitter.com/GC_koushien/status/1340259582199795713?s=20"
                    >ゲームクリエイター甲子園でユーザー大賞を受賞</a
                  >
                </td>
              </tr>
              <tr>
                <td><time datetime="2021-2">2021年2月</time></td>
                <td
                  ><a href="https://www.dendai.ac.jp/dendai-people/20210212-01.html"
                    >Snymの活動が東京電機大学のWebサイトに掲載</a
                  >
                </td>
              </tr>
              <tr>
                <td><time datetime="2021-9-16">9月16日</time></td>
                <td
                  ><a href="https://store-jp.nintendo.com/list/software/70010000043070.html"
                    >「PREDATOR AND WRECK 捕食者と崩壊」を発売</a
                  ></td
                >
              </tr>
            </table>
          </Frame>
        </div>
      </section>
      <Frame title="連絡先">
        <p>
          ご意見、ご感想はTwitterチームアカウント<a href="https://twitter.com/Snym_Games"
            >@Snym_Games</a
          >、またはGmailへお願いします。チームSnym公式ツイッターでは日々の活動やゲームの制作状況をつぶやいているのでよろしければTwitterのフォローをお願いします。
        </p>
        <ul>
          <li>Twitter: <a href="https://twitter.com/Snym_Games">@Snym_Games</a></li>
          <li>Gmail: snymgamescontact@gmail.com</li>
        </ul>
      </Frame>
    </article>
  </section>
  <section>
    <article>
      <h2 class="main_member_title" id="member">制作者一覧</h2>
      <section>
        <h3>Snym</h3>
        <ul class="flex-container members">
          <li class="flex_half-on_pc">
            <Member name="SHOYU" id="shoyu" post="チームリーダー ・ ディレクター ・ プログラマー" twitter="53kcal4"/>
          </li>
          <li class="flex_half-on_pc">
            <Member name="NEO" id="neo" post="マップ設計・サウンドクリエイター" twitter="neo_97m"/>
          </li>
          <li class="flex_half-on_pc">
            <Member name="I_D" id="iida" post="プログラマー・テクニカルディレクター" twitter="GoodPaddyField7"/>
          </li>
          <li class="flex_half-on_pc">
            <Member name="OK_NO" id="okno" post="ギミックプログラマー・デバッガー" twitter="OKNO38934114"/>
          </li>
        </ul>
        <h3>制作協力</h3>
        <ul class="flex-container members">
          <li class="flex_half-on_pc">
            <Member name="NAMI" post="デバッガー"/>
          </li>
          <li class="flex_half-on_pc">
            <Member name="AMU" id="ayumu" post="デザイナー" twitter="Amu_dsgn" sizeSet={[24, 48, 72]}/>
          </li>
          <li class="flex_half-on_pc flex-container main_member_id">
            <Member name="SIHYUN" post="サウンドクリエイター"/>
          </li>
          <li class="flex_half-on_pc">
            <Member name="HIBIKI CUBE" id="hibiki_cube" post="Webクリエイター ・ アセットクリエイター" twitter="hibiki_cube"/>
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

    @media screen and (max-width: 180ch)
      flex 0 0 100%

  :global(.flex_half)
    flex 0 0 47.5%

  // :global(.liquid)
  //   flex 1
  //   margin-right calc(var(--article-width) * 0.05)

  :global(.pc-hide)
    @media screen and (max-width: 180ch)
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
  
  .switch_wrapper
    position: relative
    left: calc((100vw - var(--article-width)) / 2 * -1)

  .members
    flex-direction row
</style>
