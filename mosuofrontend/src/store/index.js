import { defineStore } from 'pinia';

export const useSharedStore = defineStore('shared', {
  state: () => ({
    search: 'Hello from Store',
  }),
  actions: {
    setSearch(newSearch) {
      this.search = newSearch;
    },
  },
  getters: {
    // 定义一个 getter 方法来获取当前的 search 值
    getSearch(state) {
      return state.search;
    },
  },
});
