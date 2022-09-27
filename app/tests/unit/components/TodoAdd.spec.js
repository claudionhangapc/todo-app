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

  it("calls store action create when onEnter function is executed", () => {
    const data = function(){
      return {
        name: "",
        completed: true,
      }
    }
    const wrapper = shallowMount(TodoAdd, { store, localVue, data})
    const input = wrapper.find('#task_name');
    input.setValue('Comprar pão');
    input.trigger('keyup.enter');
    expect(actions.create).toHaveBeenCalled()
  });

  it("dont create task if name is empty", () => {
    const data = function(){
      return {
        name: "",
        completed: true,
      }
    }
    const wrapper = shallowMount(TodoAdd, { store, localVue, data})
    const input = wrapper.find('#task_name');
    input.trigger('keyup.enter');
    expect(actions.create).not.toHaveBeenCalled()
  });

});
