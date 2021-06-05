<template>
  <router-link :to="routerParams" class="card-object">
    <div class="card-object__image">
      <img :src="image" :alt="name" />
    </div>

    <div class="card-object__content">
      <h1 class="card-object__content--title">{{ name }}</h1>
      <div class="card-object__content--totals">
        {{ totals.screenshots }} Screenshots
      </div>
      <div class="card-object__content--totals">
        {{ totals.videos }} Video Clips
      </div>
    </div>
  </router-link>
</template>

<script>
import { computed } from 'vue';
import { BUCKET_URL } from '@/utils';

export default {
  props: {
    obj: {},
  },

  setup(props) {
    const image = computed(() => {
      const images = props.obj.Screenshots;

      if (images) {
        const randomIndex = Math.floor(Math.random() * images.length);

        return `${BUCKET_URL}/${images[randomIndex]}`;
      }

      return require('@/assets/img/placeholder-image.png');
    });

    const name = computed(() => {
      const regex = new RegExp('[_™®]', 'g');
      return props.obj.name.replace(regex, '');
    });

    const totals = computed(() => {
      const videos = (props.obj['Video Clips'] || []).length;
      const screenshots = (props.obj?.Screenshots || []).length;

      return {
        videos,
        screenshots,
      };
    });

    const routerParams = {
      name: 'Object',
      params: {
        slug: props.obj.slug,
      },
    };

    return {
      name,
      image,
      totals,
      routerParams,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-object {
  height: 300px;
  display: flex;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 15px;
  text-decoration: none;
  flex-direction: column;
  border: 2px solid var(--main);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.6);
  }

  &__image {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 15px;
    }
  }

  &__content {
    padding: 10px;
    color: var(--main);

    &--title {
      padding: 0;
      width: 100%;
      margin-top: 0;
      overflow: hidden;
      font-size: 1.2rem;
      margin-bottom: 10px;
      white-space: nowrap;
      font-weight: normal;
      text-overflow: ellipsis;
    }

    &--totals {
      font-size: 0.9rem;
      margin-bottom: 4px;
      color: var(--secondary);
    }
  }
}
</style>
