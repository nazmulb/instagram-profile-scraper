<template>
  <router-link
    class="modash-profile-link"
    :to="{ name: 'profile', params: { id: profile.id } }"
  >
    <div class="box-card list">
      <div class="profile-picture">
        <img
          :src="profile.profilePicUrl"
          width="50"
          height="50"
          :alt="profile.name"
        />
      </div>

      <div>
        <h5 class="profile-name">{{ profile.name }}</h5>
        <p class="profile-handle">@{{ profile.username }}</p>
      </div>

      <div>
        <p>{{ profile.followers | commarize }}</p>
        <p>Followers</p>
      </div>

      <div>
        <p>
          {{ profile.engagements | commarize }} ({{
            profile.engagementRate | tofixed
          }}%)
        </p>
        <p>Engagements (Engagement rate)</p>
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
    font-weight: 400;
    margin-bottom: 1rem;
    min-height: 5rem;
    transition: all 0.2s linear;
    cursor: pointer;
  }

  .list:hover {
    transform: scale(1.01);
    box-shadow: 0 0.19rem 0.75rem 0 rgba(0, 0, 0, 0.2),
      0 0.06rem 0.9rem 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
