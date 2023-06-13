<script setup lang="ts">
import { watch } from "vue";
import { useQuestionsStore } from "../store/questions";
import { storeToRefs } from "pinia";

const questionsStore = useQuestionsStore();

const { search } = storeToRefs(useQuestionsStore());

watch(search, () => {
  questionsStore.page = 1;
});
</script>

<template>
  <div>
    <input v-model="search" type="text" placeholder="Input search text.." />
    <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
  </div>
</template>

<style scoped>
div {
  margin-right: 20px;
  border: solid 2px var(--color-inactive);
  border-radius: 4px;
  padding: 8px;
  min-width: 300px;
}

input {
  border: none;
  outline: none;
  font-size: 16px;
  width: 94%;
}

span {
  color: var(--color-inactive-text);
}
</style>
