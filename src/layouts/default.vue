<script setup lang="ts">
import { bookMenu } from '~/menu'

const markdownBody = ref(null)
const tocString = ref('')

const router = useRouter()
const show_menu = ref(false)
function toggle_side_menu() {
  show_menu.value = !show_menu.value
}

function myclipcopy() {
  console.log('sdf')
}

function deal_menu_click(link: string) {
  link = link.replace(/\.md$/, '')
  console.log(link)
  router.push(link)
}

// function each_update_function() {
//   new clipboard('.markdown-it-code-copy')
//     .on('success', (e) => {
//       e.trigger.classList.add('copied')
//       setTimeout(() => e.trigger.classList.remove('copied'), 1500)
//     })

//   // 得到table-of-content的内容
//   const toc = markdownBody.value.querySelectorAll('.table-of-contents')
//   if (toc.length > 0)
//     tocString.value = toc[0].innerHTML
//   else
//     tocString.value = ''
// }

// onMounted(() => {
//   each_update_function()
// })
</script>

<template>
  <main m-0 p-0>
    <!-- <nav id="button-logos" flex="~ gap-4" class="ms-10">
      <button
        class="block lg:hidden"
        @click="toggle_side_menu()"
      >
        <div i="carbon-menu" />
      </button>
    </nav> -->

    <nav_buttons />
    <div class="containerBox dark:text-warmgray">
      <div class="sideMenu">
        <treeMenuWrapper :menu-array="bookMenu.child" @link-click="deal_menu_click" />
      </div>

      <div class="main">
        <RouterView />
      </div>
    </div>

    <div class="footer dark:text-warmgray">
      <hr class="mx-auto mt-10 block w-4/5 text-center" border="t solid gray-500/[.55] ">
      <TheFooter />
      <div mx-auto mt-5 text-center text-sm opacity-50>
        [Default Layout]
      </div>
    </div>
  </main>
</template>
