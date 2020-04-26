<template>
  <div id="app" class="container-fluid">
    <Header />
    <NotificationContainer />
    <main class="modash-main">
      <router-view />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  name: "App",
  components: {
    Header,
    NotificationContainer
  }
};
</script>

<style lang="scss"></style>
