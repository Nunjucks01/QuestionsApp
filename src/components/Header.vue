<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div><strong>PGS Upskill</strong></div>
    <nav>
      <ul>
        <li>
          <RouterLink active-class="active" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink active-class="active" to="/create">Create</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--color-header);
  display: flex;
  margin-bottom: 16px;
}

div {
  padding: 24px 64px;
  color: var(--color-white);
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
}

li {
  padding: 24px 0px;
  &:hover {
    background-color: var(--color-blue);
  }
}

a {
  text-decoration: none;
  color: var(--color-white);
  padding: 26px;
}

.active {
  background-color: var(--color-blue);
}
</style>
