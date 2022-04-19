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
        <Frame title="あらすじ" liquid style="align-items:flex-start">
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
        <Frame title="ゲーム情報">
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
      <Frame title="トレーラー映像">
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
        <ul class="flex-container main_member_list">
          <li class="flex_half-on_pc">
            <a
              href="https://twitter.com/53kcal4"
              data-twitter="53kcal4"
              class="main_member_id flex-container"
            >
              <Picture
                class="main_member_avatar_parent"
                imgClass="main_member_avatar"
                alt="SnymのメンバーのSHOYUの画像"
                imageTypes={['webp', 'jpg']}
                sizes="(max-width: 600px) 15vw, 0.5vw"
                sizeSet={memberIconSizeSet}
                fallbackSize={memberIconSizeSet[0]}
                srcName="shoyu"
              />
              <div class="main_member_id_layout">
                <h4 class="main_member_name">SHOYU</h4>
                <div class="main_member_post">
                  <Line string="チームリーダー ・ ディレクター ・ プログラマー" />
                </div>
              </div>
            </a>
          </li>
          <li class="flex_half-on_pc">
            <a
              href="https://twitter.com/neo_97m"
              data-twitter="neo_97m"
              class="main_member_id flex-container"
            >
              <picture class="main_member_avatar_parent">
                <source
                  type="image/webp"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/neo-400w.webp 400w, /img/neo-350w.webp 350w, /img/neo-300w.webp 300w, /img/neo-250w.webp 250w, /img/neo-200w.webp 200w, /img/neo-150w.webp 150w, /img/neo-100w.webp 100w, /img/neo-50w.webp 50w"
                />
                <source
                  type="image/jpg"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/neo-400w.jpg 400w, /img/neo-350w.jpg 350w, /img/neo-300w.jpg 300w, /img/neo-250w.jpg 250w, /img/neo-200w.jpg 200w, /img/neo-150w.jpg 150w, /img/neo-100w.jpg 100w, /img/neo-50w.jpg 50w"
                />
                <img
                  class="main_member_avatar"
                  src="/img/neo-400w.jpg"
                  alt="SnymのメンバーのNEOの画像"
                />
              </picture>
              <div class="main_member_id_layout">
                <h4 class="main_member_name">NEO</h4>
                <div class="main_member_post">
                  <span class="break-scope">マップ設計</span>・<span class="break-scope"
                    >サウンドクリエイター</span
                  >
                </div>
              </div>
            </a>
          </li>
          <li class="flex_half-on_pc">
            <a
              href="https://twitter.com/GoodPaddyField7"
              data-twitter="GoodPaddyField7"
              class="main_member_id flex-container"
            >
              <picture class="main_member_avatar_parent">
                <source
                  type="image/webp"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/iida-400w.webp 400w, /img/iida-350w.webp 350w, /img/iida-300w.webp 300w, /img/iida-250w.webp 250w, /img/iida-200w.webp 200w, /img/iida-150w.webp 150w, /img/iida-100w.webp 100w, /img/iida-50w.webp 50w"
                />
                <source
                  type="image/jpg"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/iida-400w.jpg 400w, /img/iida-350w.jpg 350w, /img/iida-300w.jpg 300w, /img/iida-250w.jpg 250w, /img/iida-200w.jpg 200w, /img/iida-150w.jpg 150w, /img/iida-100w.jpg 100w, /img/iida-50w.jpg 50w"
                />
                <img
                  class="main_member_avatar"
                  src="/img/iida-400w.jpg"
                  alt="SnymのメンバーのI_Dの画像"
                />
              </picture>
              <div class="main_member_id_layout">
                <h4 class="main_member_name">I_D</h4>
                <div class="main_member_post">
                  <span class="break-scope">プログラマー</span>・<span class="break-scope"
                    >テクニカルディレクター</span
                  >
                </div>
              </div>
            </a>
          </li>
          <li class="flex_half-on_pc">
            <a
              href="https://twitter.com/OKNO38934114"
              data-twitter="OKNO38934114"
              class="main_member_id flex-container"
            >
              <picture class="main_member_avatar_parent">
                <source
                  type="image/webp"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/okno-400w.webp 400w, /img/okno-350w.webp 350w, /img/okno-300w.webp 300w, /img/okno-250w.webp 250w, /img/okno-200w.webp 200w, /img/okno-150w.webp 150w, /img/okno-100w.webp 100w, /img/okno-50w.webp 50w"
                />
                <source
                  type="image/jpg"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/okno-400w.jpg 400w, /img/okno-350w.jpg 350w, /img/okno-300w.jpg 300w, /img/okno-250w.jpg 250w, /img/okno-200w.jpg 200w, /img/okno-150w.jpg 150w, /img/okno-100w.jpg 100w, /img/okno-50w.jpg 50w"
                />
                <img
                  class="main_member_avatar"
                  src="/img/okno-400w.jpg"
                  alt="SnymのメンバーのOK_NOの画像"
                />
              </picture>
              <div class="main_member_id_layout">
                <h4 class="main_member_name">OK_NO</h4>
                <div class="main_member_post">
                  <span class="break-scope">ギミックプログラマー</span>・<span class="break-scope"
                    >デバッガー</span
                  >
                </div>
              </div>
            </a>
          </li>
        </ul>
        <h3>制作協力</h3>
        <ul class="flex-container main_member_list">
          <li class="flex_half-on_pc flex-container main_member_id">
            <picture class="main_member_avatar_parent">
              <source
                type="image/webp"
                sizes="(max-width: 600px) 15vw, 5vw"
                srcset="/img/team_logo-1500w.webp 1500w, /img/team_logo-1250w.webp 1250w, /img/team_logo-1000w.webp 1000w, /img/team_logo-750w.webp 750w, /img/team_logo-500w.webp 500w, /img/team_logo-250w.webp 250w, /img/team_logo-200w.webp 200w, /img/team_logo-150w.webp 150w, /img/team_logo-100w.webp 100w, /img/team_logo-50w.webp 50w"
              />
              <source
                type="image/png"
                sizes="(max-width: 600px) 15vw, 5vw"
                srcset="/img/team_logo-1500w.png 1500w, /img/team_logo-1250w.png 1250w, /img/team_logo-1000w.png 1000w, /img/team_logo-750w.png 750w, /img/team_logo-500w.png 500w, /img/team_logo-250w.png 250w, /img/team_logo-200w.png 200w, /img/team_logo-150w.png 150w, /img/team_logo-100w.png 100w, /img/team_logo-50w.png 50w"
              />
              <img
                class="main_member_avatar temporary"
                src="/img/team_logo-500w.png"
                alt="SnymのサブメンバーのNAMIの仮画像"
              />
            </picture>
            <div class="main_member_id_layout">
              <h4 class="main_member_name">NAMI</h4>
              <div class="main_member_post">デバッガー</div>
            </div>
          </li>
          <li class="flex_half-on_pc">
            <a
              href="https://twitter.com/Amu_dsgn"
              data-twitter="Amu_dsgn"
              class="main_member_id flex-container"
            >
              <picture class="main_member_avatar_parent">
                <source
                  type="image/webp"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/ayumu-24w.webp 24w, /img/ayumu-48w.webp 48w, /img/ayumu-72w.webp 72w"
                />
                <source
                  type="image/png"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/ayumu-24w.png 24w, /img/ayumu-48w.png 48w, /img/ayumu-72w.png 72w"
                />
                <img
                  class="main_member_avatar"
                  src="/img/ayumu-48w.png"
                  alt="SnymのサブメンバーのAMUの画像"
                />
              </picture>
              <div class="main_member_id_layout">
                <h4 class="main_member_name">AMU</h4>
                <div class="main_member_post">デザイナー</div>
              </div>
            </a>
          </li>
          <li class="flex_half-on_pc flex-container main_member_id">
            <picture class="main_member_avatar_parent">
              <source
                type="image/webp"
                sizes="(max-width: 600px) 15vw, 5vw"
                srcset="/img/team_logo-1500w.webp 1500w, /img/team_logo-1250w.webp 1250w, /img/team_logo-1000w.webp 1000w, /img/team_logo-750w.webp 750w, /img/team_logo-500w.webp 500w, /img/team_logo-250w.webp 250w, /img/team_logo-200w.webp 200w, /img/team_logo-150w.webp 150w, /img/team_logo-100w.webp 100w, /img/team_logo-50w.webp 50w"
              />
              <source
                type="image/png"
                sizes="(max-width: 600px) 15vw, 5vw"
                srcset="/img/team_logo-1500w.png 1500w, /img/team_logo-1250w.png 1250w, /img/team_logo-1000w.png 1000w, /img/team_logo-750w.png 750w, /img/team_logo-500w.png 500w, /img/team_logo-250w.png 250w, /img/team_logo-200w.png 200w, /img/team_logo-150w.png 150w, /img/team_logo-100w.png 100w, /img/team_logo-50w.png 50w"
              />
              <img
                class="main_member_avatar temporary"
                src="/img/team_logo-500w.png"
                alt="SnymのサブメンバーのSIHYUNの仮画像"
              />
            </picture>
            <div class="main_member_id_layout">
              <h4 class="main_member_name">SIHYUN</h4>
              <div class="main_member_post">サウンドクリエイター</div>
            </div>
          </li>
          <li class="flex_half-on_pc">
            <a
              href="https://twitter.com/hibiki_cube"
              data-twitter="hibiki_cube"
              class="main_member_id flex-container"
            >
              <picture class="main_member_avatar_parent">
                <source
                  type="image/webp"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/hibiki_cube-400w.webp 400w, /img/hibiki_cube-350w.webp 350w, /img/hibiki_cube-300w.webp 300w, /img/hibiki_cube-250w.webp 250w, /img/hibiki_cube-200w.webp 200w, /img/hibiki_cube-150w.webp 150w, /img/hibiki_cube-100w.webp 100w, /img/hibiki_cube-50w.webp 50w"
                />
                <source
                  type="image/jpg"
                  sizes="(max-width: 600px) 15vw, 5vw"
                  srcset="/img/hibiki_cube-400w.jpg 400w, /img/hibiki_cube-350w.jpg 350w, /img/hibiki_cube-300w.jpg 300w, /img/hibiki_cube-250w.jpg 250w, /img/hibiki_cube-200w.jpg 200w, /img/hibiki_cube-150w.jpg 150w, /img/hibiki_cube-100w.jpg 100w, /img/hibiki_cube-50w.jpg 50w"
                />
                <img
                  class="main_member_avatar"
                  src="/img/hibiki_cube-400w.jpg"
                  alt="SnymのサブメンバーのHIBIKI CUBEの画像"
                />
              </picture>
              <div class="main_member_id_layout">
                <h4 class="main_member_name">HIBIKI CUBE</h4>
                <div class="main_member_post">Webクリエイター</div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  </section>
