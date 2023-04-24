<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({

  width: {
    type: Number,
    default: 600,
  },
  height: {
    type: Number,
    default: -1,
  },
  title: {
    type: String,
    default: 'gallery',
  },
  autoidxlog: {
    type: Boolean,
    default: true,
  },

  autoPlay: {
    type: Boolean,
    default: false,
  },

})

const container_style = computed(() => {
  const style = {}
  /* if(props.width != -1){ */
  /* [>style.width = `${props.width}px`<] */
  /* style["grid-auto-columns"] = `auto` */
  /* } */

  if (props.height != -1) {
    /* style.height = `${props.width}px` */
    style['grid-template-rows'] = `${props.width}px`
  }
  return style
})

const container = ref(null)
const log = ref(null)

const items_size = ref(0)
const nowIdx = ref(1)

onMounted(() => {
  /* console.log(container.value.childElementCount) */
  items_size.value = container.value.childElementCount
  nowIdx.value = 1

  // 给log的里的内容自动 index
  if (props.autoidxlog) {
    for (let i = 0; i < log.value.childElementCount; i++)
      log.value.children[i].className = `log-${i + 1}`
  }

  // 设置 第一个log显示
  const nowLog = log.value.getElementsByClassName(`log-${nowIdx.value}`)
  if (nowLog[0])
    nowLog[0].style.display = 'block'
    /* console.log(container_style.value) */
})

const translateX = computed(() => {
  return -1 * (nowIdx.value - 1) * container.value.offsetWidth
})

watch(nowIdx, (newIdx, oldIdx) => {
  const width = container.value.offsetWidth
  for (let i = 0; i < container.value.children.length; i++) {
    container.value.children[i].style.transform
      = `translateX(${-(newIdx - 1) * width}px)`
  }
  const nowLog = log.value.getElementsByClassName(`log-${newIdx}`)
  if (nowLog[0])
    nowLog[0].style.display = 'block'
  const oldLog = log.value.getElementsByClassName(`log-${oldIdx}`)
  if (oldLog[0])
    oldLog[0].style.display = null
})

function idx_click(idx) {
  /* console.log(idx) */
  // 得到 gallery-container 宽度
  nowIdx.value = idx
}

function idx_next() {
  if (nowIdx.value < container.value.childElementCount)
    nowIdx.value++
}

function idx_pre() {
  if (nowIdx.value > 1)
    nowIdx.value--
}
</script>

<template>
  <div class="gallery">
    <div class="gallery-content" :style="{ 'max-width': `${props.width}px` }">
      <div class="gallery-title">
        <span>{{ props.title }}</span>
      </div>

      <div class="pointer pointer-left">
        <span class="button-80" @click="idx_pre">&lt</span>
      </div>
      <div class="pointer pointer-right">
        <span class="button-80" @click="idx_next">&gt</span>
      </div>
      <div ref="container" class="gallery-content-container" :style="container_style">
        <slot />
      </div>
      <div ref="log" class="gallery-content-log">
        <slot name="log" />
      </div>

      <div class="gallery-indicator-content">
        <div class="gallery-indicator">
          <button
            v-for="idx in items_size" :key="idx" class="button-80"
            :class="{ active: nowIdx == idx }"
            @click="idx_click(idx)"
          >
            {{ idx }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./scss/gallery.scss";
</style>
