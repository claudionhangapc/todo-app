<template>
  <div class="container margin-top" :class="darkMode ? 'bg-dark' : 'bg-light'">
    <div class="filters">
      <TodoFiltersButton />
    </div>
  </div>
</template>

<script>
import TodoFiltersButton from "./TodoFiltersButton.vue";
import { mapState } from "vuex";
export default {
  name: "TodoItemFooterSection",
  components: {
    TodoFiltersButton,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  box-sizing: border-box;
  display: none;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  position: relative;
  transition: 0.3s;
  border-radius: 3px;
  justify-content: space-between;
  margin-top: 30px;
}

.bg-dark {
  background-color: #25273c;
}
.bg-light {
  background-color: #fff;
}

.margin-top {
  margin-top: 30px;
}

.container .filters {
  display: flex;
  flex: 1;
  justify-content: center;
}

@media (max-width: 576px) {
  .container {
    display: flex;
  }
}
</style>
