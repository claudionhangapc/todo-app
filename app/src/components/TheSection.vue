<template>
  <div class="container">
    <div class="content">
      <TodoList />
      <p class="footer">Desenvolvido por Cláudio</p>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
export default {
  name: "TheSection",
  components: {
    TodoList,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex: 1;
}
.content {
  max-width: 524px;
  flex-direction: row;
  padding: 0px 20px;
  margin-bottom: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -25px;
}
.footer {
  font-size: 1.125em;
  margin-top: 40px;
  color: #2c3e50;
}
</style>
