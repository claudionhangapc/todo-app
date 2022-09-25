<template>
  <div class="container">
    <TodoItem />
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}
</style>
