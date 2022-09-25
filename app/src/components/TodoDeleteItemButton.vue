<template>
  <div class="container-delete">
    <span><img src="@/assets/icon-cross.svg" alt="" /></span>
  </div>
</template>

<script>
export default {
  name: "TodoDeleteItemButton",
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
