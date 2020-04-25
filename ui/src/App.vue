<template>
  <div id="app" class="container-fluid">
    <Header />

    <main class="modash-main">
      <router-view />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss"></style>
