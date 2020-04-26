<template>
  <div class="profile-latest-posts">
    <img
      src="../../assets/images/instagram.svg"
      width="13"
      height="13"
      alt="instagram"
    />
    <h6 class="section-header">Latest posts</h6>
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

<style lang="scss" scoped></style>
