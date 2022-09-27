import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoFiltersButton from "@/components/TodoFiltersButton.vue";
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)
describe("TodoFiltersButton.vue", () => {

  let store;
  let actions;

  beforeEach(() => {
    actions = {
      filter: jest.fn(),
      fetch: jest.fn(),
    },
    store = new Vuex.Store({
      actions
    })
  });

  it("calls store action fetch when filterData function is executed by clicked in all", () => {
    const wrapper = shallowMount(TodoFiltersButton, { store, localVue })
    wrapper.find('#all').trigger('click')
    expect(actions.fetch).toHaveBeenCalled()
  });

  it("calls store action filter when filterData function is executed by clicked in active", () => {
    const wrapper = shallowMount(TodoFiltersButton, { store, localVue })
    wrapper.find('#active').trigger('click')
    expect(actions.filter).toHaveBeenCalled()
  });

  it("calls store action filter when filterData function is executed by clickec in completed", () => {
    const wrapper = shallowMount(TodoFiltersButton, { store, localVue })
    wrapper.find('#completed').trigger('click')
    expect(actions.filter).toHaveBeenCalled()
  });

});
