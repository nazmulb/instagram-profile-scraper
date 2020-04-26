<template>
  <div class="profile-latest-posts">
    <div class="posts-header">
      <img
        src="../../assets/images/instagram.svg"
        width="13"
        height="13"
        alt="instagram"
      />
      <h6 class="section-header">Latest posts</h6>
    </div>
    <div class="row no-gutters">
      <PostIteams v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import PostIteams from "@/components/profile/PostIteams.vue";

export default {
  components: {
    PostIteams
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-latest-posts {
  .posts-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    .section-header {
      margin-left: 0.3rem;
      margin-bottom: 0;
    }
  }
}
</style>
