<script setup lang="ts">
import { RouterView } from "vue-router";
import { Footer, Header } from "./components";
</script>

<template>
  <div class="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
