<template>
  <div class="row justify-content-center modash-home">
    <div class="col-12 col-sm-8 col-lg-7">
      <div class="box-card modash-list">Dwayne Johnson</div>
      <div class="box-card modash-list">Dwayne Johnson</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    //HelloWorld
  },
  computed: {
    ...mapState(["profile"])
  },
  methods: mapActions("profile", ["fetchProfiles"]),
  created() {
    this.fetchProfiles();
  }
};
</script>

<style lang="scss" scoped>
.modash-home {
  .modash-list {
    margin-bottom: 1rem;
    min-height: 5rem;
    transition: all 0.2s linear;
    cursor: pointer;
  }

  .modash-list:hover {
    transform: scale(1.01);
    box-shadow: 0 0.19rem 0.75rem 0 rgba(0, 0, 0, 0.2),
      0 0.06rem 0.9rem 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
