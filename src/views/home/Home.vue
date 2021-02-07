<template>
  <div class="home">
    <div class="home__list">
      <div class="home__list--item" v-for="obj in objects" :key="obj.name">
        <card-object :obj="obj" />
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '@/store';
import { computed } from 'vue';
import CardObject from './components/CardObject';

const objects = computed(() => store.state.objects);
</script>

<style lang="scss" scoped>
.home {
  padding: 10px;
  background-color: var(--main);

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;

    &--item {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 5px;
      margin-bottom: 20px;
    }
  }
}

@media (min-width: 580px) {
  .home__list--item {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
}

@media (min-width: 900px) {
  .home {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media (min-width: 1200px) {
  .home__list--item {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
</style>
