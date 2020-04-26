<template>
  <div class="box-card profile-popular-hashtags">
    <h6 class="section-header">Popular #hashtags and @mentions</h6>
    <p>{{ hashtags }}</p>
    <p>{{ mentions }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hashtags: {
      type: String,
      required: true
    },
    mentions: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
