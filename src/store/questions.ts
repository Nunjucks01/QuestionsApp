import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Level, Question } from "@/types";

export const useQuestionsStore = defineStore("questions", () => {
  const questions = ref<Question[]>([]);
  const questionsTotal = ref(0);
  const search = ref("");
  const level = ref("");
  const page = ref(1);

  const isNextButtonDisabled = computed(() => {
    return (
      page.value === Math.ceil(questionsTotal.value / 10) ||
      questionsTotal.value === 0
    );
  });

  function setLevel(newLevel: "all" | Level) {
    level.value = newLevel;
  }

  function previousPage() {
    page.value--;
  }

  function nextPage() {
    page.value++;
  }

  return {
    questions,
    questionsTotal,
    search,
    level,
    page,
    isNextButtonDisabled,
    setLevel,
    previousPage,
    nextPage,
  };
});
