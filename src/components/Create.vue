<script setup lang="ts">
import Form from "./CreateForm.vue";
</script>

<template>
  <div class="path"><span>Home &nbsp/&nbsp</span> Create question</div>
  <section>
    <Form />
  </section>
</template>

<style lang="scss" scoped>
div {
  max-width: 1400px;
  margin: auto;
  position: relative;
}
span {
  color: var(--color-inactive-text);
  font-weight: 700;
}

section {
  margin-top: 16px;
}
</style>
