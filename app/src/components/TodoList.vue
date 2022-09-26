<template>
  <div class="container">
    <TodoItem />
    <TodoItem />
    <TodoItemFooter />
    <TodoItemFooterSection />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoItemFooter from "./TodoItemFooter.vue";
import TodoItemFooterSection from "./TodoItemFooterSection.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
    TodoItemFooter,
    TodoItemFooterSection,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}
</style>
