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
    UPDATE(state, payload) {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, payload);
      }
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
    async filter({ commit }, value) {
      const response = await api.get(`/tasks?completed=${value}`);
      const payload = response.data;
      commit("SET", payload);
    },
    async delete({ commit }, id) {
      await api.delete(`/tasks/${id}`);
      commit("DELETE", id);
    },
    async update({ commit }, payload) {
      const response = await api.put(`/tasks/${payload.id}`, payload);
      const task = response.data;
      commit("UPDATE", task);
    },
  },
  modules: {},
});
