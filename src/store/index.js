import { reactive } from 'vue';

const state = reactive({
  objects: [],
});

const mutations = {
  setObjects(objects) {
    state.objects = objects.map(object => {
      const slug = object.name
        .toLowerCase()
        .replace(/[^\d\w\s]/gi, ' ')
        .trim()
        .replace(/_/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s/g, '_');

      return {
        slug,
        ...object,
      };
    });
  },
};

export default {
  state,
  mutations,
};
