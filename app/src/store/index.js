import Vue from "vue";
import Vuex from "vuex";
import { api } from "../service";
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
    async create({ commit }, payload) {
      const response = await api.post("/tasks", payload);
      const result = response.data;
      commit("ADD", result);
    },
    async fetch({ commit }) {
      const response = await api.get("/tasks");
      const payload = response.data;
      commit("SET", payload);
    },
    delete({ commit }, id) {
      commit("DELETE", id);
    },
  },
  modules: {},
});
