<script setup lang="ts">
import clipboard from 'clipboard'
import treeMenuWrapper from '../components/treeMenu/treeMenuWrapper.vue'
import { bookMenu } from '../menu'
import nav_buttons from '../components/nav_buttons.vue'

const markdownBody = ref(null)

const router = useRouter()
const show_menu = ref(false)
function toggle_side_menu() {
  show_menu.value = !show_menu.value
}

function deal_menu_click(link: string) {
  link = link.replace(/\.md$/, '')
  console.log(link)
  router.push(link)
}

onMounted(() => {
  new clipboard('.markdown-it-code-copy')
    .on('success', (e) => {
      e.trigger.classList.add('copied')
      setTimeout(() => e.trigger.classList.remove('copied'), 1500)
    })
})
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
        <nav_buttons />
        <nav id="button-logos" flex="~ gap-4" class="ms-10">
          <button
            class="block lg:hidden"
            @click="toggle_side_menu()"
          >
            <div i="carbon-menu" />
          </button>
        </nav>

        <div class="mx-auto container">
          <div id="write" ref="markdownBody" class="row mx-auto lg:max-w-5xl md:max-w-4xl">
            <RouterView />
          </div>
        </div>

        <hr class="mx-auto mt-10 block w-4/5 text-center" border="t solid gray-500/[.55] ">
        <TheFooter />
        <div mx-auto mt-5 text-center text-sm opacity-50>
          [Default Layout]
        </div>
      </div>
    </div>
  </main>
</template>
