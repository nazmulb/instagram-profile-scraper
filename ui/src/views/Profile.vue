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

          <Ratings
            :following="getProfile.following"
            :followers="getProfile.followers"
            :avgLikes="getProfile.avgLikes"
            :engagementRate="getProfile.engagementRate"
          />

          <Popular
            v-if="getProfile.popularHashtags || getProfile.popularMentions"
            :hashtags="getProfile.popularHashtags"
            :mentions="getProfile.popularMentions"
          />

          <div class="profile-brand">
            <Brands
              v-if="getProfile.brands && getProfile.brands.length"
              :brands="getProfile.brands"
            />

            <Interests
              v-if="getProfile.interests && getProfile.interests.length"
              :interests="getProfile.interests"
            />
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
import Interests from "@/components/profile/Interests.vue";
import Brands from "@/components/profile/Brands.vue";
import Popular from "@/components/profile/Popular.vue";
import Ratings from "@/components/profile/Ratings.vue";

export default {
  name: "Profile",
  components: {
    LatestPosts,
    Interests,
    Brands,
    Popular,
    Ratings
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

    .profile-picture {
      margin-top: -5rem;
    }

    .profile-name {
      margin-top: 1rem;
      font-weight: 400;
    }

    .profile-handle {
      font-size: 0.75rem;
      font-weight: 400;
      margin-bottom: 1.8rem;
    }
  }
}
</style>
