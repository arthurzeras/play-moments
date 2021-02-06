import { reactive } from 'vue';

const state = reactive({
  objects: [],
});

const mutations = {
  setObjects(objects) {
    state.objects = objects;
  },
};

export default {
  state,
  mutations,
};
