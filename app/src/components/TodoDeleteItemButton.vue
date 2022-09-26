<template>
  <div class="container-delete">
    <span @click="deleteTask()"
      ><img src="@/assets/icon-cross.svg" alt=""
    /></span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoDeleteItemButton",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(["delete"]),
    async deleteTask() {
      try {
        await this.delete(this.id);
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
.container-delete span {
  cursor: pointer;
  display: flex;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
}
.container-delete span img {
  height: 15px;
  width: 15px;
}
</style>
