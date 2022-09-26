<template>
  <div class="container">
    <span>2 items left</span>
    <div class="filters">
      <TodoFiltersButton />
    </div>
    <span>Clear completed</span>
  </div>
</template>

<script>
import TodoFiltersButton from "./TodoFiltersButton.vue";
export default {
  name: "TodoItemFooter",
  components: {
    TodoFiltersButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  position: relative;
  transition: 0.3s;
  background-color: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  justify-content: space-between;
}

.container .filters {
  display: flex;
  flex: 1;
  justify-content: center;
}

@media (max-width: 576px) {
  .container .filters {
    display: none;
  }
}
</style>
