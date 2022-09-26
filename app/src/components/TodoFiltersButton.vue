<template>
  <div class="container-filter">
    <span v-for="filter in filters" :key="filter.id">{{ filter.name }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoDeleteItemButton",
  data() {
    return {
      filters: [
        { id: "all", name: "All" },
        { id: "active", name: "Active" },
        { id: "completed", name: "Completed" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-filter span {
  cursor: pointer;
  margin: 0 10px;
}
</style>
