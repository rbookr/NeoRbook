<script setup>
// import HelloWorld from './index.md'

</script>

<template>
  <div
    style="font-family: huiwen;" class="markdown-body"
  >
    <div class="table-of-contents" />
    <div class="markdown-content">
      <h1 class="text-5xl">
        Rainboy的算法書
      </h1>

      <div>
        <div class="vertical-write mx-auto my-10 text-xl" flex="~ col items-start gap-2">
          <p class="h-full border border-gray-500/[.3] rounded px-1 py-2 text-left dark:border-gray-200/[.3]">
            企者不立，跨者不行
          </p>
          <p class="h-full px-1 py-2 text-right text-sm">
            王本老子 二十二
          </p>

          <p class="h-full border border-gray-500/[.3] rounded px-1 py-2 text-left dark:border-gray-200/[.3]">
            為學者日益 聞道者日損 損之又損
          </p>
          <p class="h-full border border-gray-500/[.3] rounded px-1 py-2 text-left dark:border-gray-200/[.3]">
            以至於無為 無為而無不為
          </p>
          <p class="h-full px-1 py-2 text-right text-sm">
            帛書老子  四十八
          </p>

          <p class="h-full border border-gray-500/[.3] rounded px-1 py-2 text-left dark:border-gray-200/[.3]">
            九尺之臺起於蔂土，百仞之高始於足下
          </p>
          <p class="h-full px-1 py-2 text-right text-sm">
            帛書老子 六十四
          </p>
        </div>
      </div>
      <!-- <div class="mx-auto my-6 w-2xl px-2">
    <img src="/bookcover.jpg">
  </div> -->

      <h2 class="text-left text-3xl">
        作者
      </h2>
      <div class="flex justify-center text-center">
        <img class="rounded-xl" src="https://avatars.githubusercontent.com/u/8732377?s=100&v=4">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.markdown-body {

.vertical-write {
  writing-mode: vertical-rl;
  letter-spacing: 1px;
  /*text-orientation: upright;*/
  word-spacing: 0em;
  height: 370px;
  b{
    text-combine-upright: all;
    margin: 0px 0;
    margin-bottom: 2px;
  }
  .text-right {
    text-align: right;
  }
  p {
    line-height: 28px;
  }

}
}
</style>
