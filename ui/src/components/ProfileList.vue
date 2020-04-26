<template>
  <router-link
    class="modash-profile-link"
    :to="{ name: 'profile', params: { id: profile.id } }"
  >
    <div class="box-card row no-gutters list">
      <div class="col col-sm-1 align-self-start profile-picture">
        <img
          :src="profile.profilePicUrl"
          width="50"
          height="50"
          :alt="profile.name"
        />
      </div>

      <div class="col col-sm-4">
        <h5 class="text">{{ profile.name }}</h5>
        <p class="profile-handle label">@{{ profile.username }}</p>
      </div>

      <div class="col">
        <p class="text">{{ profile.followers | commarize }}</p>
        <p class="label">Followers</p>
      </div>

      <div class="col col-sm-5">
        <p class="text">
          {{ profile.engagements | commarize }} ({{
            profile.engagementRate | tofixed
          }}%)
        </p>
        <p class="label">Engagements (Engagement rate)</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import FiltersMixin from "@/mixins/FiltersMixin";

export default {
  mixins: [FiltersMixin],
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.modash-profile-link {
  color: $profile-link-color;
  text-decoration: none;

  &:hover,
  &:active {
    color: $profile-link-color;
    text-decoration: none;
  }

  .list {
    margin-bottom: 1rem;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0.19rem 0.75rem 0 rgba(0, 0, 0, 0.2),
        0 0.06rem 0.9rem 0 rgba(0, 0, 0, 0.19);
    }

    .profile-picture {
      margin-right: 0.5rem;
    }

    .text {
      font-size: 1.25rem;
      font-weight: 400;
      margin-bottom: 0.3rem;
    }

    .label {
      font-size: 0.87rem;
      color: #828282;
      font-weight: 400;
      margin-bottom: 0;
    }
  }
}
</style>
