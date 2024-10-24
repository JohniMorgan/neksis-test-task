import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { CardItem, CardData } from "../model/model";

interface State {
  items: Array<CardItem>;
}

export const useCardDataStore = defineStore("cardData", () => {
  const items = ref([] as Array<CardItem>);
  const isLoading = ref(true);

  function init(json: Array<CardData>) {
    json.forEach((item) => {
      items.value.push(new CardItem(-1).initFromData(item));
    });
    isLoading.value = false;
  }

  function findItemById(id: number) {
    return items.value.find(el => el.id === id);
  }

  const seed = computed(() => items.value.reduce((max, el) => Math.max(max, el.id), -Infinity))
  return { items, init, findItemById, seed, isLoading };
});
