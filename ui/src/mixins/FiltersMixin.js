export default {
  filters: {
    tofixed(value) {
      if (!value) return 0;
      return value.toFixed(2);
    },
    todate(value) {
      if (!value) return "";
      const d = new Date(value * 1000);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  }
};
