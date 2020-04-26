<template>
  <div class="box-card">
    <h6 class="section-header">Interests</h6>
    <ul class="list-group">
      <li v-for="interest in interests" :key="interest.id" class="list-item">
        <span>{{ interest.topic }}</span>
        <span>{{ interest.interestRatio }}%</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    interests: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
