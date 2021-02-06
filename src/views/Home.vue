<template>
  <div class="home">
    Home
  </div>
</template>

<script setup>
import store from '@/store';
import { computed } from 'vue';

// eslint-disable-next-line no-unused-vars
const games = computed(() => store.state.games);
</script>
