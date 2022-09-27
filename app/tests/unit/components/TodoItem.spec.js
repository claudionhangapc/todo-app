import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)
describe("TodoItem.vue", () => {

  let  darkMode= false;
  let store;
  let state;

  beforeEach(() => {
    state = {
      darkMode: darkMode
    }
    store = new Vuex.Store({
      state
    })
  });

  it("renders props.task.name when passed", () => {
    const task = {
      "id": 2,
      "name": "Trabalaho de fisica",
      "completed": 0
    };
    const wrapper = shallowMount(TodoItem, { store, localVue, propsData: { task } })
    expect(wrapper.html()).toContain('Trabalaho de fisica');
  });

  it("renders props.task.name when passed", () => {
    const task = {
      "id": 2,
      "name": "Trabalaho de fisica",
      "completed": 1
    };
    const wrapper = shallowMount(TodoItem, { store, localVue, propsData: { task } })
    expect(wrapper.html()).toContain('<s>Trabalaho de fisica</s>');
  });

});
