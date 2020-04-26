export default {
  filters: {
    tofixed(value) {
      if (!value) return 0;
      return value.toFixed(2);
    }
  }
};
