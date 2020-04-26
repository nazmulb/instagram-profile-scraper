import truncate from "lodash/truncate";

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
    },
    formatnumber(value) {
      if (!value) return 0;
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    commarize(value, isAfterThousand = false) {
      return Math.abs(Number(value)) >= 1.0e9
        ? (Math.abs(Number(value)) / 1.0e9).toFixed(1) + "B"
        : Math.abs(Number(value)) >= 1.0e6
        ? (Math.abs(Number(value)) / 1.0e6).toFixed(1) + "M"
        : Math.abs(Number(value)) >= 1.0e3 && !isAfterThousand
        ? (Math.abs(Number(value)) / 1.0e3).toFixed(1) + "K"
        : isAfterThousand
        ? value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        : Math.abs(Number(value));
    },
    truncate(value, length = 50) {
      if (!value) return "";

      return truncate(value, {
        length: length
      });
    }
  }
};
