<template>
  <div class="col box-card">
    <p class="post-date">{{ post.takenAtTimestamp | todate }}</p>
    <p class="posts-img" v-if="!post.isVideo">
      <img
        :src="post.thumbnailUrl"
        width="193"
        height="168"
        alt="Post Picture"
      />
    </p>
    <p class="posts-video" v-if="post.isVideo">
      <video
        width="193"
        height="168"
        controls
        controlslist="nodownload"
        playsinline
        :poster="post.thumbnailUrl"
        preload="metadata"
        type="video/mp4"
        :src="post.videoUrl"
      ></video>
    </p>
    <p class="post-ratings">
      <span v-if="post.isVideo">
        <img
          src="../../assets/images/play.svg"
          width="11"
          height="11"
          alt="play"
        />
        {{ post.videoViewCount | commarize(true) }}
      </span>
      <span>
        <img
          src="../../assets/images/likes.svg"
          width="15"
          height="10"
          alt="likes"
        />
        {{ post.totalLikes | commarize(true) }}
      </span>
      <span>
        <img
          src="../../assets/images/comments.svg"
          width="15"
          height="12"
          alt="comments"
        />
        {{ post.totalComments | commarize(true) }}
      </span>
    </p>
  </div>
</template>

<script>
import FiltersMixin from "@/mixins/FiltersMixin";

export default {
  mixins: [FiltersMixin],
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  padding: 0.5rem 0;
  margin-right: 0.3rem;

  .post-date,
  .posts-img,
  .posts-video,
  .post-ratings {
    margin: 0;
    text-align: left;
  }

  .post-date {
    padding-left: 0.5rem;
    padding-bottom: 0.3rem;
    font-size: 0.75rem;
    color: #757575;
  }

  .post-ratings {
    display: flex;
    justify-content: flex-start;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    font-size: 0.75rem;

    span {
      display: inline-block;
      padding-right: 0.5rem;
    }
  }
}
</style>