</main>
<footer>
  <section class="footer_copyright">
    <div>&copy; 2021 <span class="break-scope">HIBIKI CUBE,</span> Snym</div>
  </section>
  <section class="footer_license">
    <div>
      The source code of this web site is licensed under a Mozilla Public License Version 2.0 and
      available at <a href="https://github.com/HIBIKI-CUBE/snym-web">Github</a>.
    </div>
  </section>
  <section class="footer_license">
    <div>
      このWebサイトのソースコードはMozilla Public License Version
      2.0ライセンスの下で提供されており、<a href="https://github.com/HIBIKI-CUBE/snym-web">Github</a
      >から入手して利用できます。
    </div>
  </section>
  <section class="footer_creative-commons">
    <div>
      <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"
        ><img
          alt="Creative Commons License"
          style="border-width:0;display:inline-block;vertical-align:middle;margin-right: 1ch;"
          src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png"
        /></a
      >All non-source code resources such as images and videos are licensed under a
      <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"
        >Creative Commons Attribution-NoDerivatives 4.0 International License</a
      >.
    </div>
  </section>
  <section class="footer_creative-commons">
    <div>
      <a rel="license" href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja"
        ><img
          alt="クリエイティブ・コモンズ・ライセンス"
          style="border-width:0;display:inline-block;vertical-align:middle;margin-right: 1ch;"
          src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png"
        /></a
      >全てのソースコード以外の画像や動画などのリソースは
      <a rel="license" href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja"
        >クリエイティブ・コモンズ 表示 - 改変禁止 4.0 国際 ライセンス</a
      >の下に提供されています。
    </div>
  </section>
</footer>

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
</style>
