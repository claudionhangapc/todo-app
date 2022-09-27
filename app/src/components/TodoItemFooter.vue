<template>
  <div class="container" :class="darkMode ? 'bg-dark' : 'bg-light'">
    <span>{{ numberOfTask }} items left</span>
    <div class="filters">
      <TodoFiltersButton />
    </div>
    <span @click="filterData()">Clear completed</span>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import TodoFiltersButton from "./TodoFiltersButton.vue";
export default {
  name: "TodoItemFooter",
  components: {
    TodoFiltersButton,
  },
  computed: {
    ...mapGetters(["numberOfTask"]),
    ...mapState(["darkMode"]),
  },
  methods: {
    ...mapActions(["filter"]),
    async filterData() {
      try {
        await this.filter(0);
      } catch (err) {
        alert("Algo inesperado aconteceu");
        //console.log(err)
      }
    },
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
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  justify-content: space-between;
}

.bg-dark {
  background-color: #25273c;
}
.bg-light {
  background-color: #fff;
}

.container span {
  color: #9394a5;
  cursor: pointer;
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
