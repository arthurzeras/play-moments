<template>
  <app-loading v-if="loading" />
  <app-error v-else-if="hasError" />
  <router-view v-else />
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '@/store';
import { onMounted, ref } from 'vue';
import { fetchObjects } from './services';
import AppError from './components/AppError';
import AppLoading from './components/AppLoading';

const loading = ref(false);
const hasError = ref(false);

async function handleFetch() {
  try {
    loading.value = true;
    const data = await fetchObjects();

    store.mutations.setObjects(data.items);
  } catch (error) {
    hasError.value = true;
  } finally {
    loading.value = false;
  }
}

onMounted(() => handleFetch());
</script>
