<template>
  <div class="container">
    <TodoItem v-for="task in tasks" :key="task.id" :task="task" />
    <TodoItemFooter />
    <TodoItemFooterSection />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoItemFooter from "./TodoItemFooter.vue";
import TodoItemFooterSection from "./TodoItemFooterSection.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "TodoList",
  components: {
    TodoItem,
    TodoItemFooter,
    TodoItemFooterSection,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["fetch"]),
  },
  created() {
    this.fetch();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}
</style>
