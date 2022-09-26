import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    ADD(state, payload) {
      state.tasks.push(payload);
    },
    SET(state, payload) {
      state.tasks = payload;
    },
    DELETE(state, id) {
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    create({ commit }, payload) {
      commit("ADD", payload);
    },
    async fetch({ commit }) {
      const result = await fetch("http://localhost:3000/tasks");
      const payload = await result.json();
      commit("SET", payload);
    },
    delete({ commit }, id) {
      commit("DELETE", id);
    },
  },
  modules: {},
});
