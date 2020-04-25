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
      <div class="box-card modash-profile-container">
        <h5 class="profile-name">Dwayne Johnson</h5>
        <p>
          <a
            class="profile-handle-link"
            href="https://www.instagram.com/theaveryschrader"
            target="_blank"
            >@therock</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.modash-profile {
  .nav-back {
    margin: 0rem 0rem 1rem 1.2rem;
  }
  .modash-profile-container {
    text-align: center;

    .profile-name {
      font-weight: 400;
    }

    .profile-handle-link {
      color: $profile-handle-link-color;

      &:hover,
      &:active {
        color: $profile-handle-link-color;
      }
    }
  }
}
</style>
