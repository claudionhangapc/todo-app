import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoAdd from "@/components/TodoAdd.vue";
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)
describe("TodoDeleteItemButton.vue", () => {
  let  darkMode= false;
  let store;
  let state;
  let actions;

  beforeEach(() => {
    state = {
      darkMode: darkMode
    },
    actions = {
      create: jest.fn(),
    },

    store = new Vuex.Store({
      state,
      actions
    })
  });

  it("renders component to create default task when passed", () => {
    const wrapper = shallowMount(TodoAdd, { store, localVue })
    expect(wrapper.html()).toContain('create-todo');
  });
  
  it("renders component to create completed task when passed", () => {
    const data = function(){
      return {
        name: "",
        completed: true,
      }
    }
    const wrapper = shallowMount(TodoAdd, { store, localVue, data})
    expect(wrapper.html()).toContain('@/assets/icon-check.svg');
  });

});
