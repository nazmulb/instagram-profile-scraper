import ProfileService from "@/services/ProfileService.js";

export const namespaced = true;

export const state = {
  profiles: [],
  profile: {}
};

export const mutations = {
  SET_PROFILES(state, profiles) {
    state.profiles = profiles;
  },
  SET_PROFILE(state, profile) {
    state.profile = profile;
  }
};

export const actions = {
  fetchProfiles({ commit, dispatch }) {
    ProfileService.getProfiles()
      .then(response => {
        commit("SET_PROFILES", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching profiles: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  fetchProfile({ commit, dispatch }, id) {
    ProfileService.getProfile(id)
      .then(response => {
        commit("SET_PROFILE", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching profile: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  }
};

export const getters = {};
