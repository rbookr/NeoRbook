<script setup lang="ts">
import type { MenuInter } from '../menu'

import treeMenu from './treeMenu.vue'

const props = defineProps<{ menuArray: MenuInter[] }>()
const emit = defineEmits(['linkClick'])
// Update from vue site "Since version 3.2.34, a single-file component using <script setup> will automatically infer its name option based on the filename
</script>

<template>
  <div style="background-color: transparent;">
    <treeMenu v-for="arr in menuArray" :menu="arr" father_path="" @link-click="(src) => emit('linkClick', src)" />
  </div>
</template>
