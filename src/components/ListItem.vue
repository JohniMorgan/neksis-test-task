<template>
    <div class="card">
        <p>Идентификатор карточки: {{ item.id }}</p>
        <h3>{{ item.title }}</h3>
        <div class="content" v-html="markdownToHtml"></div>
        <p>{{ localePublished }}</p>
        <p>Обпуликовано: {{ localeDate }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from "vue";
import {CardItem} from "../model/model";
import { marked } from 'marked'

const { item } = defineProps({
    item: {
        type: CardItem,
        required: true
    }
});

const localeDate = computed(() => item.published_from.toLocaleDateString())
const markdownToHtml = computed(() => marked.parse(item.description));
const localePublished = computed(() => `Является опубликованным: 
${item.published ? 'Да' : 'Нет'} 
(Значение published: ${item.published})`)
</script>

<style scoped>
.card {
    width: 500px;
    height: auto;
    background-color: #333;
    border: 1px solid #000;
    border-radius: 15px;
}
</style>