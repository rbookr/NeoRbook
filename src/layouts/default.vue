<script setup lang="ts">
import treeMenuWrapper from '../components/treeMenu/treeMenuWrapper.vue'
import { bookMenu } from '../menu'

const router = useRouter()
const show_menu = ref(true)
function toggle_side_menu() {
  show_menu.value = !show_menu.value
}

function deal_menu_click(link: string) {
  link = link.replace(/\.md$/, '')
  console.log(link)
  router.push(link)
}
</script>

<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <div>
      <div
        class="fixed top-0 z-50 h-screen w-75 transition-transform -translate-x-80 lg:translate-x-0 dark:bg-[var(--dark-background)]"
        :class="{ 'translate-x-0': show_menu }"
        border="r solid dark:gray-600/[.55]"
      >
        <treeMenuWrapper :menu-array="bookMenu.child" @link-click="deal_menu_click" />
      </div>
      <div
        class="left-80 transition-transform lg:ps-75"
        :class="{ 'translate-x-80': show_menu }"
      >
        <button
          class="block lg:hidden"
          @click="toggle_side_menu()"
        >
          <div i="carbon-menu" />
        </button>
        <RouterView />
      </div>
    </div>
    <TheFooter />
    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div>
  </main>
</template>
