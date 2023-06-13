<script setup lang="ts">
import LevelSelect from "./HomeLevelSelect.vue";
import ListNav from "./HomeListNav.vue";
import Search from "./HomeSearch.vue";
import List from "./HomeList.vue";
</script>

<template>
  <section>
    <div class="filters">
      <Search />
      <LevelSelect />
    </div>
    <List />
    <ListNav />
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 32px;
}
</style>
