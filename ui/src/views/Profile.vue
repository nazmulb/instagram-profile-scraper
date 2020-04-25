<template>
  <div class="row justify-content-center modash-profile">
    <div class="col-12 col-sm-8 col-lg-7">
      <div v-if="getLoading" class="box-card text-center">Loading...</div>
      <div v-if="!getLoading">
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
            <div v-if="getProfile.brands.length" class="box-card">
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

            <div v-if="getProfile.interests.length" class="box-card">
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

          <div v-if="getProfile.posts.length" class="profile-latest-posts">
            <img
              src="../assets/images/instagram.svg"
              width="13"
              height="13"
              alt="instagram"
            />
            <h6 class="section-header">Latest posts</h6>
            <div
              class="box-card"
              v-for="post in getProfile.posts"
              :key="post.id"
            >
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
                    src="../assets/images/play.svg"
                    width="11"
                    height="11"
                    alt="play"
                  />
                  {{ post.videoViewCount }}
                </span>
                <span>
                  <img
                    src="../assets/images/likes.svg"
                    width="15"
                    height="10"
                    alt="likes"
                  />
                  {{ post.totalLikes }}
                </span>
                <span>
                  <img
                    src="../assets/images/comments.svg"
                    width="15"
                    height="12"
                    alt="comments"
                  />
                  {{ post.totalComments }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
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
