<template>
  <div
    class="container"
    @mouseenter="activeHover = true"
    @mouseleave="activeHover = false"
  >
    <span><img src="@/assets/icon-check.svg" alt="" /></span>
    <div class="create-todo">
      <p>{{ task.name }}</p>
    </div>
    <TodoDeleteItemButton v-if="activeHover" :id="task.id" />
  </div>
</template>

<script>
import TodoDeleteItemButton from "./TodoDeleteItemButton.vue";
export default {
  name: "TodoItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  components: {
    TodoDeleteItemButton,
  },
  data: function () {
    return {
      activeHover: false,
    };
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
  padding: 10px 20px;
  position: relative;
  transition: 0.3s;
  background-color: #fff;
  border-bottom: 1px solid #9394a5;
}

.container span {
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 20px;
  width: 20px;
  border: 1px solid #4d5066;
  margin-right: 10px;
  background-color: #b692fc;
  align-items: center;
  justify-content: center;
}
.container .create-todo {
  display: flex;
  flex: 1;
}
.container p {
  padding: 5px;
}
</style>
