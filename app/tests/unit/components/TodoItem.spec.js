import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";
import Vuex from "vuex";
const localVue = createLocalVue();

localVue.use(Vuex);
describe("TodoItem.vue", () => {
  let darkMode = false;
  let store;
  let state;
  let actions;

  beforeEach(() => {
    (state = {
      darkMode: darkMode,
    }),
      (actions = {
        update: jest.fn(),
      }),
      (store = new Vuex.Store({
        state,
        actions,
      }));
  });

  it("renders props.task.name when passed", () => {
    const task = {
      id: 2,
      name: "Trabalaho de fisica",
      completed: 0,
    };
    const wrapper = shallowMount(TodoItem, {
      store,
      localVue,
      propsData: { task },
    });
    expect(wrapper.html()).toContain("Trabalaho de fisica");
  });

  it("renders completed props.task.name when passed", () => {
    const task = {
      id: 2,
      name: "Trabalaho de fisica",
      completed: 1,
    };
    const wrapper = shallowMount(TodoItem, {
      store,
      localVue,
      propsData: { task },
    });
    expect(wrapper.html()).toContain("<s>Trabalaho de fisica</s>");
  });

  it("calls store action update when setCompletedValue function is executed", () => {
    const task = {
      id: 2,
      name: "Trabalaho de fisica",
      completed: 1,
    };
    const wrapper = shallowMount(TodoItem, {
      store,
      localVue,
      propsData: { task },
    });
    wrapper.find("span").trigger("click");
    expect(actions.update).toHaveBeenCalled();
  });
});
