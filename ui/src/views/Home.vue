<template>
  <div class="row justify-content-center modash-home">
    <div class="col-12 col-sm-8 col-lg-7">
      <div v-if="getLoading" class="box-card text-center">Loading...</div>
      <div
        v-if="getProfiles.length==0 && !getLoading"
        class="box-card text-center"
      >There is no profile to show!</div>
      <ProfileList v-for="profile in getProfiles" :key="profile.id" :profile="profile" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import ProfileList from "@/components/ProfileList.vue";

export default {
  name: "Home",
  components: {
    ProfileList
  },
  computed: {
    ...mapGetters("profile", ["getProfiles", "getLoading"])
  },
  methods: mapActions("profile", ["fetchProfiles"]),
  created() {
    this.fetchProfiles();
  }
};
</script>

<style lang="scss" scoped></style>
