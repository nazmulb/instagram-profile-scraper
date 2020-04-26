<template>
  <div class="row justify-content-center notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from "./NotificationBar";
import { mapState } from "vuex";

export default {
  components: { NotificationBar },
  computed: mapState("notification", ["notifications"])
};
</script>

<style lang="scss" scoped>
.notification-container {
  margin: 0.2rem 0;
}
</style>
