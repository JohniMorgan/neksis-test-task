<template >
    <div class="form">
        {{item}}
    </div>
</template>
<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue'
import { CardItem } from '../model/model';
import { useCardDataStore } from '../store/cardDataStore'

const store = useCardDataStore();

const { editMode} = defineProps({
    editMode: Boolean,
})
const item = ref();
onMounted(() => {
    let initItem = null;
    if (!editMode) initItem = new CardItem(store.seed);
    console.log(initItem);
    item.value = initItem;
})

console.log(item.value);
</script>
<style scoped>
    
</style>