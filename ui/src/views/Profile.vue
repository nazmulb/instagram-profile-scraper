<template>
  <div class="row justify-content-center modash-profile">
    <div class="col-12 col-sm-8 col-lg-7">
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
      <div class="box modash-profile-container">
        <h2>Dwayne Johnson</h2>
        <p>@therock</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modash-profile {
  .nav-back {
    margin: 0rem 0rem 1rem 1.2rem;
  }
  .modash-profile-container {
    text-align: center;
  }
}
</style>
