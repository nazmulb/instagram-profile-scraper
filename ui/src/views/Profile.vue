<template>
  <div class="row justify-content-center modash-profile">
    <div class="col-12 col-sm-8 col-lg-7">
      <Spinner v-if="getLoading" />
      <div v-else>
        <div class="nav-back">
          <router-link to="/">
            <img
              src="../assets/images/back.svg"
              width="23"
              height="20"
              alt="back"
            />
          </router-link>
        </div>
        <div class="box-card profile-container">
          <div class="profile-picture">
            <img
              :src="getProfile.profilePicUrl"
              width="120"
              height="120"
              :alt="getProfile.name"
            />
          </div>
          <h5 class="profile-name">{{ getProfile.name }}</h5>
          <p class="profile-handle">@{{ getProfile.username }}</p>

          <div class="profile-rating">
            <div class="box-card">
              <img
                src="../assets/images/group.svg"
                width="26"
                height="14"
                alt="group"
              />
              <p>{{ getProfile.following }}</p>
              <p>Following</p>
            </div>

            <div class="box-card">
              <img
                src="../assets/images/group.svg"
                width="26"
                height="14"
                alt="group"
              />
              <p>{{ getProfile.followers }}</p>
              <p>Followers</p>
            </div>

            <div class="box-card">
              <img
                src="../assets/images/favorite.svg"
                width="24"
                height="18"
                alt="favorite"
              />
              <p>{{ getProfile.avgLikes }}</p>
              <p>Avg Likes</p>
            </div>

            <div class="box-card">
              <img
                src="../assets/images/all_inclusive.svg"
                width="29"
                height="12"
                alt="all_inclusive"
              />
              <p>{{ getProfile.engagementRate }}%</p>
              <p>Engagement Rate</p>
            </div>
          </div>

          <div
            v-if="getProfile.popularHashtags || getProfile.popularMentions"
            class="box-card profile-popular-hashtags"
          >
            <h6 class="section-header">Popular #hashtags and @mentions</h6>
            <p>{{ getProfile.popularHashtags }}</p>
            <p>{{ getProfile.popularMentions }}</p>
          </div>

          <div class="profile-brand">
            <div
              v-if="getProfile.brands && getProfile.brands.length"
              class="box-card"
            >
              <h6 class="section-header">Brand affinity</h6>
              <ul class="list-group">
                <li
                  v-for="brand in getProfile.brands"
                  :key="brand.id"
                  class="list-item"
                >
                  <span>{{ brand.name }}</span>
                  <span>{{ brand.sentimentRatio }}%</span>
                </li>
              </ul>
            </div>

            <div
              v-if="getProfile.interests && getProfile.interests.length"
              class="box-card"
            >
              <h6 class="section-header">Interests</h6>
              <ul class="list-group">
                <li
                  v-for="interest in getProfile.interests"
                  :key="interest.id"
                  class="list-item"
                >
                  <span>{{ interest.topic }}</span>
                  <span>{{ interest.interestRatio }}%</span>
                </li>
              </ul>
            </div>
          </div>

          <LatestPosts
            v-if="getProfile.posts && getProfile.posts.length"
            :posts="getProfile.posts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LatestPosts from "@/components/profile/LatestPosts.vue";

export default {
  name: "Profile",
  components: {
    LatestPosts
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters("profile", ["getProfile", "getLoading"])
  },
  methods: mapActions("profile", ["fetchProfile"]),
  created() {
    this.fetchProfile(this.id);
  }
};
</script>

<style lang="scss" scoped>
.modash-profile {
  .nav-back {
    margin: 0rem 0rem 1rem 1.2rem;
  }
  .profile-container {
    text-align: center;
  }
}
</style>
