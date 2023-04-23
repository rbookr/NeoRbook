<script setup lang="ts">
import { ref,computed} from 'vue'
import { MenuInter} from '../menu'

//markdown_html文件链接点击
const emit = defineEmits(['linkClick'])


const props = defineProps<{ menu : MenuInter ,father_path:string}>()
//Update from vue site "Since version 3.2.34, a single-file component using <script setup> will automatically infer its name option based on the filename

const hasChild = computed( ()=> props.menu.child != undefined)
//当前menu的路径
const src =  computed( ()=> {
    let len = props.father_path.length
    let slash = props.father_path[len-1] == '/' ? '' : '/';

    return props.father_path + slash + props.menu.src

    } )
const open = ref(true)

const toggle = () => {
    if( !hasChild.value ) {
        emit('linkClick',src.value)
    }
    else open.value = !open.value
}
</script>

<template>
    <div class="tree-node">
        <div class="cursor-pointer flex justify-between items-center h-8 px-2 rounded  border-black
            hover:bg-gray-400
            my-1
        " 
        :class="{'bg-blue-100':open && hasChild}"
        @click="toggle">
            {{ menu.title }}
            <span v-if="hasChild">
                <svg v-show="!open" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1hgij0u" style="vertical-align: middle; width: 18px; height: 18px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.576 3.576a.6.6 0 01.848 0l4 4a.6.6 0 010 .848l-4 4a.6.6 0 01-.848-.848L9.15 8 5.576 4.424a.6.6 0 010-.848z" fill="currentColor"></path></svg>
                <svg v-show="open" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1hgij0u" style="vertical-align: middle; width: 18px; height: 18px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.424 5.576a.6.6 0 010 .848l-4 4a.6.6 0 01-.848 0l-4-4a.6.6 0 01.848-.848L8 9.15l3.576-3.575a.6.6 0 01.848 0z" fill="currentColor"></path></svg>
            </span>
        </div>
        <div v-if="hasChild" class="ml-4" v-show="open">
            <treeMenu v-for="child in menu.child"  :menu="child" :father_path="src" @link-click="(src)=> emit('linkClick',src)" ></treeMenu>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
