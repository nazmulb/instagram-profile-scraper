import ProfileService from "@/services/ProfileService.js";

export const namespaced = true;

export const state = {
  profiles: [],
  profile: {},
  loading: false
};

export const mutations = {
  SET_PROFILES(state, profiles) {
    state.profiles = profiles;
  },
  SET_PROFILE(state, profile) {
    state.profile = profile;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  }
};

export const actions = {
  fetchProfiles({ commit, dispatch }) {
    commit("SET_LOADING", true);
    ProfileService.getProfiles()
      .then(response => {
        commit("SET_PROFILES", response.data);
        commit("SET_LOADING", false);
      })
      .catch(error => {
        commit("SET_LOADING", false);
        const notification = {
          type: "error",
          message: "There was a problem fetching profiles: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  fetchProfile({ commit, dispatch }, id) {
    commit("SET_LOADING", true);
    ProfileService.getProfile(id)
      .then(response => {
        commit("SET_PROFILE", response.data);
        commit("SET_LOADING", false);
      })
      .catch(error => {
        commit("SET_LOADING", false);
        const notification = {
          type: "error",
          message: "There was a problem fetching profile: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  }
};

export const getters = {
  getProfiles: state => state.profiles,
  getProfile: state => state.profile,
  getLoading: state => state.loading
};
