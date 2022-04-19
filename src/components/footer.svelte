<script lang="ts">
</script>

<footer>
  <section class="copyright">
    <div>&copy; 2021 <span class="break-scope">HIBIKI CUBE,</span> Snym</div>
  </section>
  <section>
    <div>
      The source code of this web site is licensed under a Mozilla Public License Version 2.0 and
      available at <a href="https://github.com/HIBIKI-CUBE/snym-web">Github</a>.
    </div>
  </section>
  <section>
    <div>
      このWebサイトのソースコードはMozilla Public License Version
      2.0ライセンスの下で提供されており、<a href="https://github.com/HIBIKI-CUBE/snym-web">Github</a
      >から入手して利用できます。
    </div>
  </section>
  <section>
    <div>
      <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">
        <img
          alt="Creative Commons License"
          style="border-width:0;display:inline-block;vertical-align:middle;margin-right: 1ch;"
          src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png"
        />
      </a>
      All non-source code resources such as images and videos are licensed under a
      <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"
        >Creative Commons Attribution-NoDerivatives 4.0 International License
      </a>
      .
    </div>
  </section>
  <section>
    <div>
      <a rel="license" href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja">
        <img
          alt="クリエイティブ・コモンズ・ライセンス"
          style="border-width:0;display:inline-block;vertical-align:middle;margin-right: 1ch;"
          src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png"
        />
      </a>
      全てのソースコード以外の画像や動画などのリソースは
      <a rel="license" href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja">
        クリエイティブ・コモンズ 表示 - 改変禁止 4.0 国際 ライセンス
      </a>
      の下に提供されています。
    </div>
  </section>
</footer>

<style lang="stylus">
footer
  margin-top 2em
  box-sizing border-box
  width 100vw
  display flex
  padding 2em 10% calc(env(safe-area-inset-bottom) + 2em)
  justify-content space-between
  align-items stretch
  font-size 0.8em
  background-color var(--ui-bg)
  @media screen and (max-aspect-ratio: 9/8)
    flex-direction column

  section
    position relative
    display flex
    align-items center
    flex: 1

    &:not(:last-child)
      margin-right 1.5em
      @media screen and (max-aspect-ratio: 9/8)
        margin-bottom 0.5em

    @media screen and (min-aspect-ratio: 9/8)
      padding 0.5em

      border-bottom solid 1px var(--accent-color)

      &:before
        content ''
        display block
        position absolute
        left 0px
        top 0px
        width 3em
        height 3em
        border-style solid
        border-width 1px
        border-color var(--accent-color) transparent transparent var(--accent-color)

      &:after
        content ''
        display block
        position absolute
        right 0px
        bottom 0px
        border-style solid
        border-width .7em .7em 0 .7em
        border-color transparent
        border-right-color var(--accent-color)

.copyright
  justify-content center

</style>
