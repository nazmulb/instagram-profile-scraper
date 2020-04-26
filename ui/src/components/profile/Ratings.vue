<template>
  <div class="profile-rating">
    <div class="box-card">
      <img
        src="../../assets/images/group.svg"
        width="26"
        height="14"
        alt="group"
      />
      <p>{{ following }}</p>
      <p>Following</p>
    </div>

    <div class="box-card">
      <img
        src="../../assets/images/group.svg"
        width="26"
        height="14"
        alt="group"
      />
      <p>{{ followers }}</p>
      <p>Followers</p>
    </div>

    <div class="box-card">
      <img
        src="../../assets/images/favorite.svg"
        width="24"
        height="18"
        alt="favorite"
      />
      <p>{{ avgLikes }}</p>
      <p>Avg Likes</p>
    </div>

    <div class="box-card">
      <img
        src="../../assets/images/all_inclusive.svg"
        width="29"
        height="12"
        alt="all_inclusive"
      />
      <p>{{ engagementRate | tofixed }}%</p>
      <p>Engagement Rate</p>
    </div>
  </div>
</template>

<script>
import FiltersMixin from "@/mixins/FiltersMixin";

export default {
  mixins: [FiltersMixin],
  props: {
    following: {
      type: Number,
      required: true
    },
    followers: {
      type: Number,
      required: true
    },
    avgLikes: {
      type: Number,
      required: true
    },
    engagementRate: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
