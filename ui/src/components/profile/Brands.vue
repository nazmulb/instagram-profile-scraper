<template>
  <div class="col box-card box-brand">
    <h6 class="section-header">Brand affinity</h6>
    <ul class="list-group">
      <li v-for="brand in brands" :key="brand.id" class="list-item">
        <span class="list-item-name">{{ brand.name | truncate(35) }}</span>
        <span class="list-item-ratio"
          >{{ brand.sentimentRatio | tofixed }}%</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import FiltersMixin from "@/mixins/FiltersMixin";

export default {
  mixins: [FiltersMixin],
  props: {
    brands: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box-brand {
  text-align: left;
  padding: 0.8rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;

  .section-header {
    margin-bottom: 1rem;
  }
}
</style>
