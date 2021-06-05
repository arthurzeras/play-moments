<template>
  <svg
    fill="none"
    class="app-icon"
    stroke="currentColor"
    :viewBox="`0 0 ${icon.size} ${icon.size}`"
  >
    <path
      :d="icon.path"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import icons from './icons';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      return icons.find(icon => icon.name === this.name) || {};
    },
  },
};
</script>

<style lang="scss">
.app-icon {
  display: inline-block;
}
</style>
