<template>
  <div
    class="container"
    @mouseenter="activeHover = true"
    @mouseleave="activeHover = false"
  >
    <span
      @click="setCompletedValue()"
      :class="task.completed ? 'completed' : ''"
      ><img v-if="task.completed === 1" src="@/assets/icon-check.svg" alt=""
    /></span>
    <div class="create-todo">
      <p v-if="task.completed" class="completed-task-name">
        <s>{{ task.name }}</s>
      </p>
      <p v-else>
        {{ task.name }}
      </p>
    </div>
    <TodoDeleteItemButton v-if="activeHover" :id="task.id" />
  </div>
</template>

<script>
import TodoDeleteItemButton from "./TodoDeleteItemButton.vue";
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions(["update"]),
    async setCompletedValue() {
      try {
        await this.update({
          id: this.task.id,
          name: this.task.name,
          completed: this.task.completed ? 0 : 1,
        });
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
  align-items: center;
  justify-content: center;
}

.completed {
  background-color: #b692fc;
}

.completed-task-name {
  color: #9394a5;
}

.container .create-todo {
  display: flex;
  flex: 1;
}
.container p {
  padding: 5px;
}
</style>
