<template>
  <div class="profile-latest-posts">
    <img
      src="../../assets/images/instagram.svg"
      width="13"
      height="13"
      alt="instagram"
    />
    <h6 class="section-header">Latest posts</h6>
    <div class="box-card" v-for="post in posts" :key="post.id">
      <p>{{ post.takenAtTimestamp }}</p>
      <p v-if="!post.isVideo">
        <img
          :src="post.thumbnailUrl"
          width="215"
          height="190"
          alt="Post Picture"
        />
      </p>
      <p v-if="post.isVideo">
        <video
          class="posts-video"
          width="215"
          height="190"
          controls
          controlslist="nodownload"
          playsinline
          :poster="post.thumbnailUrl"
          preload="metadata"
          type="video/mp4"
          :src="post.videoUrl"
        ></video>
      </p>
      <p>
        <span v-if="post.isVideo">
          <img
            src="../../assets/images/play.svg"
            width="11"
            height="11"
            alt="play"
          />
          {{ post.videoViewCount }}
        </span>
        <span>
          <img
            src="../../assets/images/likes.svg"
            width="15"
            height="10"
            alt="likes"
          />
          {{ post.totalLikes }}
        </span>
        <span>
          <img
            src="../../assets/images/comments.svg"
            width="15"
            height="12"
            alt="comments"
          />
          {{ post.totalComments }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
