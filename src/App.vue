<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue"
import { useCardDataStore } from "./store/cardDataStore";
import {useRoute} from 'vue-router'

const cardDataStore = useCardDataStore();

async function fetchJSON() {
  fetch("/model.json").then(res => {
    res.json().then(data => {
      cardDataStore.init(data);
    }).catch(e => console.log(e))
  }).catch(err => console.log(err));
}

onBeforeMount(() => {
  fetchJSON();
})

const route = useRoute();
</script>

<template>
  <nav>
    <router-link to="/add">Добавить</router-link>
    {{ route.path }}
  </nav>
   <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
