import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoDeleteItemButton from "@/components/TodoDeleteItemButton.vue";
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)
describe("TodoDeleteItemButton.vue", () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      delete: jest.fn(),
    },

    store = new Vuex.Store({
      actions
    })
  });

  it("calls store action delete when deleteTask button is clicked", () => {
    const id = 1;
    const wrapper = shallowMount(TodoDeleteItemButton, { store, localVue, propsData: { id } })
    wrapper.find('span').trigger('click')
    expect(actions.delete).toHaveBeenCalled()
  });
  
});
