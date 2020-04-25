import Vue from "vue";
import Vuex from "vuex";
import * as profile from "@/store/modules/profile.js";
import * as notification from "@/store/modules/notification.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile,
    notification
  }
});
