<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MenuInter } from '../menu'

const props = defineProps<{ menu: MenuInter; father_path: string }>()

// markdown_html文件链接点击
const emit = defineEmits(['linkClick'])

// Update from vue site "Since version 3.2.34, a single-file component using <script setup> will automatically infer its name option based on the filename

const hasChild = computed(() => props.menu.child !== undefined)
// 当前menu的路径
const src = computed(() => {
  const len = props.father_path.length
  const slash = props.father_path[len - 1] === '/' ? '' : '/'

  return props.father_path + slash + props.menu.src
})
const open = ref(true)

function toggle() {
  if (!hasChild.value)
    emit('linkClick', src.value)

  else open.value = !open.value
}
</script>

<template>
  <div class="tree-node">
    <div
      class="my-1 h-8 flex cursor-pointer items-center justify-between border-black rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-600"
      @click="toggle"
    >
      {{ menu.title }}
      <span v-if="hasChild">
        <svg v-show="!open" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1hgij0u" style="vertical-align: middle; width: 18px; height: 18px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.576 3.576a.6.6 0 01.848 0l4 4a.6.6 0 010 .848l-4 4a.6.6 0 01-.848-.848L9.15 8 5.576 4.424a.6.6 0 010-.848z" fill="currentColor" /></svg>
        <svg v-show="open" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1hgij0u" style="vertical-align: middle; width: 18px; height: 18px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.424 5.576a.6.6 0 010 .848l-4 4a.6.6 0 01-.848 0l-4-4a.6.6 0 01.848-.848L8 9.15l3.576-3.575a.6.6 0 01.848 0z" fill="currentColor" /></svg>
      </span>
    </div>
    <div v-if="hasChild" v-show="open" class="ml-4">
      <treeMenu v-for="child in menu.child" :menu="child" :father_path="src" @link-click="(src) => emit('linkClick', src)" />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
