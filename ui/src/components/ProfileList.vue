<template>
  <router-link
    class="modash-profile-link"
    :to="{ name: 'profile', params: { id: profile.id } }"
  >
    <div class="box-card modash-list">{{ profile.name }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    profile: Object
  }
};
</script>

<style lang="scss" scoped>
.modash-profile-link {
  color: #000;
  text-decoration: none;

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
