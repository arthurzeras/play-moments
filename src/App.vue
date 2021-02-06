<template>
  <app-error v-if="hasError" />
  <router-view v-else />
</template>

<script setup>
import store from '@/store';
import { onMounted, ref } from 'vue';
import { fetchObjects } from './services';
// eslint-disable-next-line no-unused-vars
import AppError from './components/AppError';

const hasError = ref(false);

async function handleFetch() {
  try {
    hasError.value = false;
    const data = await fetchObjects();

    store.mutations.setGames(data.items);
  } catch (error) {
    hasError.value = true;
  }
}

onMounted(() => handleFetch());
</script>
