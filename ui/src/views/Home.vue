<template>
  <div class="row justify-content-center modash-home">
    <div class="col-12 col-sm-8 col-lg-7">
      <ProfileList
        v-for="profile in getProfiles"
        :key="profile.id"
        :profile="profile"
      />
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
    ...mapGetters("profile", ["getProfiles"])
  },
  methods: mapActions("profile", ["fetchProfiles"]),
  created() {
    this.fetchProfiles();
  }
};
</script>

<style lang="scss" scoped></style>
