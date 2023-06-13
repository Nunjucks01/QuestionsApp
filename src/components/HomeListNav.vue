<script setup lang="ts">
import { useQuestionsStore } from "../store/questions";

const store = useQuestionsStore();
const { previousPage, nextPage } = useQuestionsStore();
</script>

<template>
  <div class="list-nav">
    <button :disabled="store.page === 1" @click="previousPage()">&#60;</button>
    <div class="page">{{ store.page }}</div>
    <button :disabled="store.isNextButtonDisabled" @click="nextPage()">
      &#62;
    </button>
  </div>
</template>

<style lang="scss" scoped>
.list-nav {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}

.page {
  margin-left: 8px;
  height: 32px;
  width: 32px;
  border: solid 1px var(--color-blue);
  color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background: local;
  margin-left: 8px;
  height: 32px;
  width: 32px;
  border: solid 1px var(--color-blue);
  color: var(--color-blue);
  cursor: pointer;
  &[disabled] {
    border-color: var(--color-inactive);
    color: var(--color-inactive);
    cursor: unset;
  }
}
</style>
