<template>
  <div class="home">
    <card-object :obj="obj" :key="obj.name" v-for="obj in objects" />
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '@/store';
import { computed } from 'vue';
import CardObject from './components/CardObject';

const objects = computed(() => store.state.objects);
</script>
