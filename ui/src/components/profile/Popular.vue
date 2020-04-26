<template>
  <div class="box-card profile-popular-hashtags">
    <h6 class="section-header">Popular #hashtags and @mentions</h6>
    <p v-if="hashtags" class="popular-hashtags">
      <span v-for="(val, index) in hashtagsArray" :key="index" class="tag-item"
        >#{{ val }}</span
      >
    </p>
    <p v-if="mentions" class="popular-mentions">
      <span v-for="(val, index) in mentionsArray" :key="index" class="tag-item"
        >@{{ val }}</span
      >
    </p>
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
  },
  computed: {
    hashtagsArray() {
      return this.hashtags.split("|");
    },
    mentionsArray() {
      return this.mentions.split("|");
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-popular-hashtags {
  text-align: left;
  padding: 0.8rem;
  margin-bottom: 1rem;

  .section-header {
    margin-bottom: 1rem;
  }

  .popular-hashtags {
    margin-bottom: 0.5rem;
  }
  .popular-mentions {
    margin-bottom: 0;
  }

  .tag-item {
    display: inline-block;
    margin-right: 0.3rem;
    padding: 0 0.5rem;
    line-height: 1.5rem;
    background: #114b5f;
    border-radius: 2rem;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 400;
  }
}
</style>
