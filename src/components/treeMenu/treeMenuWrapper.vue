<script setup lang="ts">
import { MenuInter} from '../menu'
import treeMenu from './treeMenu.vue';
const emit = defineEmits(['linkClick'])
const props = defineProps<{ menuArray : MenuInter[] }>()
//Update from vue site "Since version 3.2.34, a single-file component using <script setup> will automatically infer its name option based on the filename
</script>

<template>
<div fixed h-screen top-0 w-80>
    <treeMenu v-for="arr in menuArray" :menu="arr" :father_path="''"  @link-click="(src)=> emit('linkClick',src)"></treeMenu>
</div>
</template>
