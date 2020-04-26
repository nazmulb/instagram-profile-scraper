<template>
  <div class="col-12 col-sm-8 col-lg-7">
    <div class="alert text-center" role="alert" :class="notificationTypeClass">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions("notification", ["remove"]),
  computed: {
    notificationTypeClass() {
      const ntype =
        this.notification.type == "error" ? "danger" : this.notification.type;
      return `alert-${ntype}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
