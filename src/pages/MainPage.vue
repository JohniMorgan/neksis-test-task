<template>
    <div>
        <list-item v-for="item in item" :key="item.id" :item="item"/>
    </div>
</template>
<script setup lang="ts">
import { useCardDataStore } from "../store/cardDataStore"
import { computed } from 'vue'
import ListItem from "../components/ListItem.vue"

const cardDataStore = useCardDataStore();
const items = computed(() => cardDataStore.items);
</script>
<style scoped>
    
</style>