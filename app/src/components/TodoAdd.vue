<template>
  <div class="container">
    <span @click="setCompletedValue()" :class="completed ? 'completed' : ''"
      ><img v-if="completed" src="@/assets/icon-check.svg" alt=""
    /></span>
    <div class="create-todo">
      <input
        placeholder="Create a new todo..."
        v-model="name"
        v-on:keyup.enter="onEnter"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoAdd",
  data() {
    return {
      name: "",
      completed: false,
    };
  },
  methods: {
    ...mapActions(["create"]),
    async onEnter() {
      if (this.name.length === 0) return;
      try {
        await this.create({
          name: this.name,
          completed: this.completed ? 1 : 0,
        });

        this.name = "";
      } catch (err) {
        alert("Algo inesperado aconteceu");
        //console.log(err)
      }
    },
    setCompletedValue() {
      this.completed = !this.completed;
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
  border-radius: 3px;
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
.container .create-todo {
  display: flex;
  flex: 1;
}
.container input {
  border: none;
  color: #484b6a;
  font-size: 1.125em;
  outline: none;
  padding: 5px;
  width: 100%;
}
</style>
