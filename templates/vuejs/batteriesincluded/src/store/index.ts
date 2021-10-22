import {defineStore} from 'pinia';

export const useStore = defineStore('main', {
  state() {
    return {
      counter: 1 as number,
    };
  },
  actions: {},
});
