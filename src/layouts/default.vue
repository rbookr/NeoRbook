<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <div flex>
        <treeMenuWrapper :menuArray="bookMenu.child">
        </treeMenuWrapper>
        <RouterView />
    </div>
    <TheFooter />
    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div>
  </main>
</template>

<script setup lang="ts">
import treeMenuWrapper from '../components/treeMenu/treeMenuWrapper.vue'
import {bookMenu} from '../menu'

</script>
