<script setup lang="ts">
const props = defineProps(['tocString'])
</script>

<template>
  <nav id="table-content-toc" class="ms-10">
    <div v-html="tocString" />
  </nav>
</template>
