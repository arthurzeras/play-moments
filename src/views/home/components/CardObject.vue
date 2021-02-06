<template>
  <!-- <h1>{{ obj.name }}</h1> -->
  <h1>{{ name }}</h1>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    obj: {},
  },

  setup(props) {
    const name = computed(() => {
      const regex = new RegExp('[_™®]', 'g');
      return props.obj.name.replace(regex, '');
    });

    return {
      name,
    };
  },
};
</script>
