<template>
  <div class="col box-card box-interests">
    <h6 class="section-header">Interests</h6>
    <ul class="list-group">
      <li v-for="interest in interests" :key="interest.id" class="list-item">
        <span class="list-item-name">{{ interest.topic }}</span>
        <span class="list-item-ratio"
          >{{ interest.interestRatio | tofixed }}%</span
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
    interests: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box-interests {
  text-align: left;
  padding: 0.8rem;
  margin-bottom: 1rem;

  .section-header {
    margin-bottom: 1rem;
  }
}
</style>
