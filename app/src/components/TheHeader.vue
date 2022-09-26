<template>
  <div class="header bg-dark" :class="darkMode ? 'bg-dark' : 'bg-light'">
    <div class="container">
      <div class="content">
        <h1>Todo</h1>
        <span id="mode" @click="setDarkMode()">
          <img v-if="darkMode" src="@/assets/icon-moon.svg" alt="" />
          <img v-else src="@/assets/icon-sun.svg" alt="" />
        </span>
      </div>
      <TodoAdd />
    </div>
  </div>
</template>

<script>
import TodoAdd from "./TodoAdd.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "TheHeader",
  components: {
    TodoAdd,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  methods: {
    ...mapActions(["setDarkMode"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding: 50px 20px;
}

.bg-dark {
  background-image: url("../assets/bg-desktop-dark.jpg");
}

.bg-light {
  background-image: url("../assets/bg-desktop-light.jpg");
}

.container {
  max-width: 524px;
  flex-direction: row;
  margin: 0 auto;
}

.header .content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header .content h1 {
  text-transform: uppercase;
  font-size: 2.5em;
  color: #fafafa;
  font-weight: 700;
}
#mode {
  cursor: pointer;
}
</style>
