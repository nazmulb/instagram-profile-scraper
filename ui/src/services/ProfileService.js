import axios from "@/axios.js";

export default {
  getProfiles() {
    return axios.get("/profiles/");
  },
  getProfile(id) {
    return axios.get(`/profiles/${id}`);
  }
};
