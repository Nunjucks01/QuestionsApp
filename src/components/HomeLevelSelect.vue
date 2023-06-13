<script setup lang="ts">
import { useQuestionsStore } from "../store/questions";
import { Level } from "@/types";

const { setLevel } = useQuestionsStore();
const store = useQuestionsStore();

const LEVELS: ("all" | Level)[] = [
  "all",
  Level.JUNIOR,
  Level.MIDDLE,
  Level.SENIOR,
];

const filterChanged = (event: Event) => {
  setLevel((event.target as HTMLSelectElement).value as "all" | Level);
  store.page = 1;
};
</script>

<template>
  <select @change="filterChanged" name="" id="">
    <option value="" hidden>Select type..</option>
    <option v-for="(level, index) in LEVELS" :key="index" :value="level">
      {{ level }}
    </option>
  </select>
</template>

<style scoped>
select {
  min-width: 200px;
}
</style>
