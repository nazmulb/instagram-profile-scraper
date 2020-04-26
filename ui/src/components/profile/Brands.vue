<template>
  <div class="box-card box-brand">
    <h6 class="section-header">Brand affinity</h6>
    <ul class="list-group">
      <li v-for="brand in brands" :key="brand.id" class="list-item">
        <span>{{ brand.name }}</span>
        <span>{{ brand.sentimentRatio | tofixed }}%</span>
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
  margin-bottom: 1rem;
}
</style>
