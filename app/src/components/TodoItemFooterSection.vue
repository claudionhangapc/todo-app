<template>
  <div class="container margin-top">
    <div class="filters">
      <TodoFiltersButton />
    </div>
  </div>
</template>

<script>
import TodoFiltersButton from "./TodoFiltersButton.vue";
export default {
  name: "TodoItemFooterSection",
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
  border-radius: 3px;
  justify-content: space-between;
  margin-top: 30px;
}

.margin-top {
  margin-top: 30px;
}

.container .filters {
  display: flex;
  flex: 1;
  justify-content: center;
}
</style>
