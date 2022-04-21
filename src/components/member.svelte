<script lang="ts">
  import Line from '../components/line.svelte';
  import Picture from '../components/picture.svelte';

  export let name = '',
    id = '',
    post = '',
    twitter = '',
    sizeSet:number[] = [];
  
  let fallbackSize: number;

  if (id) {
    if (sizeSet.length == 0) {
      sizeSet = [400, 350, 300, 250, 200, 150, 100, 50];
    }
    fallbackSize = sizeSet[0];
  }else{
    sizeSet = undefined;
    fallbackSize = undefined;
  }
</script>

<a href={twitter && 'https://twitter.com/' + twitter} class="id flex-container temporary">
  <Picture
    alt="Snymのメンバーの{name}の画像"
    imageTypes={['webp', 'jpg']}
    sizes="(max-width: 600px) 15vw, 5vw"
    {sizeSet}
    {fallbackSize}
    srcName={id || 'team_logo'}
  />
  <div class="layout">
    <h4 class="name">{name}</h4>
    <div class="post">
      <Line content={post} noLine/>
    </div>
  </div>
</a>

<style lang="stylus">
.id
  align-items center
  justify-content flex-start
  margin 1em 0
  box-sizing border-box
  flex-wrap nowrap
  position relative
  color currentColor
  text-decoration none
  padding-right 3em

  &:not([href=""]):after
    content url('/twitter.svg')
    display block
    position absolute
    right 0.1em
    bottom 0.25em
    height 1em
    width 1em

  &[href=""]:after
    content ''
    display block
    position absolute
    box-sizing border-box
    // width 0.5em
    // height 0.5em
    width 0.80213em
    height 0.80213em
    background-color transparent
    border-radius 50%
    border solid 1px
    right 0.171885em
    bottom 0.171885em
    // right 0.3839745962em
    // bottom 0.3839745962em
    // border-style solid
    // border-width 0.9em 0.9em 0 0.9em
    // border-color transparent
    // border-right-color #fff
  
  &[href=""]:before
    border-right-color var(--ui-bg)

  &[href=""]:hover:before
    border-right-color var(--accent-color)

  &:before
    content ''
    display block
    position absolute
    right 0px
    bottom 0px
    border-style solid
    border-width 1.5em 3em 0 1.5em
    border-color transparent
    border-right-color var(--ui-bg)
    transition-property border-color
    transition-duration 100ms
    transition-timing-function ease-in

  &:hover:before
    border-right-color #1DA1F2

.id :global(img)
  width 5vw
  height 5vw
  border-radius 50%
  object-fit contain

  @media screen and (orientation: portrait)
    width 15vw
    height 15vw

.id.temporary :global(img)
  background-color var(--ui-bg)

.id :global(picture)
  width 5vw
  height 5vw
  @media screen and (orientation: portrait)
    width 15vw
    height 15vw

.id :global(picture):before
  content ''
  position absolute
  display block
  width 5vw
  height 5vw
  border-width 1vw
  @media screen and (orientation: portrait)
    width 15vw
    height 15vw
    border-width 3vw
  border-style solid
  border-color transparent
  box-sizing border-box
  border-radius 50%
  transition-property border-width border-color
  transition-duration 100ms
  transition-timing-function ease-in

.id :global(picture):hover:before
  border-width 3px
  border-color var(--accent-color)

.layout
  display flex
  flex-direction column
  justify-content center
  margin-left 2ch

.name
  margin 0
  margin-bottom .25em
</style>
