<script setup lang="ts">
import { useRoute } from "vue-router";
import { createQuestion, editQuestion } from "../services/questionsService";
import type { QuestionCreate } from "@/types";

const route = useRoute();

defineProps<{ question: QuestionCreate }>();
</script>
<template>
  <div class="wrapper">
    <button
      v-if="route.path !== `/edit/${route.params.id}`"
      :disabled="!question.title"
      class="button-create"
      @click="
        createQuestion(question.title, question.level);
        $router.push('/');
      "
    >
      Create
    </button>
    <button
      v-if="route.path === `/edit/${route.params.id}`"
      class="button-create"
      :disabled="!question.title"
      @click="
        editQuestion(Number(route.params.id), question.title, question.level);
        $router.push('/');
      "
    >
      Save
    </button>
    <button @click="$router.push('/')">Cancel</button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 32px;
}

button {
  border-color: var(--color-inactive);
  background: local;
  cursor: pointer;
  margin-right: 12px;
  width: 86px;
  height: 40px;
  &[disabled] {
    background-color: var(--color-inactive);
    cursor: unset;
  }
}

.button-create {
  background-color: var(--color-blue);
  color: var(--color-white);
}
</style>
