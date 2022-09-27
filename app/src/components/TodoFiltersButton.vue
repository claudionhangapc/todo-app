<template>
  <div class="container-filter">
    <span
      v-for="filter in filters"
      :key="filter.id"
      :class="filterBy === filter.id ? 'filter-by' : 'filter'"
      @click="filterData(filter.id)"
      :id="filter.id"
      >{{ filter.name }}</span
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoDeleteItemButton",
  data() {
    return {
      filters: [
        { id: "all", name: "All" },
        { id: "active", name: "Active" },
        { id: "completed", name: "Completed" },
      ],
      filterBy: "all",
    };
  },
  methods: {
    ...mapActions(["filter", "fetch"]),
    async filterData(value) {
      if (value === this.filterBy) {
        //return;
      } else {
        this.filterBy = value;
      }

      try {
        if (value == "all") {
          await this.fetch();
        }

        if (value == "active") {
          await this.filter(0);
        }

        if (value == "completed") {
          await this.filter(1);
        }
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
.container-filter span {
  cursor: pointer;
  margin: 0 10px;
}
.filter {
  color: #9394a5;
}
.filter-by {
  color: #3b82f6;
}
</style>
