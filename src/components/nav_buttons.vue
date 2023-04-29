<script setup lang="ts">
</script>

<template>
  <nav id="button-logos" flex="~ col gap-4" class="fixed bottom-5 right-5 ms-10" text="dark:white">
    <RouterLink icon-btn to="/" title="主页">
      <div i-carbon-home />
    </RouterLink>

    <button icon-btn title="切换主题" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a icon-btn rel="noreferrer" href="https://github.com/rbookr/NeoRbook" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
