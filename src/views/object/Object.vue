<template>
  <h1 v-if="notFound">Not found</h1>
  <h1 v-else>{{ object.name }}</h1>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '@/store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const object = computed(
  () => store.state.objects.find(obj => obj.slug === route.params.slug) || {},
);

const notFound = !Object.keys(object.value).length;
</script>
