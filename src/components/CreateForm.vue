<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { getQuestion } from "../services/questionsService";
import { Level, type QuestionCreate } from "@/types";
import CreateFormButtons from "./CreateFormButtons.vue";

const route = useRoute();

const question = reactive<QuestionCreate>({
  title: "",
  level: Level.JUNIOR,
});

const LEVELS: Level[] = [Level.JUNIOR, Level.MIDDLE, Level.SENIOR];

function levelChanged(event: Event) {
  question.level = (event.target as HTMLSelectElement).value as Level;
}

if (route.path === `/edit/${route.params.id}`) {
  getQuestion(Number(route.params.id)).then((response) => {
    Object.assign(question, response.data);
  });
}
</script>

<template>
  <h2>Create question</h2>
  <label for="question-name"><span>*</span> Question name </label>
  <input v-model="question.title" type="text" id="question-name" required />
  <label for="question-type"><span>*</span> Question type</label>
  <select @change="levelChanged" name="" id="question-type" required>
    <option value="" hidden>{{ question.level }}</option>
    <option v-for="(level, index) in LEVELS" :value="level" :key="index">
      {{ level }}
    </option>
  </select>
  <CreateFormButtons :question="question" />
</template>

<style scoped>
h2 {
  margin-bottom: 44px;
}

span {
  color: red;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  border: solid 2px var(--color-inactive);
  border-radius: 4px;
  font-size: 16px;
}
</style>
