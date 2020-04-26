<template>
  <div class="box-card">
    <h6 class="section-header">Brand affinity</h6>
    <ul class="list-group">
      <li v-for="brand in brands" :key="brand.id" class="list-item">
        <span>{{ brand.name }}</span>
        <span>{{ brand.sentimentRatio }}%</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    brands: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
