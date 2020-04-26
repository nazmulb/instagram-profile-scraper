<template>
  <div class="box-card box-interests">
    <h6 class="section-header">Interests</h6>
    <ul class="list-group">
      <li v-for="interest in interests" :key="interest.id" class="list-item">
        <span>{{ interest.topic }}</span>
        <span>{{ interest.interestRatio | tofixed }}%</span>
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
  margin-bottom: 1rem;
}
</style>
