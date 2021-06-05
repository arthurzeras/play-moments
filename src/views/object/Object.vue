<template>
  <h1 v-if="notFound">Not found</h1>

  <section class="object" v-else>
    <div class="object__back--container">
      <router-link class="object__back--link" :to="{ name: 'Home' }">
        <app-icon name="chevron-left" width="1.4" />
        <span>Ver todos</span>
      </router-link>
    </div>

    <h1>{{ object.name }}</h1>

    <nav class="object__nav">
      <button
        class="object__nav--button"
        @click="changeView('Screenshots')"
        :class="{ 'is-active': view === 'Screenshots' }"
      >
        Screenshots ({{ object.Screenshots.length }})
      </button>
      <span>|</span>
      <button
        class="object__nav--button"
        @click="changeView('Video Clips')"
        :class="{ 'is-active': view === 'Video Clips' }"
      >
        Video Clips ({{ object['Video Clips'].length }})
      </button>
    </nav>

    <article class="object__grid">
      <div
        :key="index"
        class="object__grid--item"
        v-for="(obj, index) in gridList"
      >
        <img
          :src="obj"
          v-if="view === 'Screenshots'"
          :alt="`${object.name} screenshot`"
        />

        <video controls v-if="view === 'Video Clips'">
          <source :src="obj" type="video/mp4" />
        </video>
      </div>
    </article>
  </section>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '@/store';
import { ref, computed } from 'vue';
import { BUCKET_URL } from '@/utils';
import { useRoute } from 'vue-router';

const route = useRoute();
const view = ref('Screenshots');

const object = computed(
  () => store.state.objects.find(obj => obj.slug === route.params.slug) || {},
);

// const screenshots = computed(() =>
//   object.value.Screenshots.map(image => `${BUCKET_URL}/${image}`),
// );

const gridList = computed(() =>
  object.value[view.value].map(obj => `${BUCKET_URL}/${obj}`),
);

const notFound = !Object.keys(object.value).length;

const changeView = _view => {
  view.value = _view;
};
</script>

<style lang="scss" scoped>
.object {
  padding: 1rem;

  &__back {
    &--container {
      display: inline-block;
    }

    &--link {
      display: flex;
      color: var(--main);
      align-items: center;
      text-decoration: none;
    }
  }

  &__nav {
    margin: 1rem 0 2rem 0;
    display: block;
    text-align: center;

    span {
      margin: 0 2rem;
    }

    &--button {
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: var(--main);
      background: transparent;
      border-bottom: 2px solid transparent;

      &.is-active {
        border-bottom-color: var(--main);
      }
    }
  }

  &__grid {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    &--item {
      img,
      video {
        border-radius: 1rem;
        width: 100%;
      }
    }
  }
}
</style>
