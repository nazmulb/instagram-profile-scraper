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

export default {
  name: "Home",
  components: {
    //HelloWorld
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
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
