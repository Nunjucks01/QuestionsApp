<script setup lang="ts">
import { watchEffect } from "vue";
import { getQuestions, deleteQuestion } from "../services/questionsService";
import { useQuestionsStore } from "../store/questions";
import type { Params, Level } from "@/types";

const store = useQuestionsStore();

const fetchAndSaveQuestions = () => {
  const params: Params = {
    _page: store.page,
    title_like: store.search,
  };
  store.level && store.level !== "all"
    ? (params.level = store.level as Level)
    : "";
  return getQuestions(params).then(
    (response) => (
      (store.questions = response.data),
      (store.questionsTotal = Number(response.headers["x-total-count"]))
    )
  );
};

watchEffect(() => {
  fetchAndSaveQuestions();
});

const onDelete = async (questionsId: number) => {
  await deleteQuestion(questionsId);
  await fetchAndSaveQuestions();
  store.page = 1;
};
</script>

<template>
  <div>
    <div class="list-item list-header">
      <strong>Name</strong>
      <div class="side-content">
        <strong>Type</strong>
        <strong>Actions</strong>
      </div>
    </div>
    <ul>
      <li v-for="question in store.questions" :key="question.id">
        <div class="list-item">
          <span>{{ question.title }}</span>
          <div class="side-content">
            <span>{{ question.level }}</span>
            <div class="icons">
              <button
                @click="$router.push(`/edit/${question.id}`)"
                style="color: black"
              >
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              </button>
              <button @click="onDelete(question.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  padding: 20px 32px 20px 16px;
  border-bottom: solid 1px var(--color-inactive);
  display: flex;
  justify-content: space-between;
}

.side-content {
  width: 25%;
  display: flex;
  justify-content: space-between;
  & button {
    border: none;
    background: local;
    cursor: pointer;
    margin-right: 12px;
  }
}

.list-header {
  background-color: var(--color-background);
  padding-right: 36px;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
