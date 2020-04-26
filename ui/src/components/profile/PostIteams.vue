<template>
  <div class="box-card">
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
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
