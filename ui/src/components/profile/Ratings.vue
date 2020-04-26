<template>
  <div class="row no-gutters profile-rating">
    <div class="col box-card">
      <img
        src="../../assets/images/group.svg"
        width="26"
        height="14"
        alt="group"
      />
      <p class="text">{{ following | commarize }}</p>
      <p class="label">Following</p>
    </div>

    <div class="col box-card">
      <img
        src="../../assets/images/group.svg"
        width="26"
        height="14"
        alt="group"
      />
      <p class="text">{{ followers | commarize }}</p>
      <p class="label">Followers</p>
    </div>

    <div class="col box-card">
      <img
        src="../../assets/images/favorite.svg"
        width="24"
        height="18"
        alt="favorite"
      />
      <p class="text">{{ avgLikes | commarize }}</p>
      <p class="label">Avg Likes</p>
    </div>

    <div class="col box-card box-card-end">
      <img
        src="../../assets/images/all_inclusive.svg"
        width="29"
        height="12"
        alt="all_inclusive"
      />
      <p class="text">{{ engagementRate | tofixed }}%</p>
      <p class="label">Engagement Rate</p>
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

<style lang="scss" scoped>
.profile-rating {
  margin-bottom: 1rem;

  .box-card {
    margin-right: 0.5rem;
  }

  .box-card-end {
    margin-right: 0rem;
  }

  .text {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .label {
    font-size: 0.75rem;
    color: #9e9e9e;
    font-weight: 400;
    margin-bottom: 0;
  }
}
</style>
